package com.asu.soccer.tournament.SoccerTournament.common.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;
import com.asu.soccer.tournament.SoccerTournament.common.repository.UserRepository;

@Service
public class SignInOrSignUpServiceImpl implements SignInOrSignUpService {

	@Autowired
    UserRepository usersRepository;

	
	@Override
	public UserEntity signIn(String username, String password) {
		return usersRepository.getUser(username, password);
	}


	@Override
	public List<String> getAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
}
