package novi.uni.compserver.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Forecast {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
