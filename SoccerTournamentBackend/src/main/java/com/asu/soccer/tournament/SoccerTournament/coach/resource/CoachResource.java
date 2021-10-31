package com.asu.soccer.tournament.SoccerTournament.coach.resource;

import com.asu.soccer.tournament.SoccerTournament.common.entity.TeamEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.SuccessErrorModel;
import com.asu.soccer.tournament.SoccerTournament.common.model.TeamCreateModel;

public interface CoachResource {
	public SuccessErrorModel createTeam(TeamCreateModel team);
	
	public TeamCreateModel viewTeam(String coachId);
	
}
