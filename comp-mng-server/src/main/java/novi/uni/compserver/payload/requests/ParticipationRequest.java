package novi.uni.compserver.payload.requests;

public class ParticipationRequest {
    private Long competitionId;

    private Long teamId;

    public Long getCompetitionId() {
        return competitionId;
    }

    public Long getTeamId() {
        return teamId;
    }

    public void setCompetitionId(Long competitionId) {
        this.competitionId = competitionId;
    }

    public void setTeamId(Long teamId) {
        this.teamId = teamId;
    }
}
