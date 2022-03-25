package novi.uni.compserver.model;

import javax.persistence.*;

@Entity
public class MatchResult {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "matchResult")
    private Match match;


}
