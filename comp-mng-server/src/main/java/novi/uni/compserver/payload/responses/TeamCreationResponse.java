package novi.uni.compserver.payload.responses;

import java.util.List;

public class TeamCreationResponse {

    private String message;

    private List<String> createdTeams;

    private int numberOfTeams;

    public TeamCreationResponse(String message, List<String> teams) {
        this.message = message;
        this.createdTeams = teams;
        this.numberOfTeams = this.createdTeams.size();
    }

    public String getMessage() {
        return message;
    }

    public List<String> getCreatedTeams() {
        return this.createdTeams;
    }

    public int getNumberOfTeams() {
        return this.numberOfTeams;
    }
}
