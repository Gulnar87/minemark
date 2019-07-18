import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Team } from '../network/network.model';
import { Advisors } from '../network/network.model';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

   teamChanged = new Subject<Team[]>();
   advisorsChanged = new Subject<Advisors[]>();
   
	private	team : Team[] = [
         {name: 'Lala van der Kolk', profession: 'Co-founder', pic: 'assets/Lala_van_der_Kolk.jpg',  bio: 'Lala is a co-founder of Mine Mark. She worked for the Ministry of Emergency Situations in Azerbaijan where she discovered her interest in Crisis Management. Therefore, she did her Master in Crisis- and Security Management at Leiden University. Now she is working as a Senior Consultant for Deloitte’s Crisis Management and Resilience team.', alt: 'Lala van der Kolk'}, 
         {name: 'Nils Hegel', profession: 'Co-founder', pic: 'assets/Nils_Hegel.jpg', bio: 'Nils is one of Mine Mark’s co-founders and he has a military background. He served in the German Military Police and, in that position, was deployed to several conflict areas like Afghanistan. There he saw first-hand how explosive remnants of war destroy individuals, families and whole communities. Nils is currently studying Security Studies at Leiden University.', alt: 'Nils Hegel' },
         {name: 'Ilaria Vallini', profession: 'Content Creator', pic: 'assets/Ilaria_Vallini.jpg', bio: 'Ilaria is a content creator at Mine Mark. She is passionate about communication and finds visual content a great tool to reach people and raise awareness. Her academic background is in Politics: BA International Relations from Sapienza University of Rome and MSc Middle East Politics from SOAS of London. Ilaria is now working for ASTP, a Knowledge Transfer association of Leiden', alt: 'Ilaria Vallini' },
         {name: 'Aleksandar Zrdavkovski', profession: 'Finance and Business', pic: 'assets/Aleksandar_Zrdavkovski.jpg', bio: 'Aleksandar is a Finance and Strategy Manager at Mine Mark. He holds an MSc in Financial Economics from Erasmus University Rotterdam and currently works as an FP&A Analyst at Danone. Aleksandar is an avid half-marathon runner and strives for a world in which no children are harmed by explosive remnants of war.', alt: 'Aleksandar Zrdavkovski' },
         {name: 'Bob van Grieken', profession: 'External Relations', pic: 'assets/Bob_Van_Grieken.jpg', bio: 'Bob is the latest addition to the Mine Mark team and he is primarily responsible for external relations. He holds a BSc in International Relations and graduated cum laude from Leiden University with a MSc degree in International Relations and Diplomacy. His passion for international relations, combined with his drive to contribute to society, makes him an excellent fit for the Mine Mark Foundation', alt: 'Bob van Grieken' }]

    private advisors: Advisors[] = [
         {name: 'Christine Ball', profession: 'Cartoonist', pic: 'assets/christine.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', linkToPage: 'http://ball-design.de/', alt:'Christine Ball' },
         {name: 'Gulnar Mammadova', profession: 'Front-end web developer', pic: 'assets/gulnar_mammadova.jpg',  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', linkToPage: 'http://gulnarmammadova.com', alt:'Gulnar Mammadova'}, 
         {name: 'Gulshan Guliyeva', profession: 'Web & graphic designer', pic: 'assets/gulshan_guliyeva.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', linkToPage: 'https://www.behance.net/gulshanguliyeva/', alt:'Gulshan Guliyeva' },
         {name: 'Ilia Baroutev', profession: 'Finance and Business', pic: 'https://via.placeholder.com/700x568', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', linkToPage: '', alt:'Ilia Baroutev' },
         {name: 'Cathy Delhanty', profession: 'Networking expert', pic: 'assets/Cathy.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', linkToPage: 'https://www.linkedin.com/in/cathydelhanty/', alt:'Cathy Delhanty' },
         {name: 'Diana Fehr', profession: 'Strategic Consultant', pic: 'https://via.placeholder.com/700x568', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', linkToPage: 'https://www.linkedin.com/in/diana-fehr-81282881/?originalSubdomain=nl', alt:'Diana Fehr'},
       
        ]

  getTeam(){
  	return this.team.slice();
  }

  getAdvisors(){
    return this.advisors.slice();

  }



  constructor() { }
}





 


  


