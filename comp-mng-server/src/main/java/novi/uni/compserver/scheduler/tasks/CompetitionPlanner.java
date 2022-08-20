package novi.uni.compserver.scheduler.tasks;

import novi.uni.compserver.model.Competition;
import novi.uni.compserver.model.Match;
import novi.uni.compserver.model.Team;
import novi.uni.compserver.repositories.CompetitionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

@Component
@EnableAsync
public class CompetitionPlanner {

    private static final Logger LOGGER = LoggerFactory.getLogger(CompetitionPlanner.class);

    @Autowired
    CompetitionRepository competitionRepository;

    /*@Async
    @Scheduled(fixedRate = 1000, initialDelay = 5000)
    public void planCompetitions() {
        LOGGER.info("planCompetitions has started");
        Date date = new Date();

        List<Competition> compsToPlan = competitionRepository.findAllWithStartTimeAfter(date);

        for (Competition comp : compsToPlan) {
            LOGGER.info("planning matches into competition");

            List<Match> matches = new ArrayList<>();
            List<Team> competitors = new ArrayList<>(comp.getCompetitors());

            for (Iterator<Team> itt = competitors.iterator(); itt.hasNext(); ) {
                Team team = itt.next();

                List<Team> validCompetitors = competitors.stream().filter(t -> !t.equals(team)).collect(Collectors.toList());

                for (Team competitor : validCompetitors) {

                    matches.add(new Match(team, competitor));
                    matches.add(new Match(competitor, team));

                }

                itt.remove();
            }

            matches.forEach(match -> System.out.println("Home: " + match.getHome().getId() + " - Away: " + match.getAway().getId()));
        }
    }*/
}
