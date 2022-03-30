package novi.uni.compserver.controllers;

import novi.uni.compserver.constants.Constants;
import novi.uni.compserver.payload.requests.ForecastRequest;
import novi.uni.compserver.payload.responses.ApiResponse;
import novi.uni.compserver.payload.responses.ForecastResponse;
import novi.uni.compserver.payload.responses.PagedResponse;
import novi.uni.compserver.security.CurrentNoviEmployee;
import novi.uni.compserver.security.NoviEmployeePrincipal;
import novi.uni.compserver.services.ForecastService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/forecasts")
public class ForecastController {

    @Autowired
    ForecastService forecastService;

    @PostMapping("/create")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> createForecast(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @Valid @RequestBody ForecastRequest forecastRequest) {

        ApiResponse response = forecastService.isForecastCreated(noviEmployeePrincipal, forecastRequest);
        return new ResponseEntity<>(response.getMessage(), response.getStatus());
    }

    @GetMapping("/getEmployeeForecasts")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> getAllEmployeeForecasts(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal,
            @RequestParam(value = "page", defaultValue = Constants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(value = "size", defaultValue = Constants.DEFAULT_PAGE_SIZE) int size
            ) {

        PagedResponse<ForecastResponse> response = forecastService.getAllEmployeeForecasts(noviEmployeePrincipal.getId(), page, size);

        return ResponseEntity.ok(response);
    }
}
