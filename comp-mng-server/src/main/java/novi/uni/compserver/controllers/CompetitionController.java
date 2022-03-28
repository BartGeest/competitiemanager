package novi.uni.compserver.controllers;

import novi.uni.compserver.security.CurrentNoviEmployee;
import novi.uni.compserver.security.NoviEmployeePrincipal;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/competition")
public class CompetitionController {

    //TODO: CompetitionFacade of service aanroepen?

    @GetMapping("/get_names")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> getCompetitions(@CurrentNoviEmployee NoviEmployeePrincipal noviEmployeePrincipal) {

        //TODO: je wil eigenlijk alleen de namen van de competities terug krijgen op basis van sport!

        return null;
    }

    //TODO: Nog andere methodes? of alleen de namen van competitions terug krijgen?
}
