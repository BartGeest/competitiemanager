package novi.uni.compserver.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/leaderboard")
public class LeaderboardController {

    //TODO: methode aanroepen om de leaderboard info te krijgen
    // prob een facade want je wilt veel info hebben
    // de novi Employee, hoeveel punten die heeft
    // opgetelde van de gewonnen, gelijke en verloren matches gespeeld van zijn teams

    @GetMapping
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> getLeaderboard() {

        //TODO: PagedResponse teruggeven die van de LeaderboardFacade komt

        return null;
    }
}
