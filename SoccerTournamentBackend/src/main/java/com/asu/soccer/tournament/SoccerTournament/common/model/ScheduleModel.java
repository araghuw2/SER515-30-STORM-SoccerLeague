package com.asu.soccer.tournament.SoccerTournament.common.model;

import java.util.ArrayList;
import java.util.List;

public class ScheduleModel {
	
	private List<String> teamList = new ArrayList<>();
	
	int day;

	public List<String> getTeamList() {
		return teamList;
	}

	public void setTeamList(List<String> teamList) {
		this.teamList = teamList;
	}

	public int getDay() {
		return day;
	}

	public void setDay(int day) {
		this.day = day;
	}
	
}
