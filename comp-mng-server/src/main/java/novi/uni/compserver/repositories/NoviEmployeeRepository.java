package novi.uni.compserver.repositories;

import novi.uni.compserver.model.entities.NoviEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NoviEmployeeRepository extends JpaRepository<NoviEmployee, Long> {

    Optional<NoviEmployee> findByUsername(String username);
    /**
     * methode voor leaderboard
     */
    List<NoviEmployee> findTop100ByOrderByPointsAsc();

    Boolean existsByUsername(String username);
}
