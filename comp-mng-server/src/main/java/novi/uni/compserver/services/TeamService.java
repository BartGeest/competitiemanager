package novi.uni.compserver.services;

import novi.uni.compserver.constants.Constants;
import novi.uni.compserver.exceptions.NoviEmployeeNotFoundException;
import novi.uni.compserver.exceptions.TeamCreationException;
import novi.uni.compserver.mappers.TeamMapper;
import novi.uni.compserver.model.dtos.TeamDTO;
import novi.uni.compserver.model.entities.NoviEmployee;
import novi.uni.compserver.model.entities.Team;
import novi.uni.compserver.model.enums.SportName;
import novi.uni.compserver.payload.requests.TeamCreationRequest;
import novi.uni.compserver.payload.responses.ApiResponse;
import novi.uni.compserver.payload.responses.TeamCreationResponse;
import novi.uni.compserver.repositories.NoviEmployeeRepository;
import novi.uni.compserver.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static novi.uni.compserver.constants.Constants.ALLOWED_TEAMS_PER_SPORT_PER_USER;

@Service
public class TeamService {

    @Autowired
    TeamRepository teamRepository;

    @Autowired
    NoviEmployeeRepository noviEmployeeRepository;

    public List<TeamDTO> getTeams(Long id, SportName sportName) {

        return teamRepository.findByOwnerIdAndSportName(id, sportName)
                .stream()
                .map(TeamMapper::mapToTeamDto)
                .collect(Collectors.toList());
    }

    public List<String> create(Long id, SportName sportName, List<String> teams) {

        NoviEmployee noviEmployee = noviEmployeeRepository.findById(id)
                .orElseThrow(() -> new NoviEmployeeNotFoundException("Kan geen medewerker vinden met id: " + id));

        int teamAmount = teamRepository.findByOwnerIdAndSportName(id, sportName).size();
        int teamsToCreateAmount = teams.size();

        if (teamAmount + teamsToCreateAmount > ALLOWED_TEAMS_PER_SPORT_PER_USER) {
            if (teamAmount == ALLOWED_TEAMS_PER_SPORT_PER_USER) {
                throw new TeamCreationException("Je hebt al het maximaal aantal teams voor deze sport.");
            }
            throw new TeamCreationException("Je mag nog maar " + (ALLOWED_TEAMS_PER_SPORT_PER_USER - teamsToCreateAmount) + " aanmaken.");
        }

        for (String name : teams) {
            Team team = new Team(name, noviEmployee, sportName);
            noviEmployee.getTeams().add(team);
            teamRepository.save(team);
        }

        return teams;
    }

    //TODO: methode voor owner team swap

    //TODO: methode voor weghalen bij user (verkocht) en toevoegen aan user (gekocht)
}
