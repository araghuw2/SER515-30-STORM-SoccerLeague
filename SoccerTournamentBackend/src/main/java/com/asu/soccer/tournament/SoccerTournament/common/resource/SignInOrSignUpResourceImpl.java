package com.asu.soccer.tournament.SoccerTournament.common.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;
import com.asu.soccer.tournament.SoccerTournament.common.service.SignInOrSignUpService;


@RestController
class SignInOrSignUpResourceImpl implements SignInOrSignUpResource {
	
	@Autowired(required=true)
	SignInOrSignUpService signInOrSignUpService;

	@Override
	@PostMapping("/signup")
	public List<String> signUp(UserEntity user) {
		return signInOrSignUpService.getAll();
	}
	
	@Override
	@PostMapping("/signup")
	public UserEntity signIn(UserEntity user) {
		return null;
	}

}
