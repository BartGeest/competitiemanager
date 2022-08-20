package novi.uni.compserver.repositories;

import novi.uni.compserver.model.Competition;
import novi.uni.compserver.model.enums.SportName;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface CompetitionRepository extends JpaRepository<Competition, Long> {

    Page<Competition> findAllBySportname(SportName sportName, Pageable pageable);

    @Query("select c from Competition c where c.startsAt >= :currentTime")
    List<Competition> findAllWithStartTimeAfter(@Param("currentTime") Date currentTime);
}
