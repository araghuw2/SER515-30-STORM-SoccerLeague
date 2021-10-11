package com.asu.soccer.tournament.SoccerTournament.common.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="player_details")
public class PlayerEntity {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	@Column(nullable=false)
    private String team_details_id;
	
	@Column(nullable=false)
    private String yellow_cards;

	@Column(nullable=false)
    private Integer red_cards;
	
	@Column(nullable=false)
    private Integer subs;
	
	@Column(nullable=false)
    private Integer games_played;
	
	@Column(nullable=false)
    private Integer user_details_id;

	public long getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTeam_details_id() {
		return team_details_id;
	}

	public void setTeam_details_id(String team_details_id) {
		this.team_details_id = team_details_id;
	}

	public String getYellow_cards() {
		return yellow_cards;
	}

	public void setYellow_cards(String yellow_cards) {
		this.yellow_cards = yellow_cards;
	}

	public Integer getRed_cards() {
		return red_cards;
	}

	public void setRed_cards(Integer red_cards) {
		this.red_cards = red_cards;
	}

	public Integer getSubs() {
		return subs;
	}

	public void setSubs(Integer subs) {
		this.subs = subs;
	}

	public Integer getGames_played() {
		return games_played;
	}

	public void setGames_played(Integer games_played) {
		this.games_played = games_played;
	}

	public Integer getUser_details_id() {
		return user_details_id;
	}

	public void setUser_details_id(Integer user_details_id) {
		this.user_details_id = user_details_id;
	}
	
	
	
}
