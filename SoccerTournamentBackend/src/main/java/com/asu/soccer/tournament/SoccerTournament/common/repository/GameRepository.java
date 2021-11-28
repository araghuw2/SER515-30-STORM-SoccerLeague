package com.asu.soccer.tournament.SoccerTournament.common.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.asu.soccer.tournament.SoccerTournament.common.entity.GameEntity;
import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;

@Transactional
@Repository
@EnableJpaRepositories
public interface GameRepository extends PagingAndSortingRepository<GameEntity,Long>{
	GameEntity findById(int id);
	
	@Modifying
	@Transactional
	@Query(value = "update game_details set winning_team = ?1, red_cards_team1 = ?2, red_cards_team2 = ?3, yellow_cards_team1 = ?4, yellow_cards_team2 = ?5, injuries_team1 = ?6, injuries_team2 = ?7, goals_team1 = ?8, goals_team2 = ?9  where id = ?10", nativeQuery = true)
	void updateGameDetails(String winner, int redCardsTeam1, int redCardsTeam2, int yellowCardsTeam1, int yellowCardsTeam2, int injuriesTeam1, int injuriesTeam2, int goalsTeam1, int goalsTeam2, int id); 
	
	@Query(value = "SELECT * FROM game_details u WHERE u.day = ?1", nativeQuery = true)
	List<GameEntity> findGameByDay(int day);
	
	@Query(value = "SELECT distinct day FROM game_details ", nativeQuery = true)
	List<Integer> findDays();
}
