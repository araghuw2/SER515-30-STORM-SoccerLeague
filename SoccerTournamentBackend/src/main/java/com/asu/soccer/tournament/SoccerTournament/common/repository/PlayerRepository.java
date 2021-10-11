package com.asu.soccer.tournament.SoccerTournament.common.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.asu.soccer.tournament.SoccerTournament.common.entity.PlayerEntity;

public interface PlayerRepository extends PagingAndSortingRepository<PlayerEntity,Long>{
	PlayerEntity findById(Integer id);
}

