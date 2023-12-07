import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Listplats:any=[]

 

  messageSuccess=''
  constructor(private ds:AdminService,private route:Router ,private act:ActivatedRoute) {
   
    this.ds.gettAllplat().subscribe(data=>{
      console.log(data)
      this.Listplats=data
    })
    
   }

  
  

}
