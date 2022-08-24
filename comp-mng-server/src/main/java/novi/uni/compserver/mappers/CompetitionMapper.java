package novi.uni.compserver.mappers;

import novi.uni.compserver.model.dtos.UserCompetitionDTO;
import novi.uni.compserver.model.entities.Competition;
import novi.uni.compserver.payload.responses.CompetitionResponse;

public class CompetitionMapper {

    private static final int defaultTeamAmount = 0;
    private static final String SLASH = "/";

    public static UserCompetitionDTO map(Competition competition) {
        UserCompetitionDTO userCompetitionDTO = new UserCompetitionDTO();
        userCompetitionDTO.setId(competition.getId());
        userCompetitionDTO.setName(competition.getName());

        if (competition.getCompetitors() == null) {
            userCompetitionDTO.setCompetitorAmount("" + defaultTeamAmount + SLASH + competition.getMaxAllowedTeams());
        } else {
            userCompetitionDTO.setCompetitorAmount("" + competition.getCompetitors().size() + SLASH + competition.getMaxAllowedTeams());
        }

        return userCompetitionDTO;
    }
}
