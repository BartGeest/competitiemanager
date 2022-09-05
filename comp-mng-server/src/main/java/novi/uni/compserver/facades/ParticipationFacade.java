package novi.uni.compserver.facades;

import novi.uni.compserver.exceptions.CompetitionNotFoundException;
import novi.uni.compserver.exceptions.TeamNotFoundException;
import novi.uni.compserver.model.dtos.ParticipationDTO;
import novi.uni.compserver.model.entities.Competition;
import novi.uni.compserver.model.entities.Team;
import novi.uni.compserver.repositories.CompetitionRepository;
import novi.uni.compserver.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ParticipationFacade {

    @Autowired
    CompetitionRepository competitionRepository;

    @Autowired
    TeamRepository teamRepository;

    public ParticipationDTO addTeamToCompetition(Long competitionId, Long teamId) {

        Competition competition = competitionRepository.findById(competitionId)
                .orElseThrow(() -> new CompetitionNotFoundException("Kon geen competitie vinden met id: " + competitionId));

        Team team = teamRepository.findById(teamId)
                .orElseThrow(() -> new TeamNotFoundException("Kon geen team vinden met id: " + teamId));

        competition.getCompetitors().add(team);
        team.setCanParticipate(false);
        teamRepository.save(team);
        competitionRepository.save(competition);

        return new ParticipationDTO(competition.getName(), team.getName());
    }
}
