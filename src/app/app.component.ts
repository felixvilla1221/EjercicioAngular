import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PRUEBA';
  name = 'Felix Villamizar';
  age = 40;
  img = 'https://www.w3schools.com/howto/img_avatar.png'
  btnDisable = true;

  persona = {
  name: 'Felix Villamizar', 
  age:40,
  avatar:'https://www.w3schools.com/howto/img_avatar.png' 
  }

 toggleButton(){
  this.btnDisable = !this.btnDisable;
  }


  increaseAge(){
  this.persona.age += 1;
  }











  /* username = 'felixvillamizar';
  username2:string ='Juan Camilo';
  username3:string | number = 84090351;
  email: string = 'felixvilla51@gmail.com';
  phone: number =3223439827;
  sex: boolean | string = true;
  img: string ='https://www.w3schools.com/howto/img_avatar.png';
  

  a:number = 6;
  b:number = 4;

  sum: number = this.a + this.b;

  rest: number = this.a  - this.b;

  multi: number = this.a * this.b;

  div: number = this.a / this.b;





  persona = {
  name:'Magdalena Martinez',
  age:54,
  phone:3223439827,
  avatar:'https://www.w3schools.com/howto/img_avatar.png',
  sex:true,
  }

  btnDisable = true;

  


}

const sum =(a:number , b:number) => {
return a + b;
}

sum(6,4);


const rest = (a:number , b:number) => {
return a - b;   */
}
  
  

 

