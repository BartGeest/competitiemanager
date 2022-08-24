package novi.uni.compserver.model.entities;

import novi.uni.compserver.model.enums.RoleName;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Role {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column
    private RoleName rolename;


    public Role() {
    }

    public RoleName getRolename() {
        return rolename;
    }
}
