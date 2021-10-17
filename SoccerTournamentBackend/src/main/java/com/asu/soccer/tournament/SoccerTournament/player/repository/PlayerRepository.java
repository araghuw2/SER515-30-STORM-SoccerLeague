package com.asu.soccer.tournament.SoccerTournament.player.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.asu.soccer.tournament.SoccerTournament.common.entity.PlayerEntity;

@Repository
public interface PlayerRepository extends PagingAndSortingRepository<PlayerEntity,Long> {
	PlayerEntity findById(int id);
}
