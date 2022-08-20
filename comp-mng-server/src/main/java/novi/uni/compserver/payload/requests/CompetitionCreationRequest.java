package novi.uni.compserver.payload.requests;

import novi.uni.compserver.model.enums.SportName;

public class CompetitionCreationRequest {

    private String competitionName;

    private SportName sportName;

    public CompetitionCreationRequest() {
    }

    public String getCompetitionName() {
        return competitionName;
    }

    public SportName getSportName() {
        return sportName;
    }
}
