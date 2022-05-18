import { Component } from '@angular/core';
import { TokenStorageService } from './services/auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_frontend';
  static API_URL: string;
  isLoggedIn = false;
  currentUser: any;
  showRhBoard = false;
  role!: string;
  constructor(private tokenStorage:TokenStorageService){

  }

  ngOnInit() {
    //this.isLoggedIn = !!this.tokenStorage.getToken();
    //if (this.isLoggedIn) {
     // this.currentUser = this.tokenStorage.getUser();

     // this.role = this.currentUser.user.role.libelle;
      //this.showRhBoard = this.role.includes('RH');
    }
 

  logout(){
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
