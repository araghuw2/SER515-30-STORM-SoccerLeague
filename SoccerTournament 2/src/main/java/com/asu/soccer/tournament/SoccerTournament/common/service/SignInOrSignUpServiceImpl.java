package com.asu.soccer.tournament.SoccerTournament.common.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asu.soccer.tournament.SoccerTournament.common.repository.UserRepository;

@Service
public class SignInOrSignUpServiceImpl implements SignInOrSignUpService {

	@Autowired
    UserRepository usersRepository;

	
	@Override
	public List<String> getAll() {
		return new ArrayList<>();
	}
	
}
