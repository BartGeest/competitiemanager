package novi.uni.compserver.security;

import org.springframework.security.core.annotation.AuthenticationPrincipal;

import java.lang.annotation.*;

/**
 * Wrapper annotatie voor het krijgen van de huidig ingelogde gebruiker.
 * Dit voorkomt dat we meerdere annotaties moeten gebruiken op methodes om hetzelfde te krijgen.
 */

@Target({ElementType.PARAMETER, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@AuthenticationPrincipal
public @interface CurrentNoviEmployee { }
