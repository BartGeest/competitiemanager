package novi.uni.compserver.model;

import novi.uni.compserver.model.enums.SportName;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

@Entity
public class Competition {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    private Date startsAt;

    @Enumerated(EnumType.STRING)
    private SportName sportname;

    @OneToMany
    @JoinColumn(name = "fk_competition")
    private List<Team> competitors;

    @OneToMany(mappedBy = "competition")
    private List<Match> matches;

    private final int maxAllowedTeams = 100;

    public Competition() {
    }

    public Competition(String name, Date startsAt, SportName sportname) {
        this.name = name;
        this.startsAt = startsAt;
        this.sportname = sportname;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getStartsAt() {
        return startsAt;
    }

    public void setStartsAt(Date startsAt) {
        this.startsAt = startsAt;
    }

    public SportName getSportname() {
        return sportname;
    }

    public void setSportname(SportName sportname) {
        this.sportname = sportname;
    }

    public List<Team> getCompetitors() {
        return competitors;
    }

    public void setCompetitors(List<Team> competitors) {
        this.competitors = competitors;
    }

    public List<Match> getMatches() {
        return matches;
    }

    public void setMatches(List<Match> matches) {
        this.matches = matches;
    }

    public int getMaxAllowedTeams() {
        return maxAllowedTeams;
    }
}
