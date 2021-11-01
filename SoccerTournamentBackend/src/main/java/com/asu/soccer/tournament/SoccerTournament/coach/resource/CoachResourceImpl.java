package com.asu.soccer.tournament.SoccerTournament.coach.resource;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.asu.soccer.tournament.SoccerTournament.coach.service.CoachService;
import com.asu.soccer.tournament.SoccerTournament.common.entity.PlayerEntity;
//import com.asu.soccer.tournament.SoccerTournament.coach.service.CoachService;
import com.asu.soccer.tournament.SoccerTournament.common.entity.TeamEntity;
import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.PlayerModel;
import com.asu.soccer.tournament.SoccerTournament.common.model.SuccessErrorModel;
import com.asu.soccer.tournament.SoccerTournament.common.model.TeamCreateModel;
import com.asu.soccer.tournament.SoccerTournament.player.service.PlayerService;

@RestController
public class CoachResourceImpl implements CoachResource {

	@Autowired
	PlayerService playerService;
	
	@Autowired
	CoachService coachService;

	@Override
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping(path = "create/team",consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public SuccessErrorModel createTeam(@RequestBody TeamCreateModel teamCreateModel) {
		
		List<PlayerEntity> playerEntities = new ArrayList<>();
		
		for(PlayerModel playerModel: teamCreateModel.getPlayerList())
		{
			PlayerEntity playerEntity = playerService.getPlayerEntity(playerModel);
			playerEntities.add(playerEntity);
		}
		
		TeamEntity teamEntity = coachService.createTeam(playerEntities, teamCreateModel.getCoach_id(), teamCreateModel.getTeam_name());
		
		SuccessErrorModel successErrorModel = new SuccessErrorModel();
		if(teamEntity == null)
		{
			successErrorModel.setMessage("Error in creating Team");
			successErrorModel.setSuccess(false);
		}
		else
		{
			successErrorModel.setMessage("Success in creating Team");
			successErrorModel.setSuccess(true);
		}
		
		return successErrorModel;
	}
	
	@Override
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(path = "view/team", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<TeamCreateModel> viewTeam(@Param("coachId") String coachId) {
		
		TeamCreateModel team = coachService.viewTeam(coachId);
		return new ResponseEntity<TeamCreateModel>(team, HttpStatus.OK);
	}
	
}
