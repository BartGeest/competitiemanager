package novi.uni.compserver.repositories;

import novi.uni.compserver.model.entities.Forecast;
import novi.uni.compserver.model.entities.Match;
import novi.uni.compserver.model.entities.NoviEmployee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForecastRepository extends JpaRepository<Forecast, Long> {

    Page<Forecast> findAllByForecaster(NoviEmployee noviEmployee, Pageable pageable);

    Page<Forecast> findAllByMatch(Match match, Pageable pageable);
}
