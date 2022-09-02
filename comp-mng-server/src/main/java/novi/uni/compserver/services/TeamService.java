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

    public List<String> create(Long id, TeamCreationRequest request) {

        NoviEmployee noviEmployee = noviEmployeeRepository.findById(id)
                .orElseThrow(() -> new NoviEmployeeNotFoundException("Kan geen medewerker vinden met id: " + id));

        int teamAmount = teamRepository.findByOwnerIdAndSportName(id, request.getSportName()).size();

        if (teamAmount + request.getTeams().size() > ALLOWED_TEAMS_PER_SPORT_PER_USER) {
            int num = ALLOWED_TEAMS_PER_SPORT_PER_USER - request.getTeams().size();
            if (num == 0) {
                throw new TeamCreationException("Je hebt al het maximaal aantal teams voor deze sport.");
            }
            throw new TeamCreationException("Je mag nog maar " + (ALLOWED_TEAMS_PER_SPORT_PER_USER - request.getTeams().size()) + "aanmaken.");
        }

        for (String name : request.getTeams()) {
            Team team = new Team(name, noviEmployee, request.getSportName());
            noviEmployee.getTeams().add(team);
            teamRepository.save(team);
        }

        return request.getTeams();
    }

    //TODO: methode voor owner team swap

    //TODO: methode voor weghalen bij user (verkocht) en toevoegen aan user (gekocht)
}
