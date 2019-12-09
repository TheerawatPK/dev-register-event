import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name:string;
  private age:number;
  private email:string;
  private address:{
    street:string,
    city:string,
    province:string
  }
  private skills:string[];
  constructor() { 

  }

  ngOnInit() {
    this.name ="theerawat";
    this.age = 24;
    this.email = "theerawat.test@gmail.com";
    this.address = {
      street:"พหลโยธิน",
      city:"Gottham",
      province:"Pathum-tani"
    }
    this.skills=["Java","Html","Css"];
  }
  addSkill(newskill){
      if(newskill){
        this.skills.unshift(newskill);
        return false;
      }else{
        alert('Empty');
      }
    }

}
