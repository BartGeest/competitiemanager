package novi.uni.compserver.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class NoviEmployeeDetailsService implements UserDetailsService {

    //TODO: Autowire NoviEmployee Repository

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //TODO: NoviEmployee ophalen uit repo op basis van naam o.i.d.

        //TODO: NoviEmployeePrincipal teruggeven (via create method)
        return null;
    }

    @Transactional
    public UserDetails loadWithUserId(Long id) {
        //TODO: NoviEmployee ophalen uit repo op basis van id

        //TODO: NoviEmployeePrincipal teruggeven (via create method)
        return null;
    }
}
