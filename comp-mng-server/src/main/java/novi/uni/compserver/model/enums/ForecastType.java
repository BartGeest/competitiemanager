package novi.uni.compserver.model.enums;

public enum ForecastType {
    /**
     * Type forecast, nodig voor het bepalen van de regels die worden toegepast of er een voorspelling correct zal zijn
     */
    FULLTIME,
    CORRECT_SCORE,
    BOTH_TEAMS_TO_SCORE,
    UNDER_OVER
}
