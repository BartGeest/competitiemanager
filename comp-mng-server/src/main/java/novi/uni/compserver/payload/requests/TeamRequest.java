package novi.uni.compserver.payload.requests;

import novi.uni.compserver.model.enums.SportName;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class TeamRequest {

    private SportName sportName;

    @NotBlank
    @Size(max = 20)
    private String name;


    public SportName getSportName() {
        return sportName;
    }

    public String getName() {
        return name;
    }
}
