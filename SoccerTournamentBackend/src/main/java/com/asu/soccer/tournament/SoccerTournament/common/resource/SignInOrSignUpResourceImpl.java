package com.asu.soccer.tournament.SoccerTournament.common.resource;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;
import com.asu.soccer.tournament.SoccerTournament.common.service.SignInOrSignUpService;


@RestController
class SignInOrSignUpResourceImpl implements SignInOrSignUpResource {
	
	@Autowired(required=true)
	SignInOrSignUpService signInOrSignUpService;


	@Override
	@GetMapping("/signup")
	public List<String> signUp(UserEntity user) {
//		PlayerEntity playerEntity = playerRepository.findById(1);
//		System.out.println(playerEntity.getYellow_cards());
		return signInOrSignUpService.getAll();
	}
	
	@Override
	@PostMapping(path = "/signin",consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<UserEntity> signIn(@RequestBody HashMap<String, String> hm) {
		UserEntity user = signInOrSignUpService.signIn(hm.get("username"), hm.get("password"));
		if (user != null) {
            return new ResponseEntity<UserEntity>(user, HttpStatus.OK);
        }
        return new ResponseEntity<UserEntity>(HttpStatus.NOT_FOUND);
	}

}
