package novi.uni.compserver.controllers;

import novi.uni.compserver.model.enums.SportName;
import novi.uni.compserver.payload.requests.TeamCreationRequest;
import novi.uni.compserver.payload.responses.ApiResponse;
import novi.uni.compserver.payload.responses.TeamCreationResponse;
import novi.uni.compserver.payload.responses.TeamsResponse;
import novi.uni.compserver.security.CurrentNoviEmployee;
import novi.uni.compserver.security.NoviEmployeePrincipal;
import novi.uni.compserver.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/team")
public class TeamController {

    @Autowired
    TeamService teamService;

    @GetMapping("get/teams/{sportName}")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> getTeams(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @PathVariable SportName sportName) {

        TeamsResponse response = new TeamsResponse(
                teamService.getTeams(noviEmployeePrincipal.getId(), sportName));

        return ResponseEntity.ok(response);
    }

    @PostMapping("/create")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<TeamCreationResponse> createTeam(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @Valid @RequestBody TeamCreationRequest request) {

        TeamCreationResponse response = new TeamCreationResponse(
                "Je nieuwe team is succesvol aangemaakt!",
                teamService.create(noviEmployeePrincipal.getId(), request));

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
