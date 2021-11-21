package com.asu.soccer.tournament.SoccerTournament.tournamentManager.resource;

import java.util.List;

import com.asu.soccer.tournament.SoccerTournament.common.entity.GameEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.ScheduleModel;
import com.asu.soccer.tournament.SoccerTournament.common.model.ScheduleModelNew;
import com.asu.soccer.tournament.SoccerTournament.common.model.ScheduleModelReturn;

public interface TournamentManagerResource {
	public ScheduleModelReturn scheduleSolve(ScheduleModel scheduleModel) throws Exception;
	public ScheduleModelReturn schedule(ScheduleModelNew scheduleModelNew) throws Exception;
}
