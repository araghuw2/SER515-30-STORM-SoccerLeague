package com.asu.soccer.tournament.SoccerTournament.coach.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asu.soccer.tournament.SoccerTournament.common.entity.PlayerEntity;
import com.asu.soccer.tournament.SoccerTournament.common.entity.TeamEntity;
import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;
import com.asu.soccer.tournament.SoccerTournament.common.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asu.soccer.tournament.SoccerTournament.common.entity.TeamEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.PlayerModel;
import com.asu.soccer.tournament.SoccerTournament.common.model.SuccessErrorModel;
import com.asu.soccer.tournament.SoccerTournament.common.model.TeamCreateModel;
import com.asu.soccer.tournament.SoccerTournament.common.repository.UserRepository;
import com.asu.soccer.tournament.SoccerTournament.player.repository.PlayerRepository;

@Service
public class CoachServiceImpl implements CoachService {
	
	@Autowired
	TeamRepository teamRepository;
	
	@Autowired
	PlayerRepository playerRepository;
	
	@Autowired
	UserRepository userRepository;

	@Override
	public TeamEntity createTeam(int coachId, String teamName) {
		
		TeamEntity teamEntity = new TeamEntity();
		
		teamEntity.setGames_drawn(0);
		teamEntity.setGames_lost(0);
		teamEntity.setGames_won(0);
		teamEntity.setTotal_games(0);
//		teamEntity.setUser_details_id(coachId);
		
		Date date = new Date();
	    String strDateFormat = "hh:mm:ss a";
	    DateFormat dateFormat = new SimpleDateFormat(strDateFormat);
	    String formattedDate= dateFormat.format(date);    
		//teamEntity.setReg_date(formattedDate);
		
		
		
		Integer id = (int)(Math.random() * 100000);
		while(teamRepository.findById(id) != null)
		{
			id = (int)(Math.random() * 100000);
		}
		teamEntity.setId(id);
		teamEntity.setUser_details_id(coachId);
		teamEntity.setTeam_name(teamName);
		
		teamRepository.save(teamEntity);
		
		return teamEntity;
		
	}
	
	@Override
	public TeamCreateModel viewTeam(String coachId) {
		
		TeamEntity teamEntity = teamRepository.findByCoachId(Integer.parseInt(coachId));
		Long teamId = teamEntity.getId();
		
		List<PlayerEntity> players = playerRepository.findByTeamDetailsId(Integer.parseInt(teamId.toString()));
		List<PlayerModel> playerModelList = new ArrayList<PlayerModel>();
		
		for(PlayerEntity player : players) {
//			int id = (int)player.getId();
			UserEntity userEntity = userRepository.findByUserId(player.getUser_details_id());
			PlayerModel playerModel = new PlayerModel();
			playerModel.setAge(12);
			playerModel.setEmail(userEntity.getEmail());
			playerModel.setGender(userEntity.getGender());
			playerModel.setPlayerName(userEntity.getFirst_name().concat(userEntity.getLast_name()));
			
			playerModelList.add(playerModel);
		}
		
		TeamCreateModel teamCreateModel = new TeamCreateModel();
		
		teamCreateModel.setCoach_id(Integer.parseInt(coachId));
		teamCreateModel.setPlayerList(playerModelList);
		teamCreateModel.setTeam_name(teamEntity.getTeam_name());
		
		return teamCreateModel;
		
	}

//	@Autowired(required=true)
//    UserRepository usersRepository;
}
