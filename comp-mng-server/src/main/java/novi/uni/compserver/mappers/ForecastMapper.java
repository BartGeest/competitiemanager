package novi.uni.compserver.mappers;

import novi.uni.compserver.model.entities.Forecast;
import novi.uni.compserver.payload.responses.ForecastResponse;

public class ForecastMapper {

    public static ForecastResponse mapForecastToResponse(Forecast forecast) {
        ForecastResponse forecastResponse = new ForecastResponse();

        forecastResponse.setSport(forecast.getMatch().getCompetition().getSportname().toString());
        forecastResponse.setCompetition(forecast.getMatch().getCompetition().getName());
        forecastResponse.setTeamHome(forecast.getMatch().getHome().getName());
        forecastResponse.setTeamAway(forecast.getMatch().getAway().getName());
        forecastResponse.setForecastType(forecast.getForecastType());
        forecastResponse.setForecastHomePoints(forecast.getForecastHomePoints());
        forecastResponse.setForecastAwayPoints(forecast.getForecastAwayPoints());

        return forecastResponse;
    }
}
