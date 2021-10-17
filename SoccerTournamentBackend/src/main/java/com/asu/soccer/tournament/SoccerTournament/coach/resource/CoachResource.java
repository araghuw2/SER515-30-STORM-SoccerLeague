package com.asu.soccer.tournament.SoccerTournament.coach.resource;

import com.asu.soccer.tournament.SoccerTournament.common.entity.TeamEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.SuccessErrorModel;

public interface CoachResource {
	public SuccessErrorModel createTeam(TeamEntity team);
}
