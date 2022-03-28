package novi.uni.compserver.repositories;

import novi.uni.compserver.model.Competition;
import novi.uni.compserver.model.Sport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompetitionRepository extends JpaRepository<Competition, Long> {

    //TODO:
    List<Competition> findBySport(Sport sport);
}
