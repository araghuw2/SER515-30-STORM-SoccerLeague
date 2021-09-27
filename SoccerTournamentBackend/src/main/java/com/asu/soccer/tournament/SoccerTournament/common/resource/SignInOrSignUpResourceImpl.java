package com.asu.soccer.tournament.SoccerTournament.common.resource;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.soccer.tournament.SoccerTournament.common.service.SignInOrSignUpService;


@RestController
class SignInOrSignUpResourceImpl implements SignInOrSignUpResource {
	
	@Autowired(required=true)
	SignInOrSignUpService signInOrSignUpService;

	@Override
	@RequestMapping("/greeting")
	public List<String> getAll() {
		return signInOrSignUpService.getAll();
	}
}
