package com.asu.soccer.tournament.SoccerTournament.common.resource;

import java.util.List;

import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.SuccessErrorModel;
import com.asu.soccer.tournament.SoccerTournament.common.model.VolunteerModel;
import com.asu.soccer.tournament.SoccerTournament.common.service.VolunteerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@RestController
public class VolunteerResourceImpl implements VolunteerResource{
    @Autowired
    VolunteerService volunteerService;
	
	@Override
    @CrossOrigin(origins = "http://localhost:3000")
	@PostMapping(path="/addVolunteer")
    public SuccessErrorModel addVolunteer(@RequestBody VolunteerModel volunteerModel) {
        
        UserEntity userEntity = volunteerService.addVolunteer(volunteerModel);

        SuccessErrorModel successErrorModel = new SuccessErrorModel();
		if(userEntity == null)
		{
			successErrorModel.setMessage("Error in creating Volunteer");
			successErrorModel.setSuccess(false);
		}
		else
		{
			successErrorModel.setMessage("Success in creating Volunteer");
			successErrorModel.setSuccess(true);
		}
		
		return successErrorModel;
    }

	@Override
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(path = "getVolunteers")
	public ResponseEntity<List<VolunteerModel>> viewVolunteers() {
		
		List<VolunteerModel> volunteers = volunteerService.getVolunteersList();
		return new ResponseEntity<List<VolunteerModel>>(volunteers, HttpStatus.OK);
	}
    
}
