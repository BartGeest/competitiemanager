package novi.uni.compserver.model;

import javax.persistence.*;

@Entity
public class MatchResult {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "matchResult")
    private Match match;

    private Long homePoints;

    private Long awayPoints;


    public MatchResult() {
    }

    public MatchResult(Match match, Long homePoints, Long awayPoints) {
        this.match = match;
        this.homePoints = homePoints;
        this.awayPoints = awayPoints;
    }

    public Long getId() {
        return id;
    }

    public Match getMatch() {
        return match;
    }

    public void setMatch(Match match) {
        this.match = match;
    }

    public Long getHomePoints() {
        return homePoints;
    }

    public void setHomePoints(Long homePoints) {
        this.homePoints = homePoints;
    }

    public Long getAwayPoints() {
        return awayPoints;
    }

    public void setAwayPoints(Long awayPoints) {
        this.awayPoints = awayPoints;
    }
}
