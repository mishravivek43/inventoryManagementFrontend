import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  id: number;
  user: User;
  form: FormGroup;

  constructor(
    public userService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
    this.userService.login(this.id).subscribe((data: User)=>{
      this.user = data;
    });


    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.userService.login(this.form.value).subscribe(res => {
        console.log(res)
        if(res.status){
          // console.log('Login Successful');
          this.router.navigateByUrl('product');
        }else{
          alert("Wrong Credentials");
        }

    })
  }

}
