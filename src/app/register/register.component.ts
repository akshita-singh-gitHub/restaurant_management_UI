import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { User } from '../model';
import { RestoService } from '../resto.service';
import { passwordValidator } from './passwordValidator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  email:any='';
  password :any='';

  alert: boolean = false;
  constructor(private resto: RestoService) {}
  RegisterForm = new FormGroup({
    Name: new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Password: new FormControl('',[Validators.required,  Validators.minLength(4)]),
    Role: new FormControl(''),
    
  },{validators :passwordValidator});
  ngOnInit(): void {
  }

  // CreateCart(){
  //   this.resto.CreateUserCart(this.RegisterForm.value).subscribe((result:any)=>{
  //     console.log(result)
  //     console.log(this.RegisterForm.value);

  //   })
  // }

  CollectUser() {
    console.log(this.RegisterForm.value.Name)
    // console.log(this.RegisterForm.get('Name').value)
    this.resto.RegisterUser(this.RegisterForm.value,this.RegisterForm.value.Name,this.RegisterForm.value.Role).subscribe((result) => {
      console.log(result);
      // if(this.RegisterForm.value.Role='User')
      // {
      //   this.CreateCart();
      // }
    });
    this.alert = true;
  }


  // register(){

  //   if(this.email==''){
  //   alert('plese enter values')
  //   return;
  // }
  //   if(this.password==''){
  //   alert('plese enter values')
  //   return;
  // }
  
  // this.resto.register(this.email,this.password);
  // this.email='';
  // this.password='';
  // }


  CloseAlert() {
    this.alert = false;
    this.RegisterForm.reset({});
  }

  get Name(){
    return this.RegisterForm.get('Name');
  }
   get Email(){
    return this.RegisterForm.get('Email');
  }
   get Password(){
    return this.RegisterForm.get('Password');
  }
   get ConfirmPassword(){
    return this.RegisterForm.get('ConfirmPassword');
  }
}
