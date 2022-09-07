package novi.uni.compserver.controllers;

import novi.uni.compserver.payload.requests.ForecastRequest;
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

        //TODO: service (facade?) aanroepen en response (DTO?) teruggeven

        return ResponseEntity.ok("joe");
    }

    @GetMapping("/getEmployeeForecasts")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> getAllEmployeeForecasts(
            @CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal) {

        //TODO: service aanroepen en response (of Dto) teruggeven

        return ResponseEntity.ok("Hallo");
    }
}
