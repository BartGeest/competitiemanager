package novi.uni.compserver.controllers;

import novi.uni.compserver.facades.ParticipationFacade;
import novi.uni.compserver.model.dtos.ParticipationDTO;
import novi.uni.compserver.model.dtos.SingleCompetitionDTO;
import novi.uni.compserver.model.enums.SportName;
import novi.uni.compserver.payload.requests.CompetitionClosingRequest;
import novi.uni.compserver.payload.requests.CompetitionCreationRequest;
import novi.uni.compserver.payload.requests.ParticipationRequest;
import novi.uni.compserver.payload.responses.ApiResponse;
import novi.uni.compserver.payload.responses.CompetitionResponse;
import novi.uni.compserver.security.CurrentNoviEmployee;
import novi.uni.compserver.security.NoviEmployeePrincipal;
import novi.uni.compserver.services.CompetitionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/competition")
public class CompetitionController {

    @Autowired
    CompetitionService competitionService;

    @Autowired
    ParticipationFacade participationFacade;

    @GetMapping("/get_competitions/{sportName}")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<CompetitionResponse> getCompetitions(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @PathVariable SportName sportName) {

        CompetitionResponse response = new CompetitionResponse(competitionService.getAllUserCompetitionsBySport(sportName));

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/get_single")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<SingleCompetitionDTO> getSingleCompetition(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @PathVariable Long id) {

        return new ResponseEntity<>(competitionService.getSingleCompetition(id), HttpStatus.OK);
    }

    @PostMapping("/participate")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<ParticipationDTO> participate(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @Valid @RequestBody ParticipationRequest participationRequest) {

        return new ResponseEntity<>(
                participationFacade.addTeamToCompetition(
                        participationRequest.getCompetitionId(),
                        participationRequest.getTeamId()),
                HttpStatus.OK);
    }

    @PostMapping("/create")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> postCompetition(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @Valid @RequestBody CompetitionCreationRequest competitionCreationRequest) {

        ApiResponse apiResponse = competitionService.createCompetition(competitionCreationRequest);

        return ResponseEntity.ok(apiResponse);
    }

    @PostMapping("/close")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> closeCompetition(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @Valid @RequestBody CompetitionClosingRequest competitionClosingRequest) {

        ApiResponse apiResponse = competitionService.closeCompetition();

        return ResponseEntity.ok(apiResponse);
    }
}
