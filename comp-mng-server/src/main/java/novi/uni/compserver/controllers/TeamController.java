package novi.uni.compserver.controllers;

import novi.uni.compserver.payload.requests.TeamRequest;
import novi.uni.compserver.payload.responses.ApiResponse;
import novi.uni.compserver.security.CurrentNoviEmployee;
import novi.uni.compserver.security.NoviEmployeePrincipal;
import novi.uni.compserver.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/team")
public class TeamController {

    @Autowired
    TeamService teamService;

    @PostMapping("/create")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> createTeam(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @Valid @RequestBody TeamRequest teamRequest) {

        ApiResponse response = teamService.isTeamCreated(noviEmployeePrincipal.getId(), teamRequest.getName(), teamRequest.getSportName());

        return new ResponseEntity<>(response.getMessage(), response.getStatus());
    }
}
