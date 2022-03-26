package novi.uni.compserver.model;

import novi.uni.compserver.model.enums.ForecastType;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
public class Forecast {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "fk_match")
    private Match match;

    @ManyToOne
    @JoinColumn(name = "fk_forecaster")
    private NoviEmployee forecaster;

    private Boolean cameTrue;

    @Enumerated(EnumType.STRING)
    @NaturalId
    private ForecastType forecastType;

    public Forecast() {
    }

    public Forecast(Match match, NoviEmployee forecaster, ForecastType forecastType) {
        this.match = match;
        this.forecaster = forecaster;
        this.forecastType = forecastType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Match getMatch() {
        return match;
    }

    public void setMatch(Match match) {
        this.match = match;
    }

    public NoviEmployee getForecaster() {
        return forecaster;
    }

    public void setForecaster(NoviEmployee forecaster) {
        this.forecaster = forecaster;
    }

    public Boolean getCameTrue() {
        return cameTrue;
    }

    public void setCameTrue(Boolean cameTrue) {
        this.cameTrue = cameTrue;
    }

    public ForecastType getForecastType() {
        return forecastType;
    }

    public void setForecastType(ForecastType forecastType) {
        this.forecastType = forecastType;
    }
}
