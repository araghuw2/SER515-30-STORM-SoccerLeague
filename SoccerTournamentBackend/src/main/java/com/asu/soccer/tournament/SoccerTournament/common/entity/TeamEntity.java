package com.asu.soccer.tournament.SoccerTournament.common.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="team_details")
public class TeamEntity {
	
	@Id
	@GeneratedValue
	private long id;
	
	@Column(nullable=false)
    private String team_name;
	
	@Column(nullable=false)
    private String email;

	@Column(nullable=false)
    private String reg_date;

	@Column(nullable=false)
    private Integer games_lost;
	
	@Column(nullable=false)
    private Integer games_won;
	
	@Column(nullable=false)
    private Integer games_drawn;
	
	@Column(nullable=false)
    private Integer total_games;
	
	@Column(nullable=false)
    private Integer user_details_id; //Coach

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTeam_name() {
		return team_name;
	}

	public void setTeam_name(String team_name) {
		this.team_name = team_name;
	}

	public String getReg_date() {
		return reg_date;
	}

	public void setReg_date(String reg_date) {
		this.reg_date = reg_date;
	}

	public Integer getGames_lost() {
		return games_lost;
	}

	public void setGames_lost(Integer games_lost) {
		this.games_lost = games_lost;
	}

	public Integer getGames_won() {
		return games_won;
	}

	public void setGames_won(Integer games_won) {
		this.games_won = games_won;
	}

	public Integer getGames_drawn() {
		return games_drawn;
	}

	public void setGames_drawn(Integer games_drawn) {
		this.games_drawn = games_drawn;
	}

	public Integer getTotal_games() {
		return total_games;
	}

	public void setTotal_games(Integer total_games) {
		this.total_games = total_games;
	}

	public Integer getUser_details_id() {
		return user_details_id;
	}

	public void setUser_details_id(Integer user_details_id) {
		this.user_details_id = user_details_id;
	}
	
	
	
}
