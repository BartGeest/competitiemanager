package novi.uni.compserver.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/market")
public class MarketController {

    @GetMapping("/{sport}market") //TODO: gebasseerd op de sport in de url parameter de markt ophalen
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> getSportMarket() {
        return null; //TODO: methode verder uitwerken
    }
}
