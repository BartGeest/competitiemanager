package novi.uni.compserver.payload.responses;

import novi.uni.compserver.model.dtos.TeamDTO;

import java.util.List;

public class TeamsResponse {

    private List<TeamDTO> teams;

    public TeamsResponse(List<TeamDTO> teams) {
        this.teams = teams;
    }

    public List<TeamDTO> getTeams() {
        return teams;
    }
}
