package com.asu.soccer.tournament.SoccerTournament.common.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.asu.soccer.tournament.SoccerTournament.common.entity.TeamEntity;

public interface TeamRepository extends PagingAndSortingRepository<TeamEntity,Long> {
	TeamEntity findById(int id);
	
	@Query(value = "SELECT * FROM team_details u WHERE u.user_details_id = ?1", nativeQuery = true)
	TeamEntity findByCoachId(int id);
}
