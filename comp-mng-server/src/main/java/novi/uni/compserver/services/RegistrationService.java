package novi.uni.compserver.services;

import novi.uni.compserver.exceptions.RoleNotFoundException;
import novi.uni.compserver.model.NoviEmployee;
import novi.uni.compserver.model.Role;
import novi.uni.compserver.model.enums.RoleName;
import novi.uni.compserver.payload.responses.ApiResponse;
import novi.uni.compserver.repositories.NoviEmployeeRepository;
import novi.uni.compserver.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class RegistrationService {

    @Autowired
    NoviEmployeeRepository noviEmployeeRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    private static final String tempPass = "change";

    public ApiResponse isEmployeeCreated(String username) {

        if (noviEmployeeRepository.existsByUsername(username)) {
            return new ApiResponse("Novimederker bestaat al", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        NoviEmployee newEmployee = new NoviEmployee(username, passwordEncoder.encode(tempPass));

        Role employeeRole = roleRepository.findByRolename(RoleName.ROLE_EMPLOYEE)
                .orElseThrow(() -> new RoleNotFoundException("Rolename EMPLOYEE kan niet gevonden worden"));

        newEmployee.setRoleSet(Collections.singleton(employeeRole));

        noviEmployeeRepository.save(newEmployee);

        return new ApiResponse("Nieuwe Novimedewerker is aangemaakt", HttpStatus.OK);
    }

    public boolean isAdminCreated(String username) {

        if (noviEmployeeRepository.existsByUsername(username)) {
            return false;
        }

        NoviEmployee newAdmin = new NoviEmployee(username, passwordEncoder.encode(tempPass));

        Role adminRole = roleRepository.findByRolename(RoleName.ROLE_ADMIN)
                .orElseThrow(() -> new RoleNotFoundException("Rolename ADMIN kan niet gevonden worden"));

        newAdmin.setRoleSet(Collections.singleton(adminRole));

        noviEmployeeRepository.save(newAdmin);

        return true;
    }
}
