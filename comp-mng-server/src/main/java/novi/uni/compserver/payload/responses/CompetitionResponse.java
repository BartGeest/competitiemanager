package novi.uni.compserver.payload.responses;

import java.util.Date;

public class CompetitionResponse {

    private long id;

    private String name;

    private Date startsAt;

    private int currentTeamAmount;

    private int maxTeamAmount;

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setStartsAt(Date startsAt) {
        this.startsAt = startsAt;
    }

    public void setCurrentTeamAmount(int currentTeamAmount) {
        this.currentTeamAmount = currentTeamAmount;
    }

    public void setMaxTeamAmount(int maxTeamAmount) {
        this.maxTeamAmount = maxTeamAmount;
    }
}
