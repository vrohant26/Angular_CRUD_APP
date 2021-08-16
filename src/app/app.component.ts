import { titdesc } from './model';
import { TaskService } from './task.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CRUD APP'
  data1 ?: any[]
  data ?:titdesc
  showadd ?: boolean
  showupd ?: boolean
  name = ""
  age =""
  gender=""
  phone=""

  constructor(private task: TaskService){}

  ngOnInit(){
    this.Emp()
  }

  Emp(){
    this.task.getEmp().subscribe((data:any)=>{
      this.data1 = data
    })
  }

  onAdd(){
    const form:any= document.getElementById('form')
    form.reset()
    this.showadd = true
    this.showupd = false
  }

  sendData(){

    this.data =  {
      name: this.name,
      age: this.age,
      gender: this.gender,
      phone: this.phone
    }
    this.task.createEmp(this.data).subscribe(()=>{
      document.getElementById('cancel')?.click()
       alert('Employee Added Successfully!')
    },(err)=>{alert("Something went Wrong")})
    window.location.reload()
  }

  delete(item : any){
    this.task.delete(item._id).subscribe(res=>{

      if(confirm('are you sure?')){
        alert('deleted!')
        window.location.reload()
      }
      // alert('deleted!')
    })
  }
  id = ""
  edit(item:any){
    this.id = item._id
    this.showadd = false
    this.showupd = true
    this.name = item.name
    this.age = item.age
    this.gender = item.gender
    this.phone = item.phone
  }

  update(){

    this.data  =   {
      name: this.name,
      age: this.age,
      gender: this.gender,
      phone: this.phone
    }
    this.task.updateEmp(this.data,this.id).subscribe(()=>{
      document.getElementById('cancel')?.click()
      alert("Updated Successfully!")
    })
    window.location.reload()
  }

}
