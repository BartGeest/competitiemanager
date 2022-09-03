package novi.uni.compserver.payload.responses;

import novi.uni.compserver.model.dtos.ParticipationDTO;

public class ParticipationResponse {

    private ParticipationDTO participation;

    public ParticipationResponse(ParticipationDTO participationDTO) {
        this.participation = participationDTO;
    }

    public ParticipationDTO getParticipationDTO() {
        return participation;
    }
}
