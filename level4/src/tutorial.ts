// let a:number;
// a="gidjd";

//string

// let a:string;
// a=43;//number is not assignable its type is string

//Boolean

// let isOnline:boolean;
// isOnline=809;//number is not assifnable its type is boolean

//Array

// let arr:number[] ;
// arr=[3,4]//by default any type
// let arrr:number[];
// arrr=[3,4]
// arrr.concat(arr)

//Tuple

// let arr:[number,string,boolean]
// arr=[4,"Df",true]//Type '[number, string]' is not assignable to type '[number, string, boolean]'. Source has 2 element(s) but target requires 3.ts(2322
 
// let arr:number[]= [10,30,49];

//function

// function gopal(a:number,b:string):number{
// //    return //Type 'undefined' is not assignable to type 'number'.
// return 854;
// }
// gopal(48,58)//Argument of type 'number' is not assignable to parameter of type 'string'.

// gopal()//An argument for 'a' was not provided.

// gopal(33,"dd") //typescript is babu seyat ke liye hanikark hai

// function car(a:number,b:string){
//   return a+b;
// }/// if we dont mentioned return type , then by default return type is void

// function gopal(a:number,b:string="sham"){

// }
// gopal(45)

// function gopal(a:number,b:string){

// }
// gopal(45)//Expected 2 arguments, but got 1

// let k=99;
// k="494";

//type inference
//let k=59;
// let k;//in this condititon we dont kown which value will be assign , we want to assign only number ,in this codition we to define type annotation

//type annotation

// let k:number;
// k=29;    

//type alias is costum type

// type ayush = number | string;

// let a:ayush

// a=98;
// a="dfd"
// a=8.4;


// type status ="success"|"Error"|"pending"

// let b :status
// b="success";

// type user={
//     name:number
//     age:number
// }

// let a:user

// a={
//     name:74,
//     age:44
// }


// type post ={//this real world use case
//     des:string,
//     img:string,
//     likes:number
// }

// let obj:post={
//     des:"fist post",
//     img:"dfd",
//     likes:43
// }

// type mathfun = (a:number, b:number)=>number;
// let add:mathfun=(a,b)=>{
//     return a
// }


// type a={
//     a:number
// }

// type b={
//     b:string
// }

// type ab=a&b;

//Interface

// interface A{
//     a:number
// }

// interface b extends A{
//     b:string
// }

// let Obj:b={
//     a:90,
//     b:"Gopal"
// }

//Generics 

// function hello (a,b){

// }
// hello(2,"5")

// function hello<T>(a:T,b:string):T{
//     return a
// }

// hello(22,"$")//Argument of type '"$"' is not assignable to parameter of type '22'.
// hello<number>(22,"goap")

// interface user<T>{
//     numa:string,
//     age:T
// }

// let gopal:user<number>={
//     numa:"ayush",
//     age:21
// }

// let a:user={
//     name:"g"
// }//global type declare already

// let a:gopal;
// a=22
// a="df"