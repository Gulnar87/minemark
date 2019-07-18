import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Work } from '../work/work.model';


@Injectable({
  providedIn: 'root'
})
export class WorkService {

    worksChanged = new Subject<Work[]>();
   
	private	works : Work[] = [
  // {title: 'Project name 1: Replace with project name and picture', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',  pictures: {pic1: 'assets/methods.jpg', pic2: 'assets/mission1.jpg', pic3: 'assets/game.png', pic4: 'assets/methods.jpg' }  },
  // {title: 'Project name 2: Replace with project name and picture', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', pictures: {pic1: 'assets/DSC03336.jpg', pic2: 'assets/mission1.jpg', pic3: 'assets/methods.png', pic4: 'assets/methods.jpg' }},
  // {title: 'Project name 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', pictures: {pic1: 'assets/DSC03380.jpg', pic2: 'assets/mission1.jpg', pic3: 'assets/mission1.png', pic4: 'assets/methods.jpg' }},
  //   {title: 'Project name 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', pictures: {pic1: 'assets/methods.jpg', pic2: 'assets/mission1.jpg', pic3: 'assets/mission1.png', pic4: 'assets/methods.jpg' }},
  // {title: 'Project name 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', pictures: {pic1: 'assets/methods.jpg', pic2: 'assets/mission1.jpg', pic3: 'assets/mission1.png', pic4: 'assets/methods.jpg' }},
  //   {title: 'Project name 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', pictures: {pic1: 'assets/methods.jpg', pic2: 'assets/mission1.jpg', pic3: 'assets/mission1.png', pic4: 'assets/methods.jpg' }},


  ];



	constructor() {}


  getWorks(){
  	return this.works.slice();
  }

  getWork(index: number){
    return this.works[index];
  }

  setWorks(works: Work[]){
    this.works = works;
    this.worksChanged.next(this.works.slice());

  }
}
