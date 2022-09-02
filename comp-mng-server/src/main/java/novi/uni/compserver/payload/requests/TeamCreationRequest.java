package novi.uni.compserver.payload.requests;

import novi.uni.compserver.model.enums.SportName;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

public class TeamCreationRequest {

    private SportName sportname;

    private List<String> teams;

    public SportName getSportName() {
        return sportname;
    }

    public List<String> getTeams() {
        return this.teams;
    }

    public void setSportname(SportName sportName) {
        this.sportname = sportName;
    }

    public void setTeams(List<String> teams) {
        this.teams = teams;
    }
}
