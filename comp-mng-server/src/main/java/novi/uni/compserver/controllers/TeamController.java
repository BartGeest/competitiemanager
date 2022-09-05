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
                teamService.getAllTeamsBySport(noviEmployeePrincipal.getId(), sportName));

        return ResponseEntity.ok(response);
    }

    @GetMapping("/get/playable/{sportName}")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> getPlayableTeams(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @PathVariable SportName sportName) {

        TeamsResponse response = new TeamsResponse(
                teamService.getTeamsThatCanPlay(noviEmployeePrincipal.getId(), sportName));

        return ResponseEntity.ok(response);
    }

    @PostMapping("/create")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<TeamCreationResponse> createTeam(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @Valid @RequestBody TeamCreationRequest request) {

        System.out.println(request.getSportName());

        TeamCreationResponse response = new TeamCreationResponse(
                "Het aantal teams wat je hebt aangemaakt: ",
                teamService.create(
                        noviEmployeePrincipal.getId(),
                        request.getSportName(),
                        request.getTeams()));

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/check/{name}")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> checkTeamName(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @PathVariable String name) {

        Boolean nameTaken = teamService.isNameTaken(name);

        return ResponseEntity.ok(nameTaken);
    }
}
