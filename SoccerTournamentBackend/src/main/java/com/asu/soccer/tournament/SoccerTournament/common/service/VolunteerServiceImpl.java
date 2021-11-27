package com.asu.soccer.tournament.SoccerTournament.common.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
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
            
            
            userEntity.setFirst_name(volunteerModel.getFirstName());
            userEntity.setLast_name(volunteerModel.getLastName());
            
            
            userEntity.setGender(volunteerModel.getGender());
            
            /*
             * Needs to be randomized
             */
            userEntity.setPassword("NOPASSWORD");
            
            userEntity.setWithdraw_flag("No");
            userEntity.setRole("Volunteer");
            
            // Date date = new Date();
            // String strDateFormat = "hh:mm:ss a";
            // DateFormat dateFormat = new SimpleDateFormat(strDateFormat);
            // String formattedDate= dateFormat.format(date);    
            // //userEntity.setReg_date(formattedDate);
            
            
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

        @Override
        public List<VolunteerModel> getVolunteersList(){
            List<VolunteerModel> volunteerList = new ArrayList<VolunteerModel>();
            List<UserEntity> volunteerUsers = userRepository.getVolunteers();

            for(UserEntity vol_user : volunteerUsers)
            {
                VolunteerModel volunteerModel = new VolunteerModel();

                volunteerModel.setFirstName(vol_user.getFirst_name());
                volunteerModel.setLastName(vol_user.getLast_name());
                volunteerModel.setEmail(vol_user.getEmail());
                volunteerModel.setGender(vol_user.getGender());

                volunteerList.add(volunteerModel);
            }
            return volunteerList;
        }
    
}
