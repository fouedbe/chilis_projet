import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  dataArray:any=[]
 
  dataproduit={
    nomProduct:'',
    description:'',
    image:'',
    prixProduct:0,
    id:'',
  }

  messageSuccess=''
  constructor(private ds:AdminService,private route:Router) {
   
    this.ds.gettAllplat().subscribe(data=>{
      console.log(data)
      this.dataArray=data
    })
    
   }

  ngOnInit(): void {
  }


  delete(id:any,i:number){

    this.ds.deleteplat(id).subscribe(response=>{
      console.log(response)
       this.dataArray.splice(i,1)

    })

  }



  getdata(nomProduct:string,description:string,prixProduct:number,image:string,id:any){
    this.messageSuccess=''
    this.dataproduit.nomProduct=nomProduct
    this.dataproduit.description=description
    this.dataproduit.prixProduct=prixProduct
    this.dataproduit.image=image
    this.dataproduit.id=id
    console.log(this.dataproduit)

  }
  update(f:any){
    let data=f.value
    this.ds.updateplat(this.dataproduit.id,data).subscribe(response=>
      {
     
        let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.dataproduit.id)

        this.dataArray[indexId].nomProduct=data.nomProduct
        this.dataArray[indexId].description=data.description
        this.dataArray[indexId].prixProduct=data.prixProduct
        this.dataArray[indexId].image=data.image


        this.messageSuccess=`this produit ${this.dataArray[indexId].title} is updated`


      })
  }


}
