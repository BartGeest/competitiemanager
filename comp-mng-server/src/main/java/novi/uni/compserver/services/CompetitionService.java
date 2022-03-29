package novi.uni.compserver.services;

import novi.uni.compserver.mappers.CompetitionMapper;
import novi.uni.compserver.model.Competition;
import novi.uni.compserver.model.enums.SportName;
import novi.uni.compserver.payload.responses.CompetitionResponse;
import novi.uni.compserver.payload.responses.PagedResponse;
import novi.uni.compserver.repositories.CompetitionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CompetitionService {

    @Autowired
    CompetitionRepository competitionRepository;

    public PagedResponse<CompetitionResponse> giveCompetitionsBySport(SportName sportName, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC);
        Page<Competition> competitionPages = competitionRepository.findAllBySportname(sportName, pageable);

        List<CompetitionResponse> competitionResponses = competitionPages.map(CompetitionMapper::mapCompToCompResponse).getContent();

        return new PagedResponse<>(
                competitionResponses,
                competitionPages.getNumber(),
                competitionPages.getSize(),
                competitionPages.getTotalElements(),
                competitionPages.getTotalPages(),
                competitionPages.isLast());
    }
}
