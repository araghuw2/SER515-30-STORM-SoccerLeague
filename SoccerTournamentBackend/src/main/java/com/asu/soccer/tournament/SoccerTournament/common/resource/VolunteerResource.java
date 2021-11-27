package com.asu.soccer.tournament.SoccerTournament.common.resource;

import org.springframework.http.ResponseEntity;

import java.util.List;

import com.asu.soccer.tournament.SoccerTournament.common.model.SuccessErrorModel;
import com.asu.soccer.tournament.SoccerTournament.common.model.VolunteerModel;

public interface VolunteerResource {
	
	public SuccessErrorModel addVolunteer(VolunteerModel volunteerModel); //todo Volunteer entity?
	
	public ResponseEntity<List<VolunteerModel>> viewVolunteers();
}