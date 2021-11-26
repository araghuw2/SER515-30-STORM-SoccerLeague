package com.asu.soccer.tournament.SoccerTournament.tournamenManager.service;

import com.asu.soccer.tournament.SoccerTournament.common.entity.GameEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.ScheduleModelReturn;

public interface TournamentManagerService {
	
	public void addWinner(GameEntity game);
	
	public ScheduleModelReturn getFilteredSchdule(String day);
	
	public int getTournamentDay();
}
