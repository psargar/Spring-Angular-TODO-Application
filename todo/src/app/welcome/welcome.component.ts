import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  name = ''
  message = 'Some Welcome Message'
  welcomeMessageFromService:string =''
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService,
    private todoService:TodoDataService
  ){

  }

  ngOnInit(): void {
    //Conpilation error  - this.message = 5;
    // console.log(this.message);
    this.name = this.route.snapshot.params['name'];

  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response.message),
      // error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageByPathVar(){
    this.service.executeHelloWorldBeanServiceByPathVar(this.name).subscribe(
      response => this.handleSuccessfulResponse(response.message),
      // error => this.handleErrorResponse(error)
    );
  }


  handleSuccessfulResponse(response : any){
    console.log(response);
    this.welcomeMessageFromService = response;
    console.log(response);
  }


}

