import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent {
  messageErr=""
  constructor(private ds:AdminService,private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    // console.log(data)
    this.ds.Addplat(data).subscribe(response=>{
       console.log(response)

      this.route.navigate(['/admin'])

    })
  }
}
