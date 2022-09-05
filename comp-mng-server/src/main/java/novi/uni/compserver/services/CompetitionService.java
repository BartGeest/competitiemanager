package novi.uni.compserver.services;

import novi.uni.compserver.exceptions.CompetitionNotFoundException;
import novi.uni.compserver.exceptions.NoCompetitorsException;
import novi.uni.compserver.mappers.CompetitionMapper;
import novi.uni.compserver.model.dtos.SingleCompetitionDTO;
import novi.uni.compserver.model.dtos.TeamDTO;
import novi.uni.compserver.model.dtos.UserCompetitionDTO;
import novi.uni.compserver.model.entities.Competition;
import novi.uni.compserver.model.entities.Team;
import novi.uni.compserver.model.enums.SportName;
import novi.uni.compserver.payload.requests.CompetitionCreationRequest;
import novi.uni.compserver.payload.responses.ApiResponse;
import novi.uni.compserver.repositories.CompetitionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class CompetitionService {

    @Autowired
    CompetitionRepository competitionRepository;

    public List<UserCompetitionDTO> getAllUserCompetitionsBySport(SportName sportName) {

        return competitionRepository.findAllBySportnameAndIsClosedForParticipationIsFalse(sportName)
                .stream()
                .map(CompetitionMapper::mapToUserCompetitionDTO)
                .collect(Collectors.toList());
    }

    public SingleCompetitionDTO getSingleCompetition(Long id) {
        Competition competition = competitionRepository.findById(id)
                .orElseThrow(() -> new CompetitionNotFoundException("Kan geen competitie vinden met id " + id));

        List<Team> teams = competition.getCompetitors();

        if (teams == null || teams.isEmpty()) {
            throw new NoCompetitorsException("Er zijn geen teams in de competitie");
        }

        return CompetitionMapper.mapToSingleCompetitionDTO(competition);
    }

    public ApiResponse createCompetition(CompetitionCreationRequest competitionCreationRequest) {
        Competition competition = new Competition(competitionCreationRequest.getCompetitionName(), competitionCreationRequest.getSportName());

        competitionRepository.save(competition);

        return new ApiResponse("Compeitie is aangemaakt");
    }

    public ApiResponse closeCompetition() {
        return new ApiResponse("Mogelijkheid tot deelname is gesloten");
    }
}
