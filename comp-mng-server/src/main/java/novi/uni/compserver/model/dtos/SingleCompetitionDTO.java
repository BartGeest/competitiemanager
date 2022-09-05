package novi.uni.compserver.model.dtos;

import java.util.List;

public class SingleCompetitionDTO {
    private String name;
    private List<TeamInCompDTO> teams;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<TeamInCompDTO> getTeams() {
        return teams;
    }

    public void setTeams(List<TeamInCompDTO> teams) {
        this.teams = teams;
    }
}
