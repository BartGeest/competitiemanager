package novi.uni.compserver.security;

import novi.uni.compserver.model.entities.NoviEmployee;
import novi.uni.compserver.repositories.NoviEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class NoviEmployeeDetailsService implements UserDetailsService {

    @Autowired
    NoviEmployeeRepository noviEmployeeRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        NoviEmployee noviEmployee = noviEmployeeRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Novimedewerker niet gevonden met gebruikersnaam: " + username));

        return NoviEmployeePrincipal.create(noviEmployee);
    }

    public UserDetails loadWithUserId(Long id) {
        NoviEmployee noviEmployee = noviEmployeeRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("Geen novi medewerker gevonden met id: " + id));

        return NoviEmployeePrincipal.create(noviEmployee);
    }
}
