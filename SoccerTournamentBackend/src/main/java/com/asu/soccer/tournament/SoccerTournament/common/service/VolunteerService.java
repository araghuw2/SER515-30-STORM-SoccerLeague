package com.asu.soccer.tournament.SoccerTournament.common.service;

import java.util.List;

import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.VolunteerModel;

public interface VolunteerService {

	public UserEntity addVolunteer(VolunteerModel user);

    public List<VolunteerModel> getVolunteersList();
}
