package novi.uni.compserver.model.dtos;

public class UserCompetitionDTO {
    private Long id;
    private String name;
    private String competitorAmount;

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

    public String getCompetitorAmount() {
        return this.competitorAmount;
    }

    public void setCompetitorAmount(String competitorAmount) {
        this.competitorAmount = competitorAmount;
    }
}
