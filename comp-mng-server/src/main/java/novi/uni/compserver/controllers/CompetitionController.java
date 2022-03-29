package novi.uni.compserver.controllers;

import novi.uni.compserver.constants.Constants;
import novi.uni.compserver.model.enums.SportName;
import novi.uni.compserver.payload.responses.CompetitionResponse;
import novi.uni.compserver.payload.responses.PagedResponse;
import novi.uni.compserver.security.CurrentNoviEmployee;
import novi.uni.compserver.security.NoviEmployeePrincipal;
import novi.uni.compserver.services.CompetitionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/competition")
public class CompetitionController {

    @Autowired
    CompetitionService competitionService;

    @GetMapping("/get_competitions/{sportName}")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> getCompetitions(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @PathVariable SportName sportName,
            @RequestParam(value = "page", defaultValue = Constants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(value = "size", defaultValue = Constants.DEFAULT_PAGE_SIZE) int size
            ) {

        PagedResponse<CompetitionResponse> response = competitionService.giveCompetitionsBySport(sportName, page, size);

        return ResponseEntity.ok(response);
    }
}
