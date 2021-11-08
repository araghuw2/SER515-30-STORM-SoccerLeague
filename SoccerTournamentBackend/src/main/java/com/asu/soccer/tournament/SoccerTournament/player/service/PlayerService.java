package com.asu.soccer.tournament.SoccerTournament.player.service;

import java.util.List;

import com.asu.soccer.tournament.SoccerTournament.common.entity.PlayerEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.PlayerModel;

public interface PlayerService {
	
	public List<PlayerEntity> getAllPlayers();
	
	public PlayerEntity getPlayerEntity(PlayerModel playerModel, int teamId);
}
