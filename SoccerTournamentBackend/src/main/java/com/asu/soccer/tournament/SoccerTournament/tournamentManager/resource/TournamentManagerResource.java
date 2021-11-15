package com.asu.soccer.tournament.SoccerTournament.tournamentManager.resource;

import com.asu.soccer.tournament.SoccerTournament.common.entity.GameEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.ScheduleModel;
import com.asu.soccer.tournament.SoccerTournament.common.model.ScheduleModelReturn;

public interface TournamentManagerResource {
	public ScheduleModelReturn schedule(ScheduleModel scheduleModel) throws Exception;
	
	public void addWinner(GameEntity game);
}
