package novi.uni.compserver.payload.responses;

public class ApiResponse<T> {

    private String message;

    private T t;

    public ApiResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public T getT() {
        return t;
    }
}
