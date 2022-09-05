package novi.uni.compserver.mappers;

import novi.uni.compserver.model.dtos.TeamDTO;
import novi.uni.compserver.model.dtos.TeamInCompDTO;
import novi.uni.compserver.model.entities.Team;

import java.util.List;

public class TeamMapper {

    public static TeamDTO mapToTeamDto(Team team) {
        TeamDTO teamDTO = new TeamDTO();
        teamDTO.setId(team.getId());
        teamDTO.setName(team.getName());
        teamDTO.setAvailable(team.getCanParticipate());
        teamDTO.setWonMatches(team.getWonMatches());
        teamDTO.setTieMatches(team.getTieMatches());
        teamDTO.setLostMatches(team.getLostMatches());

        return teamDTO;
    }

    public static TeamInCompDTO mapToTeanInCompDto(Team team) {
        TeamInCompDTO teamInCompDTO = new TeamInCompDTO();
        teamInCompDTO.setId(team.getId());
        teamInCompDTO.setName(team.getName());
        teamInCompDTO.setOwner(team.getOwner().getUsername());
        teamInCompDTO.setWonMatches(team.getWonMatches());
        teamInCompDTO.setTieMatches(team.getTieMatches());
        teamInCompDTO.setLostMatches(team.getLostMatches());

        return teamInCompDTO;
    }


}
