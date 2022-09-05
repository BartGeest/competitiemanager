package novi.uni.compserver.payload.responses;

import novi.uni.compserver.model.dtos.ParticipationDTO;

public class ParticipationResponse {

    private ParticipationDTO participation;

    public ParticipationResponse(ParticipationDTO participation) {
        this.participation = participation;
    }

    public ParticipationDTO getParticipationDTO() {
        return participation;
    }
}
