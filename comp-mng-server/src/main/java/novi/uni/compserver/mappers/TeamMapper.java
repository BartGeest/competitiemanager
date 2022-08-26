package novi.uni.compserver.mappers;

import novi.uni.compserver.model.dtos.TeamDTO;
import novi.uni.compserver.model.entities.Team;

import java.util.List;

public class TeamMapper {

    private static final String YES = "Ja";
    private static final String NO = "Nee";

    public static TeamDTO mapToTeamDto(Team team) {
        TeamDTO teamDTO = new TeamDTO();
        teamDTO.setId(team.getId());
        teamDTO.setName(team.getName());

        if (team.getCanParticipate()) {
            teamDTO.setParticipation(YES);
        } else {
            teamDTO.setParticipation(NO);
        }

        teamDTO.setWonMatches(team.getWonMatches());
        teamDTO.setTieMatches(team.getTieMatches());
        teamDTO.setLostMatches(team.getLostMatches());

        return teamDTO;
    }
}
