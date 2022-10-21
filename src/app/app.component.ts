import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PRUEBA';
  username = 'felixvillamizar';
  username2:string ='Juan Camilo';
  username3:string | number = 84090351;
  email: string = 'felixvilla51@gmail.com';

  persona = {
  name:'Magdalena Martinez',
  age:54,  
  }

  btnDisable = true;

}
  
  

 

