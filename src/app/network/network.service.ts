import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Team } from "../network/network.model";
import { Advisors } from "../network/network.model";

@Injectable({
  providedIn: "root",
})
export class NetworkService {
  teamChanged = new Subject<Team[]>();
  advisorsChanged = new Subject<Advisors[]>();

  private team: Team[] = [
    {
      name: "Lala van der Kolk - Mustafazade",
      profession: "Co-founder and Managing Director",
      pic: "assets/Lala_van_der_Kolk.jpg",
      bio:
        "Lala is a co-founder of Mine Mark. She worked for the Ministry of Emergency Situations in Azerbaijan where she discovered her interest in Crisis Management. Therefore, she did her Master in Crisis- and Security Management at Leiden University. Now she is working as a Senior Consultant for Deloitte’s Crisis Management and Resilience team.",
      alt: "Lala van der Kolk",
    },
    {
      name: "Nils Hegel",
      profession: "Co-founder and Managing Director",
      pic: "assets/nils.jpg",
      bio:
        "Nils is one of Mine Mark’s co-founders and he has a military background. He served in the German Military Police and, in that position, was deployed to several conflict areas like Afghanistan. There he saw first-hand how explosive remnants of war destroy individuals, families and whole communities. After finishing his BSc in Security Studies at Leiden University, he is currently doing a MSc in Transition Management at Gießen University. ",
      alt: "Nils Hegel",
    },
    {
      name: "Ilaria Vallini",
      profession: "Senior Project Manager",
      pic: "assets/Ilaria_Vallini.jpg",
      bio:
        "Ilaria is a certified BVOP® Project Manager, with experience in managing both business programmes and humanitarian projects. She is passionate about bringing people together to create value. Her academic background is in Politics: BA International Relations from Sapienza University of Rome and MSc Middle East Politics from SOAS of London. Ilaria is currently based in Leiden.",
      alt: "Ilaria Vallini",
    },
    {
      name: "Aleksandar Zdravkovski",
      profession: "Finance and HR Manager",
      pic: "assets/Aleksandar_Zrdavkovski.jpg",
      bio:
        "Aleksandar is a Finance and HR Manager at Mine Mark. He holds an MSc in Financial Economics from Erasmus University Rotterdam and currently works as an FP&A Analyst at Danone. Aleksandar is an avid half-marathon runner and strives for a world in which no children are harmed by explosive remnants of war.",
      alt: "Aleksandar Zrdavkovski",
    },
  ];

  private advisors: Advisors[] = [
    {
      name: "Sam Janyszek",
      profession: "Grant writer, Donations and External Relations",
      pic: "assets/sam.jpg",
      bio: "",
      alt: "Sam Janyszek",
      linkToPage: "https://www.linkedin.com/in/samuel-janyszek-63483490/",
    },
    {
      name: "Sitwat Azhar Hashmi",
      profession: "Grant writer, Donations and Project Coordinator",
      pic: "assets/sitwat.jpg",
      bio: "",
      alt: "Sitwat Azhar Hashmi",
      linkToPage:
        "https://www.linkedin.com/in/sitwat-azhar-hashmi-m-sc-ab509a125",
    },
    {
      name: "Stephanie Tan",
      profession: "Social Media and External Relations Officer",
      pic: "assets/stephanie.jpg",
      bio:
        "Bob is the latest addition to the Mine Mark team and he is primarily responsible for external relations. He holds a BSc in International Relations and graduated cum laude from Leiden University with a MSc degree in International Relations and Diplomacy. His passion for international relations, combined with his drive to contribute to society, makes him an excellent fit for the Mine Mark Foundation",
      alt: "Stephanie Tan",
      linkToPage: "http://linkedin.com/in/stephanie-tan-82a0651",
    },
    {
      name: "Kateryna Denysova",
      profession: "Assistant Project Manager",
      pic: "assets/kateryna.jpg",
      bio:
        "Bob is the latest addition to the Mine Mark team and he is primarily responsible for external relations. He holds a BSc in International Relations and graduated cum laude from Leiden University with a MSc degree in International Relations and Diplomacy. His passion for international relations, combined with his drive to contribute to society, makes him an excellent fit for the Mine Mark Foundation",
      alt: "Kateryna Denysova",
      linkToPage: "https://www.linkedin.com/in/kateryna-denysova-76b8911b0/",
    },
    {
      name: "Ole Kvalvik",
      profession: "Game Developer",
      pic: "assets/ole.jpg",
      bio:
        "Bob is the latest addition to the Mine Mark team and he is primarily responsible for external relations. He holds a BSc in International Relations and graduated cum laude from Leiden University with a MSc degree in International Relations and Diplomacy. His passion for international relations, combined with his drive to contribute to society, makes him an excellent fit for the Mine Mark Foundation",
      alt: "Ole Kvalvik",
      linkToPage: "",
    },
    {
      name: "Gunay Mustafazade",
      profession: "Graphic Designer",
      pic: "assets/gunay.jpg",
      bio:
        "Bob is the latest addition to the Mine Mark team and he is primarily responsible for external relations. He holds a BSc in International Relations and graduated cum laude from Leiden University with a MSc degree in International Relations and Diplomacy. His passion for international relations, combined with his drive to contribute to society, makes him an excellent fit for the Mine Mark Foundation",
      alt: "Gunay Mustafazade",
      linkToPage: "https://www.linkedin.com/in/gunay-mustafazade-675a10161/",
    },
    {
      name: "Christine Ball",
      profession: "Cartoonist",
      pic: "assets/christine_ball.jpg",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      linkToPage: "http://ball-design.de/",
      alt: "Christine Ball",
    },
    {
      name: "Gulnar Mammadova",
      profession: "Front-end web developer",
      pic: "assets/gulnar_mammadova.jpg",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      linkToPage: "http://gulnarmammadova.com",
      alt: "Gulnar Mammadova",
    },
    {
      name: "Gulshan Guliyeva",
      profession: "Web & graphic designer",
      pic: "assets/gulshan_guliyeva.jpg",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      linkToPage: "https://www.behance.net/gulshanguliyeva/",
      alt: "Gulshan Guliyeva",
    },
    {
      name: "Ilia Baroutev",
      profession: "Advisor",
      pic: "assets/Ilia_Baroutev.jpg",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      linkToPage: "",
      alt: "Ilia Baroutev",
    },
    //{name: 'Cathy Delhanty', profession: 'Networking expert', pic: 'assets/Cathy_Delhanty.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', linkToPage: 'https://www.linkedin.com/in/cathydelhanty/', alt:'Cathy Delhanty' },
    {
      name: "Patrick Teulings",
      profession: "Web developer",
      pic: "assets/patrickteulings-new-512.jpg",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      linkToPage: "https://www.linkedin.com/in/patrickteulings/",
      alt: "Cathy Delhanty",
    },
    {
      name: "Remi Huigen",
      profession: "Digital Strategy",
      pic: "assets/remi_huigen.jpg",
      bio: "Lnt mollit anim id est laborum",
      linkToPage:
        "https://www.linkedin.com/in/remi-huigen-5621a6a5/?originalSubdomain=nl",
      alt: "Remi Huigen",
    },
  ];

  getTeam() {
    return this.team.slice();
  }

  getAdvisors() {
    return this.advisors.slice();
  }

  constructor() {}
}
