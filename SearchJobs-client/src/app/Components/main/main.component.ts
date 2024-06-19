import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Models/User';
import { FieldWork } from '../../Models/Job';
import { Subscription } from 'rxjs';
import { JobDataService } from '../../services/job-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  user: User = {
    userName: '',
    password: '',
    id: 0,
    fieldWorkSearch: FieldWork.ACCOUNTING,
    numCVSent:0
  };
  submitClicked = false;
private submitClickedSubscription: Subscription;

constructor(private router:Router, private jobSrv : JobDataService){
  this.submitClickedSubscription = this.jobSrv.submitClicked$.subscribe(
    (value) => {
      this.submitClicked = value;
      let userData;
    const userString = localStorage.getItem('user');
    
    if (userString) {
      try {
        userData = JSON.parse(userString);
      } catch (error) {
        console.error('Error parsing user data from LocalStorage:', error);
      }
    }

    if (userData) {
      this.user = {
        userName: userData.userName || '',
        password: userData.password || '',
        id: userData.id || 0,
        fieldWorkSearch: userData.fieldWorkSearch ,
        numCVSent:userData.numCVSent
      };
    }
    
  }
    
  );
  


}

ngOnDestroy() {
  this.submitClickedSubscription.unsubscribe();
}


ngOnInit(): void {
  if (localStorage.length === 0 || localStorage.getItem('user') === null) {
    this.router.navigate(['/login']);
  } else {
    let userData;
    const userString = localStorage.getItem('user');
    
    if (userString) {
      try {
        userData = JSON.parse(userString);
      } catch (error) {
        console.error('Error parsing user data from LocalStorage:', error);
      }
    }

    if (userData) {
      this.user = {
        userName: userData.userName || '',
        password: userData.password || '',
        id: userData.id || 0,
        fieldWorkSearch: userData.fieldWorkSearch ,
        numCVSent:userData.numCVSent
      };
    }
    
  }
}

  
}
