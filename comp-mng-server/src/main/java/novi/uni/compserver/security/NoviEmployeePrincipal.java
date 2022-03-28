package novi.uni.compserver.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import novi.uni.compserver.model.NoviEmployee;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class NoviEmployeePrincipal implements UserDetails {
    private Long id;

    private String username;

    @JsonIgnore
    private String password;

    private Collection<? extends GrantedAuthority> authorities;

    public NoviEmployeePrincipal(Long id, String username, String password, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.authorities = authorities;
    }

    public static NoviEmployeePrincipal create(NoviEmployee noviEmployee) {

        List<GrantedAuthority> authorities = noviEmployee.getRoleSet().stream().map(role ->
                new SimpleGrantedAuthority(role.getRolename().name())).collect(Collectors.toList());

        return new NoviEmployeePrincipal(
                noviEmployee.getId(),
                noviEmployee.getUsername(),
                noviEmployee.getPassword(),
                authorities
        );
    }

    public Long getId() {
        return id;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        NoviEmployeePrincipal that = (NoviEmployeePrincipal) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
