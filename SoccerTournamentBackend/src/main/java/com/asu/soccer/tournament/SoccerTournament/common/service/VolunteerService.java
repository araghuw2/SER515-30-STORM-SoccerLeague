package com.asu.soccer.tournament.SoccerTournament.common.service;

import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.VolunteerModel;

public interface VolunteerService {

	public UserEntity addVolunteer(VolunteerModel user);
}
