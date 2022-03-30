package novi.uni.compserver.services;

import novi.uni.compserver.exceptions.NoviEmployeeNotFoundException;
import novi.uni.compserver.model.NoviEmployee;
import novi.uni.compserver.model.Team;
import novi.uni.compserver.model.enums.SportName;
import novi.uni.compserver.payload.responses.ApiResponse;
import novi.uni.compserver.repositories.NoviEmployeeRepository;
import novi.uni.compserver.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class TeamService {

    @Autowired
    TeamRepository teamRepository;

    @Autowired
    NoviEmployeeRepository noviEmployeeRepository;

    public ApiResponse isTeamCreated(Long id, String teamname, SportName sportName) {

        NoviEmployee noviEmployee = noviEmployeeRepository.findById(id)
                .orElseThrow(() -> new NoviEmployeeNotFoundException("Kan Novimedewerker niet vinden met id: " + id));

        Team newTeam = new Team(teamname, noviEmployee, sportName);
        noviEmployee.getTeams().add(newTeam);
        teamRepository.save(newTeam);

        return new ApiResponse("Team is aangemaakt", HttpStatus.OK);
    }

    //TODO: methode voor owner team swap

    //TODO: methode voor weghalen bij user (verkocht) en toevoegen aan user (gekocht)
}
