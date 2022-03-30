package novi.uni.compserver.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Match {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne //unidirectional
    @JoinColumn(name = "home")
    private Team home;

    @OneToOne //unidirectional
    @JoinColumn(name = "away")
    private Team away;

    @OneToMany(mappedBy = "match") //bidirectional
    private List<Forecast> forecasts;

    @OneToOne
    @JoinTable(name = "played_match",
            joinColumns = @JoinColumn(name = "match_id"),
            inverseJoinColumns = @JoinColumn(name = "result_id"))
    private MatchResult matchResult;

    public Match() {
    }

    public Match(Team home, Team away) {
        this.home = home;
        this.away = away;
    }

    public Long getId() {
        return id;
    }

    public Team getHome() {
        return home;
    }

    public void setHome(Team home) {
        this.home = home;
    }

    public Team getAway() {
        return away;
    }

    public void setAway(Team away) {
        this.away = away;
    }

    public List<Forecast> getForecasts() {
        return forecasts;
    }

    public void setForecasts(List<Forecast> forecasts) {
        this.forecasts = forecasts;
    }

    public MatchResult getMatchResult() {
        return matchResult;
    }

    public void setMatchResult(MatchResult matchResult) {
        this.matchResult = matchResult;
    }
}
