package novi.uni.compserver.controllers;

import novi.uni.compserver.payload.requests.RegisterRequest;
import novi.uni.compserver.payload.responses.ApiResponse;
import novi.uni.compserver.services.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/signup")
public class RegistrationController {

    @Autowired
    RegistrationService registrationService;

    @PostMapping("/new")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> createNoviEmployee(@Valid @RequestBody RegisterRequest registerRequest) {

        ApiResponse response = registrationService.isEmployeeCreated(registerRequest.getUsername());

        return new ResponseEntity<>(response.getMessage(), response.getStatus());
    }
}
