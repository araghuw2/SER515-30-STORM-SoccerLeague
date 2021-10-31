package com.asu.soccer.tournament.SoccerTournament.common.service;

import java.util.List;

import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;

public interface SignInOrSignUpService {

	public UserEntity signUp(UserEntity user);
	
	public UserEntity signIn(String username, String password);
	
}
