package com.asu.soccer.tournament.SoccerTournament.player.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asu.soccer.tournament.SoccerTournament.common.entity.PlayerEntity;
import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.PlayerModel;
import com.asu.soccer.tournament.SoccerTournament.common.repository.UserRepository;
import com.asu.soccer.tournament.SoccerTournament.player.repository.PlayerRepository;


@Service
public class PlayerServiceImpl implements PlayerService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PlayerRepository playerRepository;
	
	@Override
	public List<PlayerEntity> getAllPlayers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public PlayerEntity getPlayerEntity(PlayerModel playerModel) {
		
		UserEntity userEntity = new UserEntity();

		userEntity.setEmail(playerModel.getEmail());
		
		String[] firstLastName = playerModel.getPlayerName().split(" ");
		userEntity.setFirst_name(firstLastName[0]);
		userEntity.setLast_name(firstLastName[1]);
		
		userEntity.setGender(playerModel.getGender());
		
		/*
		 * Needs to be randomized
		 */
		userEntity.setPassword("NOPASSWORD");
		
		userEntity.setWithdraw_flag("No");
		userEntity.setRole("Player");
		
		Date date = new Date();
	    String strDateFormat = "hh:mm:ss a";
	    DateFormat dateFormat = new SimpleDateFormat(strDateFormat);
	    String formattedDate= dateFormat.format(date);    
		//userEntity.setReg_date(formattedDate);
		
		
		long id = (long)(Math.random() * 100000);
		while(userRepository.findById(id) != null)
		{
			id = (long)(Math.random() * 100000);
		}
		userEntity.setId((int)id);
		
		UserEntity createdUser = userRepository.save(userEntity);
		
		if(createdUser == null)
		{
			System.out.print("ERROR: User not Created");
			//throw new Exception();
		}
		
		PlayerEntity playerEntity = new PlayerEntity();
		playerEntity.setId((int)id); // same as the ID for userEntity
		playerEntity.setGames_played(0);
		playerEntity.setRed_cards(0);
		playerEntity.setSubs(0);
		playerEntity.setTeam_details_id(null);
		playerEntity.setUser_details_id((int)id);
	
		PlayerEntity createdPlayer = playerRepository.save(playerEntity);
		
		if(createdPlayer == null)
		{
			System.out.print("ERROR: Player not Created");
			//throw new Exception();
		}
		return playerEntity;
	}
	

}
