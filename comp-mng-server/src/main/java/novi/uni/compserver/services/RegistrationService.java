package novi.uni.compserver.services;

import novi.uni.compserver.model.NoviEmployee;
import novi.uni.compserver.payload.responses.ApiResponse;
import novi.uni.compserver.repositories.NoviEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    @Autowired
    NoviEmployeeRepository noviEmployeeRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    private static final String tempPass = "change";

    public ApiResponse isEmployeeCreated(String username) {

        if (noviEmployeeRepository.existsByUsername(username)) {
            return new ApiResponse("Novimederker bestaat al", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        NoviEmployee newEmployee = new NoviEmployee(username, passwordEncoder.encode(tempPass));
        noviEmployeeRepository.save(newEmployee);

        return new ApiResponse("Nieuwe Novimedewerker is aangemaakt", HttpStatus.OK);
    }
}
