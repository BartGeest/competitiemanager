package novi.uni.compserver.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Match {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "home")
    private Team home;

    @OneToOne
    @JoinColumn(name = "away")
    private Team away;

    @OneToMany(
            mappedBy = "match",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            orphanRemoval = true)
    private List<Forecast> forecasts;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinTable(
            name = "finished_matches",
            joinColumns = {
                    @JoinColumn(name = "match_id", referencedColumnName = "id")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "result_id", referencedColumnName = "id")
            })
    private MatchResult matchResult;
}
