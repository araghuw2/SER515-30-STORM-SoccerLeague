package com.asu.soccer.tournament.SoccerTournament.common.repository;

import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;


public interface UserRepository extends PagingAndSortingRepository<UserEntity,Long>{
	
	UserEntity findByEmail(String email);
	UserEntity findById(String id);
}