package novi.uni.compserver.mappers;

import novi.uni.compserver.model.dtos.SingleCompetitionDTO;
import novi.uni.compserver.model.dtos.UserCompetitionDTO;
import novi.uni.compserver.model.entities.Competition;
import novi.uni.compserver.payload.responses.CompetitionResponse;

import java.util.stream.Collectors;

public class CompetitionMapper {

    private static final int defaultTeamAmount = 0;
    private static final String SLASH = "/";

    public static UserCompetitionDTO mapToUserCompetitionDTO(Competition competition) {
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

    public static SingleCompetitionDTO mapToSingleCompetitionDTO(Competition competition) {
        SingleCompetitionDTO singleCompetitionDTO = new SingleCompetitionDTO();

        singleCompetitionDTO.setName(competition.getName());
        singleCompetitionDTO.setTeams(
                competition.getCompetitors()
                        .stream()
                        .map(TeamMapper::mapToTeanInCompDto)
                        .collect(Collectors.toList()));

        return singleCompetitionDTO;
    }
}
