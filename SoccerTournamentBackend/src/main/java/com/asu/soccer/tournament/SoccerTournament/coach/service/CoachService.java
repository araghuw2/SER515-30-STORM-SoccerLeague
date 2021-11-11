package com.asu.soccer.tournament.SoccerTournament.coach.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.asu.soccer.tournament.SoccerTournament.common.entity.PlayerEntity;
import com.asu.soccer.tournament.SoccerTournament.common.entity.TeamEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.TeamCreateModel;

public interface CoachService {
	
	public TeamEntity createTeam(List<PlayerEntity> playerEntities, int coachId, String teamName);
	
	public TeamCreateModel viewTeam(String coachId);
	
	public Boolean hasTeam(String coachId);
}
