package novi.uni.compserver.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
public class TeamCreationException extends RuntimeException {
    public TeamCreationException(String errorMessage) {
        super(errorMessage);
    }
}
