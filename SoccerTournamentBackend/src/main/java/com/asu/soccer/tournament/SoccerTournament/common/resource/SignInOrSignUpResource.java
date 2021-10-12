package com.asu.soccer.tournament.SoccerTournament.common.resource;

import java.util.List;

import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;

interface SignInOrSignUpResource {
	
	public List<String> signUp(UserEntity user);
	public UserEntity signIn(String username, String password);
	
}
