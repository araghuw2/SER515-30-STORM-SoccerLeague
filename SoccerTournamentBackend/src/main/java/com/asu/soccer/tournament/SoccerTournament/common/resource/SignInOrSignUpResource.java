package com.asu.soccer.tournament.SoccerTournament.common.resource;

import java.util.HashMap;
import java.util.List;

import org.springframework.http.ResponseEntity;

import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;

interface SignInOrSignUpResource {
	
	public List<String> signUp(UserEntity user);
	public ResponseEntity<UserEntity> signIn(HashMap<String, String> hm);
	
}
