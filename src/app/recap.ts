const username = 'Felix villamizar';
const username2: string ='Felix Villamizar';
const username3: string | number ='Felix villamizar';

const sum = (a:number , b:number) => {
    return a + b;
}

sum(1 , 4);

const resta = (a:number , b:number)=> {
    return a - b;
}

resta(5 , 4);


class Persona {
name:string;
age:number;
phone:number;
email:string;  



constructor (name:string, age:number, phone:number, email:string){
this.name  = name;
this.age   = age;
this.phone = phone;
this.email = email;
}
}

const persona= new Persona('Felix Villamizar' ,40 , 3223439827 , 'felixvilla51@gmail.com');



class Empleado {
codigoEmpleado:number;
nombreEmpleado:string;
cargoEmpleado:string;
salarioEmpleado:number;


constructor(codigoEmpleado:number , nombreEmpleado:string , cargoEmpleado:string , salarioEmpleado:number){
this.codigoEmpleado  = codigoEmpleado;
this.nombreEmpleado  = nombreEmpleado;
this.cargoEmpleado   = cargoEmpleado;
this.salarioEmpleado = salarioEmpleado;
}

}

const empleado = new Empleado(84090351 , 'Felix villamizar' , 'Desarrollador de software' , 2800000);


class Estudiante {
public codigoEstudiante:number;
public nombreEstudiante:string;
public gradoEstudiante:number;
public cursoEstudiante:string;
public jornadaEstudiante:string;
public sedeEstudiante:string;
 


constructor(codigoEstudiante:number , nombreEstudiante:string , gradoEstudiante:number , cursoEstudiante:string , jornadaEstudiante:string , sedeEstudiante:string){
this.codigoEstudiante  = codigoEstudiante;
this.nombreEstudiante  = nombreEstudiante;
this.gradoEstudiante   = gradoEstudiante;
this.cursoEstudiante   = cursoEstudiante;
this.jornadaEstudiante = jornadaEstudiante;
this.sedeEstudiante    = sedeEstudiante;
}

}


const estudiante = new Estudiante(1031425065 , 'Juan camilo Villamizar' , 8 , '8B', 'Matinal' , 'B');