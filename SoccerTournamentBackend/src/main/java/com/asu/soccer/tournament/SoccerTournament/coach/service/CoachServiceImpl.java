package com.asu.soccer.tournament.SoccerTournament.coach.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asu.soccer.tournament.SoccerTournament.common.entity.TeamEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.SuccessErrorModel;
import com.asu.soccer.tournament.SoccerTournament.common.repository.UserRepository;

@Service
public class CoachServiceImpl implements CoachService {
	
//	@Autowired(required=true)
//    UserRepository usersRepository;
	
	@Override
	public SuccessErrorModel createTeam(TeamEntity team) {
		// TODO Auto-generated method stub
		return null;
	}

	
}
