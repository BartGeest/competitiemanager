package novi.uni.compserver.payload.responses;

public class ApiResponse {

    private Boolean succes;
    private String message;

    public ApiResponse(Boolean succes, String message) {
        this.succes = succes;
        this.message = message;
    }
}
