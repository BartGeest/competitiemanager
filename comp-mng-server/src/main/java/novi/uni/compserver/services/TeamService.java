package novi.uni.compserver.services;

import novi.uni.compserver.exceptions.NoviEmployeeNotFoundException;
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

    public Team create(Long id, TeamCreationRequest request) {

        //TODO: wellicht een check of het maximaal aantal gemaakte teams al is bereikt

        NoviEmployee noviEmployee = noviEmployeeRepository.findById(id)
                .orElseThrow(() -> new NoviEmployeeNotFoundException("Kan geen medewerker vinden met id: " + id));

        Team team = new Team(
                request.getName(),
                noviEmployee,
                request.getSportName());

        noviEmployee.getTeams().add(team);
        teamRepository.save(team);

        return team;
    }



    //TODO: methode voor owner team swap

    //TODO: methode voor weghalen bij user (verkocht) en toevoegen aan user (gekocht)
}
