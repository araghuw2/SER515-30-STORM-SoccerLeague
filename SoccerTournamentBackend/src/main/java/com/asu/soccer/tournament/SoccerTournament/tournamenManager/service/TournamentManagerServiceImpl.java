package com.asu.soccer.tournament.SoccerTournament.tournamenManager.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asu.soccer.tournament.SoccerTournament.common.entity.GameEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.ScheduleModelReturn;
import com.asu.soccer.tournament.SoccerTournament.common.repository.GameRepository;

@Service
public class TournamentManagerServiceImpl implements TournamentManagerService {

	@Autowired
	GameRepository gameRepository;

	@Override
	public void addWinner(GameEntity game) {
		gameRepository.updateGameDetails(game.getWinning_team(), game.getRed_cards_team1(), game.getRed_cards_team2(),
				game.getYellow_cards_team1(), game.getYellow_cards_team1(), game.getInjuries_team1(),
				game.getInjuries_team2(), game.getGoals_team1(), game.getGoals_team2(), game.getId());
//		gameRepository.updateGameDetails(game.getWinning_team(), game.getId());
	}

	@Override
	public ScheduleModelReturn getFilteredSchdule(String day) {
		List<GameEntity> games = gameRepository.findGameByDay(Integer.parseInt(day));
		ScheduleModelReturn scheduleModelReturn = new ScheduleModelReturn();
		scheduleModelReturn.setScheduledMatches(games);
		return scheduleModelReturn;
	}

}
