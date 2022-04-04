package novi.uni.compserver.repositories;

import novi.uni.compserver.model.Role;
import novi.uni.compserver.model.enums.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByRolename(RoleName rolename);
}
