package com.asu.soccer.tournament.SoccerTournament.common.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.asu.soccer.tournament.SoccerTournament.common.entity.GameEntity;

@Transactional
@Repository
@EnableJpaRepositories
public interface GameRepository extends PagingAndSortingRepository<GameEntity,Long>{
	GameEntity findById(int id);
}
