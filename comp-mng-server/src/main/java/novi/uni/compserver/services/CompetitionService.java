package novi.uni.compserver.services;

import novi.uni.compserver.mappers.CompetitionMapper;
import novi.uni.compserver.model.dtos.UserCompetitionDTO;
import novi.uni.compserver.model.entities.Competition;
import novi.uni.compserver.model.enums.SportName;
import novi.uni.compserver.payload.requests.CompetitionCreationRequest;
import novi.uni.compserver.payload.responses.ApiResponse;
import novi.uni.compserver.repositories.CompetitionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class CompetitionService {

    @Autowired
    CompetitionRepository competitionRepository;

    public List<UserCompetitionDTO> getAllUserCompetitionsBySport(SportName sportName) {

        return competitionRepository.findAllBySportnameAndIsClosedForParticipationIsFalse(sportName)
                .stream()
                .map(CompetitionMapper::map)
                .collect(Collectors.toList());
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
