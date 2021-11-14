package com.asu.soccer.tournament.SoccerTournament.common.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="game_details")
public class GameEntity {
	
	@Id
	private int id;
	
	@Column
    private String game_start_time;
	
	@Column
    private String game_end_time;
	
	@Column
    private String team_name_1;
	
	@Column
    private String team_name_2;
	
	@Column
	private String winning_team;
	
	@Column 
	private Integer goals_team1;
	
	@Column
	private Integer goals_team2;
	
	@Column
    private Integer field_site;
	
	@Column
	private Integer group;
	
	@Column
	private Integer red_cards_team1;
	
	@Column
	private Integer red_cards_team2;
	
	@Column
	private Integer yellow_cards_team1;
	
	@Column
	private Integer yellow_cards_team2;
	
	@Column
	private Integer injuries_team1;
	
	@Column
	private Integer injuries_team2;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getGame_start_time() {
		return game_start_time;
	}

	public void setGame_start_time(String game_start_time) {
		this.game_start_time = game_start_time;
	}

	public String getGame_end_time() {
		return game_end_time;
	}

	public void setGame_end_time(String game_end_time) {
		this.game_end_time = game_end_time;
	}

	public String getTeam_name_1() {
		return team_name_1;
	}

	public void setTeam_name_1(String team_name_1) {
		this.team_name_1 = team_name_1;
	}

	public String getTeam_name_2() {
		return team_name_2;
	}

	public void setTeam_name_2(String team_name_2) {
		this.team_name_2 = team_name_2;
	}

	public String getWinning_team() {
		return winning_team;
	}

	public void setWinning_team(String winning_team) {
		this.winning_team = winning_team;
	}

	public Integer getGoals_team1() {
		return goals_team1;
	}

	public void setGoals_team1(Integer goals_team1) {
		this.goals_team1 = goals_team1;
	}

	public Integer getGoals_team2() {
		return goals_team2;
	}

	public void setGoals_team2(Integer goals_team2) {
		this.goals_team2 = goals_team2;
	}

	public Integer getField_site() {
		return field_site;
	}

	public void setField_site(Integer field_site) {
		this.field_site = field_site;
	}

	public Integer getGroup() {
		return group;
	}

	public void setGroup(Integer group) {
		this.group = group;
	}

	public Integer getRed_cards_team1() {
		return red_cards_team1;
	}

	public void setRed_cards_team1(Integer red_cards_team1) {
		this.red_cards_team1 = red_cards_team1;
	}

	public Integer getRed_cards_team2() {
		return red_cards_team2;
	}

	public void setRed_cards_team2(Integer red_cards_team2) {
		this.red_cards_team2 = red_cards_team2;
	}

	public Integer getYellow_cards_team1() {
		return yellow_cards_team1;
	}

	public void setYellow_cards_team1(Integer yellow_cards_team1) {
		this.yellow_cards_team1 = yellow_cards_team1;
	}

	public Integer getYellow_cards_team2() {
		return yellow_cards_team2;
	}

	public void setYellow_cards_team2(Integer yellow_cards_team2) {
		this.yellow_cards_team2 = yellow_cards_team2;
	}

	public Integer getInjuries_team1() {
		return injuries_team1;
	}

	public void setInjuries_team1(Integer injuries_team1) {
		this.injuries_team1 = injuries_team1;
	}

	public Integer getInjuries_team2() {
		return injuries_team2;
	}

	public void setInjuries_team2(Integer injuries_team2) {
		this.injuries_team2 = injuries_team2;
	}


	
	
}
