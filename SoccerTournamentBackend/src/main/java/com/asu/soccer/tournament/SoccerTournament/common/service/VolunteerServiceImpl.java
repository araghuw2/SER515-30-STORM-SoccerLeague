package com.asu.soccer.tournament.SoccerTournament.common.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.VolunteerModel;
import com.asu.soccer.tournament.SoccerTournament.common.repository.UserRepository;

@Service
public class VolunteerServiceImpl implements VolunteerService{
    @Autowired
    UserRepository userRepository;


        @Override
        public UserEntity addVolunteer(VolunteerModel volunteerModel) {
            UserEntity userEntity = new UserEntity();

            userEntity.setEmail(volunteerModel.getEmail());
            
            String[] combinedName = volunteerModel.getVolunteerName().split(" ");
            userEntity.setFirst_name(combinedName[0]);
            if(combinedName.length>1) userEntity.setLast_name(combinedName[1]);
            
            userEntity.setGender(volunteerModel.getGender());
            
            /*
             * Needs to be randomized
             */
            userEntity.setPassword("NOPASSWORD");
            
            userEntity.setWithdraw_flag("Yes");
            userEntity.setRole("Volunteer");
            
            Date date = new Date();
            String strDateFormat = "hh:mm:ss a";
            DateFormat dateFormat = new SimpleDateFormat(strDateFormat);
            String formattedDate= dateFormat.format(date);    
            //userEntity.setReg_date(formattedDate);
            
            
            Integer id = (int)(Math.random() * 100000);
            while(userRepository.findById(id) != null)
            {
                id = (int)(Math.random() * 100000);
            }
            userEntity.setId(id);
            
            UserEntity createdUser = userRepository.save(userEntity);
            
            if(createdUser == null)
            {
                System.out.print("ERROR: User not Created");
                //throw new Exception();
            }
            
            return createdUser;
        }

    
}
