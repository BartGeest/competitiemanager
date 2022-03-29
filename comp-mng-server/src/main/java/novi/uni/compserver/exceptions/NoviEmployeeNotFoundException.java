package novi.uni.compserver.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class NoviEmployeeNotFoundException extends RuntimeException {
    public NoviEmployeeNotFoundException(String errorMessage) {
        super(errorMessage);
    }
}
