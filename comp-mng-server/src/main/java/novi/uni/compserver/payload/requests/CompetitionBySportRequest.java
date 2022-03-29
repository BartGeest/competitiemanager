package novi.uni.compserver.payload.requests;

import novi.uni.compserver.model.enums.SportName;

public class CompetitionBySportRequest {

    private SportName sportName;

    public SportName getSportName() {
        return sportName;
    }
}
