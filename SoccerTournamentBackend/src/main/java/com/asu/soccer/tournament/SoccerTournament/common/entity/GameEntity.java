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
	@GeneratedValue
	private long id;
	
	@Column(nullable=false)
    private String game_start_date;
	
	@Column(nullable=false)
    private String game_end_date;
	
	@Column(nullable=false)
    private Integer team_details_id_1;
	
	@Column(nullable=false)
    private Integer team_details_id_2;
	
	@Column(nullable=false)
    private Integer red_cards;

	@Column(nullable=false)
    private Integer yellow_cards;
	
	@Column(nullable=false)
    private Integer injuries_count;
	
	@Column(nullable=false)
    private Integer field_site;
	
}
