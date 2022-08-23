import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  
  public empAr: emp[] = [];

  employeeForm = this.fb.group({
    name:['',{nonNullable: true},[Validators.required,Validators.minLength(50)]],
    eid : [''],
    salary: [''],
    gender:[''],
    city:['',Validators.required],
    state:['',Validators.required]
  });

  
  constructor(private fb: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    this.updateEmpTable();
  }

  // updateName() {
  //   this.employeeForm.setValue({name:"Nancy"});
  // }

 //update emp
 updateEmp(val:any){
    console.log("=============== ",val)
    // this.http.post<any>('http://localhost:3000/emp/'+val.id,val,{headers:{'Content-Type':'application/json'}})
    //     .subscribe(res =>{
    //        console.log(" check response : ",res);
    //     });
    //     this.updateEmpTable();
  }

  deleteEmp(id:any){
     console.log("Enter into delete function");
      this.http.delete('http://localhost:3000/emp/'+id).subscribe(res=>{
        console.log(" check response ",res);
      });
      this.updateEmpTable();
  }

 //delete emp

  updateProfile() {
    this.employeeForm.patchValue({
      name: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  onSubmit(){
    console.log(this.employeeForm.value);
    let emp = this.employeeForm.value;
    emp._id = Math.floor(Math.random() * 5);
    this.http.post<any>('http://localhost:3000/emp', this.employeeForm.value,
      {headers:{'Content-Type':'application/json'}}) .subscribe(
        data => console.log('success', data),
        error => console.log('oops', error)
      );

    this.updateEmpTable();
    
  }

   updateEmpTable(){
      this.http.get<any>('http://localhost:3000/emp').subscribe(res =>{
        this.empAr = res;
        console.log("Get all Users from service response");
        console.log(this.empAr)
      });
   }

  get name() { return this.employeeForm.get('name'); }

  get eid() { return this.employeeForm.get('eid'); }

  get city() { return this.employeeForm.get('city'); }

  get state() { return this.employeeForm.get('state'); }


  get salary() { return this.employeeForm.get('salary'); }

  get street() { return this.employeeForm.get('address')?.get('street'); }


}

interface emp{
  id:number;
  name:string;
  city: string;
  state: string;
}