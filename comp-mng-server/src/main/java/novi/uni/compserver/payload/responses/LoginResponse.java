package novi.uni.compserver.payload.responses;

import java.util.List;

public class LoginResponse {

    private String accessToken;

    private List<String> roles;

    public LoginResponse(String accessToken, List<String> roles) {
        this.accessToken = accessToken;
        this.roles = roles;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public List<String> getRoles() {
        return roles;
    }
}
