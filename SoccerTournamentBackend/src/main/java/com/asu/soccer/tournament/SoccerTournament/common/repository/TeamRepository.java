package com.asu.soccer.tournament.SoccerTournament.common.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.asu.soccer.tournament.SoccerTournament.common.entity.TeamEntity;

public interface TeamRepository extends PagingAndSortingRepository<TeamEntity,Long> {
	TeamEntity findById(int id);
}
