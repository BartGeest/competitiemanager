package novi.uni.compserver.controllers;

import novi.uni.compserver.payload.requests.LoginRequest;
import novi.uni.compserver.payload.responses.LoginResponse;
import novi.uni.compserver.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@Valid @RequestBody LoginRequest loginRequest) {
        LoginResponse response = authenticationService.giveResponse(loginRequest);
        return ResponseEntity.ok(response);
    }
}
