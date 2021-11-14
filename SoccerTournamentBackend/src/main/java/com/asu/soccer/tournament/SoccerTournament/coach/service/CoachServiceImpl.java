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
		
		List<PlayerEntity> players = playerRepository.findByTeamDetailsId(teamId);
		List<PlayerModel> playerModelList = new ArrayList<PlayerModel>();
		
		for(PlayerEntity player : players) {
			UserEntity userEntity = userRepository.findById(player.getId());
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

	@Override
	public Boolean hasTeam(String coachId) {
		TeamEntity teamEntity = teamRepository.findByCoachId(Integer.parseInt(coachId));
		return teamEntity != null;
	}

//	@Autowired(required=true)
//    UserRepository usersRepository;
	

	/*
	
	public List<Match> scheduleTournament(List<Integer> teamList)
	{
	
		//15 games allowed per 24 hours per ground. Consideration made for extra time per game.
		
		int groupCount;
		int requiredGrounds = 1;
		
		
		
		
		List<Match> matchList = new ArrayList<>();
		
		for(int index=0;index<teamList.size()-1;index++)
		{
			
			increment
			Match match = new Match(teamList.get(index), teamList.get(++index), Math.random());
			matchList.add(match);
		}
		
		return MatchList
	}
	
	class Match
	{
		Integer teamId1;
		Integer teamId2;
		Integer winner;
		String dateTime;
		int groundId;
		
		public Match(int teamId1, int teamId2, int randomNumber, String dateTime, int groundId)
		{
			this.teamId1 = teamId1;
			this.teamId2 = teamId2;
			
			winner = randomNumber < 0.5? teamId1: teamId2;
		}
		
	}
	
	*/
}
