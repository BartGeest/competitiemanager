package novi.uni.compserver.repositories;

import novi.uni.compserver.model.entities.Competition;
import novi.uni.compserver.model.enums.SportName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface CompetitionRepository extends JpaRepository<Competition, Long> {

    List<Competition> findAllBySportname(SportName sportName);

    List<Competition> findAllBySportnameAndIsClosedForParticipationIsFalse(SportName sportName);

    @Override
    Optional<Competition> findById(Long id);

    @Query("select c from Competition c where c.startsAt >= :currentTime")
    List<Competition> findAllWithStartTimeAfter(@Param("currentTime") Date currentTime);
}
