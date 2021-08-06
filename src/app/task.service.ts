import { titdesc } from './model';
import { WebreqService } from './webreq.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private web : WebreqService) { }

  createEmp(a:titdesc){
    return this.web.post('person', a)
  }

  getEmp(){
    return this.web.get('person')
  }

  updateEmp(b:titdesc, id:string){
    return this.web.update('person', b, id)
  }

  delete(id:any){
    return this.web.delete('person' , id)
  }

}
