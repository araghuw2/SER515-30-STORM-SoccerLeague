package com.asu.soccer.tournament.SoccerTournament.player.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asu.soccer.tournament.SoccerTournament.common.entity.PlayerEntity;
import com.asu.soccer.tournament.SoccerTournament.common.repository.UserRepository;
import com.asu.soccer.tournament.SoccerTournament.player.repository.PlayerRepository;

@Service
public class PlayerServiceImpl implements PlayerService {

	@Autowired
	PlayerRepository playerRepository;
	
	@Override
	public List<PlayerEntity> getAllPlayers() {
		// TODO Auto-generated method stub
		return null;
	}

}
