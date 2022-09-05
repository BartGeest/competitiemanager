package novi.uni.compserver.repositories;

import novi.uni.compserver.model.entities.NoviEmployee;
import novi.uni.compserver.model.entities.Team;
import novi.uni.compserver.model.enums.SportName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

    List<Team> findByOwnerIdAndSportName(Long id, SportName sportName);

    List<Team> findByOwnerIdAndSportNameAndAndCanParticipateIsTrue(Long id, SportName sportName);

    Boolean existsByName(String name);

    Optional<Team> findByOwnerAndName(NoviEmployee owner, String name);
}
