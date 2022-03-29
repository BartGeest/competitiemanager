package novi.uni.compserver.controllers;

import novi.uni.compserver.constants.Constants;
import novi.uni.compserver.payload.requests.CompetitionBySportRequest;
import novi.uni.compserver.payload.responses.CompetitionResponse;
import novi.uni.compserver.payload.responses.PagedResponse;
import novi.uni.compserver.security.CurrentNoviEmployee;
import novi.uni.compserver.security.NoviEmployeePrincipal;
import novi.uni.compserver.services.CompetitionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/competition")
public class CompetitionController {

    @Autowired
    CompetitionService competitionService;

    @GetMapping("/get_competitions")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> getCompetitions(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @Valid @RequestBody CompetitionBySportRequest request,
            @RequestParam(value = "page", defaultValue = Constants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(value = "size", defaultValue = Constants.DEFAULT_PAGE_SIZE) int size
            ) {

        PagedResponse<CompetitionResponse> response = competitionService.giveCompetitionsBySport(request.getSportName(), page, size);

        return ResponseEntity.ok(response);
    }

    //TODO: Nog andere methodes? of alleen de namen van competitions terug krijgen?
}
