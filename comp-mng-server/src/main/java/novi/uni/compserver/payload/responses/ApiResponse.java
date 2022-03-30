package novi.uni.compserver.payload.responses;

import org.springframework.http.HttpStatus;

public class ApiResponse {

    private String message;
    private HttpStatus status;

    public ApiResponse(String message, HttpStatus status) {
        this.message = message;
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public HttpStatus getStatus() {
        return status;
    }
}
