package novi.uni.compserver.model;

import novi.uni.compserver.model.enums.SportName;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
public class Sport {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column
    private SportName sportname;

    public Sport() {
    }

    public Sport(SportName sportname) {
        this.sportname = sportname;
    }

    public Long getId() {
        return id;
    }

    public SportName getName() {
        return sportname;
    }
}
