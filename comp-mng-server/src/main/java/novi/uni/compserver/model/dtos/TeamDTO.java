package novi.uni.compserver.model.dtos;

public class TeamDTO {

    private Long id;

    private String name;

    private Boolean available;

    private Long wonMatches;

    private Long tieMatches;

    private Long lostMatches;

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

    public Boolean getAvailable() {
        return available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
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
}
