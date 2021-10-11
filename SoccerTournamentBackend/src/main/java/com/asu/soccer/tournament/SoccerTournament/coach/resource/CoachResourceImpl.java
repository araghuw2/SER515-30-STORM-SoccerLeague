package com.asu.soccer.tournament.SoccerTournament.coach.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.asu.soccer.tournament.SoccerTournament.coach.service.CoachService;
import com.asu.soccer.tournament.SoccerTournament.common.entity.TeamEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.SuccessErrorModel;
import com.asu.soccer.tournament.SoccerTournament.player.service.PlayerService;

@RestController
public class CoachResourceImpl implements CoachResource {

//	@Autowired(required=true)
//	CoachService coachService;

	@Override
	@GetMapping("/create/team")
	public SuccessErrorModel createTeam(TeamEntity team) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
