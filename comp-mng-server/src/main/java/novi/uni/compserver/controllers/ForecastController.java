package novi.uni.compserver.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/forecasts")
public class ForecastController {

    @PostMapping("/create")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> createForecast() {
        return null; //TODO: methode verder uitwerken
    }

    @GetMapping("/getAllForecasts") //TODO: miss nog getMapping aanpassen gebasseerd op username in url ding
    @PreAuthorize("hasRole('EMPLOYEE')")

    public ResponseEntity<?> getAllForecasts() {
        return null;
        //TODO: methode verder uitwerken
        // wat nog moeilijk gaat zijn want je moet niet alleen de forecast ophalen maar ook op welke wedstrijd dat gaat zijn
        // welke competitie het is, van welke sport
    }
}
