package novi.uni.compserver.payload.responses;

import novi.uni.compserver.model.entities.Team;

public class TeamCreationResponse {

    private String message;

    private Team team;

    public TeamCreationResponse(String message, Team team) {
        this.message = message;
        this.team = team;
    }

    public String getMessage() {
        return message;
    }

    public Team getRequest() {
        return team;
    }
}
