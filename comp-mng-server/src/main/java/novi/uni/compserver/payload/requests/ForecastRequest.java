package novi.uni.compserver.payload.requests;

import novi.uni.compserver.model.enums.ForecastType;

public class ForecastRequest {

    //TODO: nog home en away points toevoegen

    private Long match_id;

    private ForecastType forecastType;

    public Long getMatch_id() {
        return match_id;
    }

    public ForecastType getForecastType() {
        return forecastType;
    }
}
