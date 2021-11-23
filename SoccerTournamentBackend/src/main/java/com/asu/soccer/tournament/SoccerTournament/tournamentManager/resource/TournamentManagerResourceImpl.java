package com.asu.soccer.tournament.SoccerTournament.tournamentManager.resource;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.asu.soccer.tournament.SoccerTournament.common.entity.GameEntity;
import com.asu.soccer.tournament.SoccerTournament.common.entity.TeamEntity;
import com.asu.soccer.tournament.SoccerTournament.common.model.ScheduleModel;
import com.asu.soccer.tournament.SoccerTournament.common.model.ScheduleModelNew;
import com.asu.soccer.tournament.SoccerTournament.common.model.ScheduleModelReturn;
import com.asu.soccer.tournament.SoccerTournament.common.repository.GameRepository;
import com.asu.soccer.tournament.SoccerTournament.tournamenManager.service.TournamentManagerService;
import com.asu.soccer.tournament.SoccerTournament.common.repository.TeamRepository;

@RestController
public class TournamentManagerResourceImpl implements TournamentManagerResource {

	@Autowired
	GameRepository gameRepository;
	
	@Autowired
	TournamentManagerService tournamentManagerService;

	@Autowired
	TeamRepository teamRepository;
	
	@Override
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping(path = "/schedule",consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public ScheduleModelReturn schedule(@RequestBody ScheduleModelNew scheduleModelNew) throws Exception {
		ScheduleModel scheduleModel = new ScheduleModel();
		int day = Integer.valueOf(scheduleModelNew.getDay());
		scheduleModel.setDay(day);
		Iterable<TeamEntity> teamEntityIterator = teamRepository.findAll();
		List<String> teamNameList = new ArrayList<>();
		
		
		if(day == 1)
		{		
			for(TeamEntity teamEntity: teamEntityIterator)
				teamNameList.add(teamEntity.getTeam_name());
			
			scheduleModel.setTeamList(teamNameList);
		}
		else if(day == 2)
		{
			Iterable<GameEntity> gameEntityList = gameRepository.findAll();
			Map<Integer,List<String>> groupWinningTeamMap = new LinkedHashMap<>();
			
			for(GameEntity gameEntity: gameEntityList)
			{	
				if(gameEntity.getDay() != 2)
					continue;
				
				List<String> winningTeamList = groupWinningTeamMap.getOrDefault(gameEntity.getGroup_no(),new ArrayList<>());
				winningTeamList.add(gameEntity.getWinning_team());
				groupWinningTeamMap.put(gameEntity.getGroup_no(),new ArrayList<>(winningTeamList));
			}
			
			for(Map.Entry<Integer,List<String>> entry: groupWinningTeamMap.entrySet())
			{
				Map<String,Integer> teamWinMap = new LinkedHashMap<>();
				
				List<String> winningTeams = new ArrayList<>();
				for(String team: winningTeams)
				{
					int wins = teamWinMap.getOrDefault(team, 0);
					teamWinMap.put(team, wins + 1);
				}
				
				String groupWinningTeam = "";
				int maxWins = 0;
				for(Map.Entry<String, Integer> subEntry: teamWinMap.entrySet())
				{
					if(subEntry.getValue() > maxWins)
					{
						groupWinningTeam = subEntry.getKey();
						maxWins = subEntry.getValue();
					}
				}
				teamNameList.add(groupWinningTeam);
			}
		}
		else if(day == 3)
		{
			Iterable<GameEntity> gameEntityList = gameRepository.findAll();
			Map<Integer,List<String>> groupWinningTeamMap = new LinkedHashMap<>();
			
			for(GameEntity gameEntity: gameEntityList)
			{	
				if(gameEntity.getDay() != 3)
					continue;
				
				List<String> winningTeamList = groupWinningTeamMap.getOrDefault(gameEntity.getGroup_no(),new ArrayList<>());
				winningTeamList.add(gameEntity.getWinning_team());
				groupWinningTeamMap.put(gameEntity.getGroup_no(),new ArrayList<>(winningTeamList));
			}
			
			for(Map.Entry<Integer,List<String>> entry: groupWinningTeamMap.entrySet())
			{
				Map<String,Integer> teamWinMap = new LinkedHashMap<>();
				
				List<String> winningTeams = new ArrayList<>();
				for(String team: winningTeams)
				{
					int wins = teamWinMap.getOrDefault(team, 0);
					teamWinMap.put(team, wins + 1);
				}
				
				String groupWinningTeam = "";
				int maxWins = 0;
				for(Map.Entry<String, Integer> subEntry: teamWinMap.entrySet())
				{
					if(subEntry.getValue() > maxWins)
					{
						groupWinningTeam = subEntry.getKey();
						maxWins = subEntry.getValue();
					}
				}
				teamNameList.add(groupWinningTeam);
			}
		}
			
		return scheduleSolve(scheduleModel);
	}
	
	public ScheduleModelReturn scheduleSolve(ScheduleModel scheduleModel) throws Exception {
		
		ScheduleModelReturn scheduleModelReturn = new ScheduleModelReturn();
		List<GameEntity> scheduledMatches = new ArrayList<>();
		List<String> teamList = scheduleModel.getTeamList();
		
		if(teamList.size()%2 == 1)
		{
			throw new Exception("Odd number of teams. Tournament Scheduler needs an even number for correct scheduling");
		}
		//DAY 1
		if(scheduleModel.getDay() == 1)
		{
			//minimum 8 teams -> 4 groups so that we have at least 4 winners for the next round
			if(teamList.size() < 8)
				throw new Exception("Need at least 8 teams for scheduling round 1");
			
			double numberOfGroups = 0.0;
			double playersPerGroup = 1.0;
			
			while(numberOfGroups != 4.0 && numberOfGroups != 6.0 && numberOfGroups != 8.0)
			{
				numberOfGroups = teamList.size() / ++playersPerGroup;
			}
			
			Map<Integer,List<String>> groupTeamMap = new LinkedHashMap<>();
			int index = 0;
			for(int i=1;i<=numberOfGroups;i++)
			{
				List<String> groupTeamList = new ArrayList<>();
				int temp=-1;
				for(int j=index;j<index+playersPerGroup;j++)
				{
					groupTeamList.add(teamList.get(j));
					temp = j;
				}
				index = temp+1;
				groupTeamMap.put(i, groupTeamList);
			}
			
			for(Map.Entry<Integer,List<String>> entry: groupTeamMap.entrySet())
			{
				int groupNumber = entry.getKey();
				List<String> teams = entry.getValue();
				
				for(int i=0;i<teams.size()-1;i++)
				{
					GameEntity gameEntity = new GameEntity();
					
					Integer id = (int)(Math.random() * 100000);
					while(gameRepository.findById(id) != null)
					{
						id = (int)(Math.random() * 100000);
					}
					
					gameEntity.setId(id);
					gameEntity.setTeam_name_1(teams.get(i));
					gameEntity.setTeam_name_2(teams.get(i+1));
					gameEntity.setGroup_no(groupNumber);
					gameEntity.setDay(scheduleModel.getDay());
					
					scheduledMatches.add(gameEntity);
				}
				
				//Edge case for matching up the first and the last team in the list
				GameEntity gameEntity = new GameEntity();
				
				Integer id = (int)(Math.random() * 100000);
				while(gameRepository.findById(id) != null)
				{
					id = (int)(Math.random() * 100000);
				}
				
				gameEntity.setId(id);
				gameEntity.setTeam_name_1(teams.get(teams.size()-1));
				gameEntity.setTeam_name_2(teams.get(0));
				gameEntity.setGroup_no(groupNumber);
				gameEntity.setDay(scheduleModel.getDay());
				
//				gameRepository.save(gameEntity);
				scheduledMatches.add(gameEntity);
				
			}
			
			int totalGameTime = scheduledMatches.size() * 90; // 90 minutes per game
			int gameTimePerGround = totalGameTime;
			int groundsRequired = 1;
			
			while(gameTimePerGround > (24 * 60))
			{
				gameTimePerGround = gameTimePerGround / ++groundsRequired;
			}
			
			//int timeInt = -90;
			int startTime = -90;
			for(int i=0;i<scheduledMatches.size();i++)
			{
				
				startTime = startTime + 90;
				String startTimeString = convertMinutesto24Hour(startTime);
				String endTimeString = convertMinutesto24Hour(startTime + 90);
				
				for(int j=0;j<groundsRequired;j++)
				{
					i=i+j;
					GameEntity gameEntity = scheduledMatches.get(i);
					gameEntity.setGame_start_time(startTimeString);
					gameEntity.setGame_end_time(endTimeString);
					gameEntity.setField_site(j);
				}
	
			}
			
			scheduleModelReturn.setScheduledMatches(scheduledMatches);
			scheduleModelReturn.setTeamList(teamList);
			scheduleModelReturn.setGroudsRequired(groundsRequired);
			scheduleModelReturn.setNumberOfGroups((int)numberOfGroups);
			scheduleModelReturn.setPlayersPerGroup((int)playersPerGroup);	
			
		}
		
		//DAY 2
		else if(scheduleModel.getDay() == 2)
		{
			//minimum 4 teams to have at least 2 winners for the final round
			if(teamList.size() < 4)
				throw new Exception("Need at least 4 teams for scheduling round 2.");
			if(teamList.size() % 2 == 1)
				throw new Exception("Need a multiple of 2 to divide groups into two.");
			
			double numberOfGroups = 0.0;
			double playersPerGroup = 1.0;
			
			while(numberOfGroups != 2.0)
			{
				numberOfGroups = teamList.size() / ++playersPerGroup;
			}
			
			Map<Integer,List<String>> groupTeamMap = new LinkedHashMap<>();
			int index = 0;
			for(int i=1;i<=numberOfGroups;i++)
			{
				List<String> groupTeamList = new ArrayList<>();
				int temp=-1;
				for(int j=index;j<index+playersPerGroup;j++)
				{
					groupTeamList.add(teamList.get(j));
					temp = j;
				}
				index = temp+1;
				groupTeamMap.put(i, groupTeamList);
			}
			
			for(Map.Entry<Integer,List<String>> entry: groupTeamMap.entrySet())
			{
				int groupNumber = entry.getKey();
				List<String> teams = entry.getValue();
				
				for(int i=0;i<teams.size()-1;i++)
				{
					GameEntity gameEntity = new GameEntity();
					
					Integer id = (int)(Math.random() * 100000);
					while(gameRepository.findById(id) != null)
					{
						id = (int)(Math.random() * 100000);
					}
					
					gameEntity.setId(id);
					gameEntity.setTeam_name_1(teams.get(i));
					gameEntity.setTeam_name_2(teams.get(i+1));
					gameEntity.setGroup_no(groupNumber);
					gameEntity.setDay(scheduleModel.getDay());
					
					scheduledMatches.add(gameEntity);
				}
				
				//Edge case for matching up the first and the last team in the list
				GameEntity gameEntity = new GameEntity();
				
				Integer id = (int)(Math.random() * 10000);
				while(gameRepository.findById(id) != null)
				{
					id = (int)(Math.random() * 10000);
				}
				
				gameEntity.setId(id);
				gameEntity.setTeam_name_1(teams.get(teams.size()-1));
				gameEntity.setTeam_name_2(teams.get(0));
				gameEntity.setGroup_no(groupNumber);
				gameEntity.setDay(scheduleModel.getDay());
				
//				gameRepository.save(gameEntity);
				scheduledMatches.add(gameEntity);
				
			}
			
			int totalGameTime = scheduledMatches.size() * 90; // 90 minutes per game
			int gameTimePerGround = totalGameTime;
			int groundsRequired = 1;
			
			while(gameTimePerGround > (24 * 60))
			{
				gameTimePerGround = gameTimePerGround / ++groundsRequired;
			}
			
			int startTime = -90;
			for(int i=0;i<scheduledMatches.size();i++)
			{
				
				startTime = startTime + 90;
				String startTimeString = convertMinutesto24Hour(startTime);
				String endTimeString = convertMinutesto24Hour(startTime + 90);
				
				for(int j=0;j<groundsRequired;j++)
				{
					i=i+j;
					GameEntity gameEntity = scheduledMatches.get(i);
					gameEntity.setGame_start_time(startTimeString);
					gameEntity.setGame_end_time(endTimeString);
					gameEntity.setField_site(j);
				}
	
			}
			
			scheduleModelReturn.setScheduledMatches(scheduledMatches);
			scheduleModelReturn.setTeamList(teamList);
			scheduleModelReturn.setGroudsRequired(groundsRequired);
			scheduleModelReturn.setGroudsRequired(1);
			scheduleModelReturn.setNumberOfGroups((int)numberOfGroups);
			scheduleModelReturn.setPlayersPerGroup((int)playersPerGroup);	
			
		}
		
		//FINALS
		else
		{
			if(teamList.size() != 2)
				throw new Exception("Need exactly 2 teams for scheduling round 2");
			
			double numberOfGroups = 1.0;
			double playersPerGroup = 2.0;
			
			Map<Integer,List<String>> groupTeamMap = new LinkedHashMap<>();
			
			List<String> groupTeamList = new ArrayList<>();
			
			for(int j=0;j<playersPerGroup;j++)
			{
				groupTeamList.add(teamList.get(j));
			}
			
			groupTeamMap.put(1, groupTeamList); //since we only have group 1
			
			for(Map.Entry<Integer,List<String>> entry: groupTeamMap.entrySet())
			{
				int groupNumber = entry.getKey();
				List<String> teams = entry.getValue();
				
				for(int i=0;i<teams.size()-1;i++)
				{
					GameEntity gameEntity = new GameEntity();
					
					Integer id = (int)(Math.random() * 1000);
					while(gameRepository.findById(id) != null)
					{
						id = (int)(Math.random() * 1000);
					}
					
					gameEntity.setId(id);
					gameEntity.setTeam_name_1(teams.get(i));
					gameEntity.setTeam_name_2(teams.get(i+1));
					gameEntity.setGroup_no(groupNumber);
					gameEntity.setDay(scheduleModel.getDay());
					
					scheduledMatches.add(gameEntity);
				}
			}
			
			scheduleModelReturn.setScheduledMatches(scheduledMatches);
			scheduleModelReturn.setTeamList(teamList);
			scheduleModelReturn.setGroudsRequired(1);
			scheduleModelReturn.setNumberOfGroups((int)numberOfGroups);
			scheduleModelReturn.setPlayersPerGroup((int)playersPerGroup);	
		}
		
		for(GameEntity gameEntity: scheduleModelReturn.getScheduledMatches())
		{
			gameRepository.save(gameEntity);
		}
		
		return scheduleModelReturn;
	}
	
	private String convertMinutesto24Hour(int minutes)
	{
		int hours = minutes / 60;
		int minutesInDisplay = minutes % 60;
		if (hours > 23)
		    hours = hours % 24;
		String postfix = (hours < 12) ? "am" : "pm";
		NumberFormat formatter = new DecimalFormat("00");
		String display = formatter.format(hours) + ":"
		        + formatter.format(minutesInDisplay);
		return display + " " + postfix;
	}

	@Override
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping(path = "/addwinner",consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public void addWinner(@RequestBody GameEntity game) {
		tournamentManagerService.addWinner(game);
	}

	@Override
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(path = "/schedule", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ScheduleModelReturn> getFilteredSchedule(@RequestParam("day") String day) {
		ScheduleModelReturn scheduleModelReturn = tournamentManagerService.getFilteredSchdule(day);
		if (scheduleModelReturn != null) {
            return new ResponseEntity<ScheduleModelReturn>(scheduleModelReturn, HttpStatus.OK);
        }
        return new ResponseEntity<ScheduleModelReturn>(HttpStatus.NOT_FOUND);
	}
	

}
