package novi.uni.compserver.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CompMngExceptionAdvice {

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<?> handle(BadCredentialsException e) {
        return new ResponseEntity<>("Gebruikersnaam of wachtwoord is verkeerd.", HttpStatus.BAD_REQUEST);
    }
}
