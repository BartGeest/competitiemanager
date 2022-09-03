package novi.uni.compserver.model.dtos;

public class ParticipationDTO {

    private String competitionName;

    private String teamName;

    public ParticipationDTO(String competitionName, String teamName) {
        this.competitionName = competitionName;
        this.teamName = teamName;
    }

    public String getCompetitionName() {
        return competitionName;
    }

    public String getTeamName() {
        return teamName;
    }
}
