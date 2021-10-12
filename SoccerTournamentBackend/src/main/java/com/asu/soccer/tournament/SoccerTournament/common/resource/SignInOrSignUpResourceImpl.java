package com.asu.soccer.tournament.SoccerTournament.common.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.soccer.tournament.SoccerTournament.common.entity.PlayerEntity;
import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;
import com.asu.soccer.tournament.SoccerTournament.common.service.SignInOrSignUpService;
import com.asu.soccer.tournament.SoccerTournament.player.repository.PlayerRepository;


@RestController
class SignInOrSignUpResourceImpl implements SignInOrSignUpResource {
	
	@Autowired(required=true)
	SignInOrSignUpService signInOrSignUpService;


	@Override
	@GetMapping("/signup")
	public List<String> signUp(UserEntity user) {
//		PlayerEntity playerEntity = playerRepository.findById(1);
//		System.out.println(playerEntity.getYellow_cards());
		return signInOrSignUpService.getAll();
	}
	
	@Override
	@PostMapping("/signin")
	public UserEntity signIn(String username, String password) {
		return signInOrSignUpService.signIn(username, password);
	}

}
