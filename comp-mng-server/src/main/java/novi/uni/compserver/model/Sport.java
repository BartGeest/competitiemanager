package novi.uni.compserver.model;

import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
public class Sport {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column
    private String sportname;

    public Sport() {
    }

    public Sport(String sportname) {
        this.sportname = sportname;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return sportname;
    }
}
