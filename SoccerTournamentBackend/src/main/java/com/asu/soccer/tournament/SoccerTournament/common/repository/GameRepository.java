package com.asu.soccer.tournament.SoccerTournament.common.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.asu.soccer.tournament.SoccerTournament.common.entity.GameEntity;

public interface GameRepository extends PagingAndSortingRepository<GameEntity,Long>{
	GameEntity findById(String id);
}
