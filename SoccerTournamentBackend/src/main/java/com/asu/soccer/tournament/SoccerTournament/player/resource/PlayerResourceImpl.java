package com.asu.soccer.tournament.SoccerTournament.player.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.soccer.tournament.SoccerTournament.common.entity.PlayerEntity;
import com.asu.soccer.tournament.SoccerTournament.player.service.PlayerService;

@RestController
public class PlayerResourceImpl implements PlayerResource {

//	@Autowired
//	PlayerService playerService;

	@Override
	@GetMapping("/players")
	public List<PlayerEntity> getAllPlayers() {
		// TODO Auto-generated method stub
		return null;
	}

}
