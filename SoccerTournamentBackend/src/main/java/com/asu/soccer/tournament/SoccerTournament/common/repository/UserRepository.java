package com.asu.soccer.tournament.SoccerTournament.common.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;


public interface UserRepository extends PagingAndSortingRepository<UserEntity,Long>{
	UserEntity findById(String id);
}
