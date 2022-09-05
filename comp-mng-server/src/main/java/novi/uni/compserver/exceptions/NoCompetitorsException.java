package novi.uni.compserver.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NoCompetitorsException extends RuntimeException {
    public NoCompetitorsException(String errorMessage) {
        super(errorMessage);
    }
}
