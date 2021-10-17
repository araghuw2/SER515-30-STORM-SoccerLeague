package com.asu.soccer.tournament.SoccerTournament.coach.service;

import com.asu.soccer.tournament.SoccerTournament.common.entity.TeamEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.SuccessErrorModel;

public interface CoachService {
	
	public SuccessErrorModel createTeam(TeamEntity team);
}
