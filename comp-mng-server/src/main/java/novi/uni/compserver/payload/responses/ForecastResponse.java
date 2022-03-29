package novi.uni.compserver.payload.responses;

import novi.uni.compserver.model.enums.ForecastType;

public class ForecastResponse {
    private String sport;
    private String competition;
    private String teamHome;
    private String teamAway;
    private ForecastType forecastType;
    private Long forecastHomePoints;
    private Long forecastAwayPoints;


    public void setSport(String sport) {
        this.sport = sport;
    }

    public void setCompetition(String competition) {
        this.competition = competition;
    }

    public void setTeamHome(String teamHome) {
        this.teamHome = teamHome;
    }

    public void setTeamAway(String teamAway) {
        this.teamAway = teamAway;
    }

    public void setForecastType(ForecastType forecastType) {
        this.forecastType = forecastType;
    }

    public void setForecastHomePoints(Long forecastHomePoints) {
        this.forecastHomePoints = forecastHomePoints;
    }

    public void setForecastAwayPoints(Long forecastAwayPoints) {
        this.forecastAwayPoints = forecastAwayPoints;
    }
}
