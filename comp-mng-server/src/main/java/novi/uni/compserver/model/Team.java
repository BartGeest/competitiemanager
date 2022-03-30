package novi.uni.compserver.model;

import novi.uni.compserver.model.enums.SportName;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Team {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private SportName sportName;

    @NotBlank
    @Size(max = 36)
    private String name;

    @ManyToOne
    @JoinColumn(name = "owner")
    private NoviEmployee owner;

    private Long wonMatches;

    private Long tieMatches;

    private Long lostMatches;

    private Long cost;

    //TODO: miss iets van team strength voor het (deels) bepalen van wedstrijduitkomst??
    // Kan een arbitraire of baseline waarde zijn die veranderd op basis van wedstrijduitkomsten.

    public Team() {
    }

    public Team(String name, NoviEmployee owner, SportName sportName) {
        this.name = name;
        this.owner = owner;
        this.sportName = sportName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public NoviEmployee getOwner() {
        return owner;
    }

    public void setOwner(NoviEmployee owner) {
        this.owner = owner;
    }

    public Long getWonMatches() {
        return wonMatches;
    }

    public void setWonMatches(Long wonMatches) {
        this.wonMatches = wonMatches;
    }

    public Long getTieMatches() {
        return tieMatches;
    }

    public void setTieMatches(Long tieMatches) {
        this.tieMatches = tieMatches;
    }

    public Long getLostMatches() {
        return lostMatches;
    }

    public void setLostMatches(Long lostMatches) {
        this.lostMatches = lostMatches;
    }

    public Long getCost() {
        return cost;
    }

    public void setCost(Long cost) {
        this.cost = cost;
    }

    public SportName getSportName() {
        return sportName;
    }

    public void setSportName(SportName sportName) {
        this.sportName = sportName;
    }
}
