package novi.uni.compserver.payload.requests;

import novi.uni.compserver.model.enums.SportName;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class TeamCreationRequest {

    private String name;

    private SportName sportname;

    public String getName() {
        return name;
    }

    public SportName getSportName() {
        return sportname;
    }
}
