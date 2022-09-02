package novi.uni.compserver.payload.responses;

import novi.uni.compserver.model.dtos.UserCompetitionDTO;

import java.util.List;

public class CompetitionResponse {

    private List<UserCompetitionDTO> competitions;

    public CompetitionResponse(List<UserCompetitionDTO> competitions) {
        this.competitions = competitions;
    }

    public List<UserCompetitionDTO> getCompetitions() {
        return competitions;
    }
}
