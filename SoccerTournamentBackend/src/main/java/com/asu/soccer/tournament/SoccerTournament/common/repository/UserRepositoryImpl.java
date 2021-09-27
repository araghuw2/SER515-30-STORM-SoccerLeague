package com.asu.soccer.tournament.SoccerTournament.common.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public class UserRepositoryImpl implements UserRepository {

	@Override
	public List<String> getAll() {
		List<String> users = new ArrayList<>();
		users.add("User1");
		users.add("User2");
		return users;
	}
	
	
}
