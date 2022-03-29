package novi.uni.compserver.mappers;

import novi.uni.compserver.model.Competition;
import novi.uni.compserver.payload.responses.CompetitionResponse;

public class CompetitionMapper {

    public static CompetitionResponse mapCompToCompResponse(Competition competition) {
        CompetitionResponse competitionResponse = new CompetitionResponse();

        competitionResponse.setId(competition.getId());
        competitionResponse.setName(competition.getName());
        competitionResponse.setStartsAt(competition.getStartsAt());
        competitionResponse.setCurrentTeamAmount(competition.getCompetitors().size());
        competitionResponse.setMaxTeamAmount(competition.getMaxAllowedTeams());

        return competitionResponse;
    }
}
