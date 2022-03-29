package novi.uni.compserver.services;

import novi.uni.compserver.exceptions.MatchNotFoundException;
import novi.uni.compserver.exceptions.NoviEmployeeNotFoundException;
import novi.uni.compserver.mappers.ForecastMapper;
import novi.uni.compserver.model.Forecast;
import novi.uni.compserver.model.Match;
import novi.uni.compserver.model.NoviEmployee;
import novi.uni.compserver.payload.requests.ForecastRequest;
import novi.uni.compserver.payload.responses.ApiResponse;
import novi.uni.compserver.payload.responses.ForecastResponse;
import novi.uni.compserver.payload.responses.PagedResponse;
import novi.uni.compserver.repositories.ForecastRepository;
import novi.uni.compserver.repositories.MatchRepository;
import novi.uni.compserver.repositories.NoviEmployeeRepository;
import novi.uni.compserver.security.NoviEmployeePrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ForecastService {

    @Autowired
    MatchRepository matchRepository;

    @Autowired
    NoviEmployeeRepository noviEmployeeRepository;

    @Autowired
    ForecastRepository forecastRepository;

    public ApiResponse isForecastCreated(NoviEmployeePrincipal noviEmployeePrincipal, ForecastRequest forecastRequest) {

        Match match = matchRepository.findById(forecastRequest.getMatch_id())
                .orElseThrow(() -> new MatchNotFoundException("Kan geen wedstrijd vinden met id: " + forecastRequest.getMatch_id()));

        NoviEmployee currentNoviEmployee = noviEmployeeRepository.findById(noviEmployeePrincipal.getId())
                .orElseThrow(() -> new NoviEmployeeNotFoundException("Kan geen Novimedewerker vinden met id: " + noviEmployeePrincipal.getId()));

        Forecast forecast = new Forecast(match, currentNoviEmployee, forecastRequest.getForecastType());
        forecastRepository.save(forecast);

        return new ApiResponse(true, "Voorspelling is aangemaakt");
    }

    public PagedResponse<ForecastResponse> getAllEmployeeForecasts(Long id, int page, int size) {

        NoviEmployee currentNoviEmployee = noviEmployeeRepository.findById(id)
                .orElseThrow(() -> new NoviEmployeeNotFoundException("Kan geen medewerker vinden met id: " + id));

        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC);
        Page<Forecast> forecastPages = forecastRepository.findAllByForecaster(currentNoviEmployee, pageable);

        List<ForecastResponse> forecastsResponses = forecastPages.map(ForecastMapper::mapForecastToResponse).getContent();

        return new PagedResponse<>(
                forecastsResponses,
                forecastPages.getNumber(),
                forecastPages.getSize(),
                forecastPages.getTotalElements(),
                forecastPages.getTotalPages(),
                forecastPages.isLast());
    }
}
