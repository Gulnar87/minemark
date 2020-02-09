import { Component, OnInit } from '@angular/core';
import {  faFacebookF,  faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { faEnvelope,  faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 	
	faLinkedinIn = faLinkedinIn;
  faFacebookF = faFacebookF;

	faEnvelope = faEnvelope;
  faMapMarkedAlt= faMapMarkedAlt;


	faPhone = faPhone;

  constructor() { }

  ngOnInit() {
  }

}
