package novi.uni.compserver.repositories;

import novi.uni.compserver.model.Competition;
import novi.uni.compserver.model.enums.SportName;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompetitionRepository extends JpaRepository<Competition, Long> {

    Page<Competition> findAllBySportname(SportName sportName, Pageable pageable);
}
