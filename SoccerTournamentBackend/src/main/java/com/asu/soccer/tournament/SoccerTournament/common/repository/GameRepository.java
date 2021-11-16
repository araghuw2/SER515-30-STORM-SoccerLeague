package com.asu.soccer.tournament.SoccerTournament.common.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.transaction.annotation.Transactional;

import com.asu.soccer.tournament.SoccerTournament.common.entity.GameEntity;
import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;

public interface GameRepository extends PagingAndSortingRepository<GameEntity,Long>{
	GameEntity findById(int id);
	
//	@Modifying
//	@Transactional
//	@Query(value = "update game_details set winning_team = ?1 and red_cards_team1 = ?2 and red_cards_team2 = ?3 and yellow_cards_team1 = ?4 and yellow_cards_team2 = ?5 and injuries_team1 = ?6 and injuries_team2 = ?7 where id = ?8", nativeQuery = true)
//	void updateGameDetails(String winner, int redCardsTeam1, int redCardsTeam2, int yellowCardsTeam1, int yellowCardsTeam2, int injuriesTeam1, int injuriesTeam2, int id); 
	
	@Modifying
	@Transactional
	@Query(value = "update game_details set winning_team = ?1 where id = ?2", nativeQuery = true)
	void updateGameDetails(String winner, int id); 
	
	@Query(value = "SELECT * FROM game_details u WHERE u.day = ?1", nativeQuery = true)
	List<GameEntity> findGameByDay(int day);
}
