package novi.uni.compserver.initialization;

import novi.uni.compserver.payload.responses.ApiResponse;
import novi.uni.compserver.services.RegistrationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class StartUpAppListener {
    private static final Logger LOGGER = LoggerFactory.getLogger(StartUpAppListener.class);

    @Autowired
    RegistrationService registrationService;

    /**
     * Deze methode wordt bij elke opstart aangeroepen
     * Echter zullen bij meerdere aanroepen de gebruikers niet aangemaakt omdat ze al bestaan
     * Dit is omdat de database update aan staat in application.properties
     * Maar het is nodig om initieel een 'gebruiker' aan te maken met ieder een andere rol
     * Dit zorgt ervoor dat met beide rollen de functionaliteit van de app te gebruiken is
     */
    @EventListener
    public void initializeEmpAndAdmin(ContextRefreshedEvent event) {
        ApiResponse apiResponse = registrationService.isEmployeeCreated("novi123");
        LOGGER.info(apiResponse.getMessage());

        boolean isCreated = registrationService.isAdminCreated("admin123");
        LOGGER.info("Admin is created: " + isCreated);

    }
}
