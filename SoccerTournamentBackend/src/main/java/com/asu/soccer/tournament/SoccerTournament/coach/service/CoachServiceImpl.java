package com.asu.soccer.tournament.SoccerTournament.coach.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asu.soccer.tournament.SoccerTournament.common.entity.PlayerEntity;
import com.asu.soccer.tournament.SoccerTournament.common.entity.TeamEntity;
import com.asu.soccer.tournament.SoccerTournament.common.repository.TeamRepository;

@Service
public class CoachServiceImpl implements CoachService {
	
	@Autowired
	TeamRepository teamRepository;

	@Override
	public TeamEntity createTeam(List<PlayerEntity> playerEntities, int coachId, String teamName) {
		
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

}
