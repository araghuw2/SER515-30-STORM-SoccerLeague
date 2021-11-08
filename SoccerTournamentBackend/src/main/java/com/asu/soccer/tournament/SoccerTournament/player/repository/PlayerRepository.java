package com.asu.soccer.tournament.SoccerTournament.player.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.asu.soccer.tournament.SoccerTournament.common.entity.PlayerEntity;

@Repository
public interface PlayerRepository extends PagingAndSortingRepository<PlayerEntity,Long> {
	PlayerEntity findById(int id);
	
	@Query(value = "SELECT * FROM player_details u WHERE u.team_details_id = ?1", nativeQuery = true)
	List<PlayerEntity> findByTeamDetailsId(Integer teamId);
}
