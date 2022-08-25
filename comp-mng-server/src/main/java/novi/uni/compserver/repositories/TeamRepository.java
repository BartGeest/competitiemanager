package novi.uni.compserver.repositories;

import novi.uni.compserver.model.entities.NoviEmployee;
import novi.uni.compserver.model.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

    Optional<Team> findByOwnerAndName(NoviEmployee owner, String name);
}
