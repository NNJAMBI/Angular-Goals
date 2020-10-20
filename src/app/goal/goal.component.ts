import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[];
  alertService: AlertService;
  quote: Quote;

  goToUrl(id){
    this.router.navigate(['/goals', id])
  }
  constructor( private goalService: GoalService, alertService: AlertService, private quoteService:QuoteRequestService, private router: Router) {
    this.alertService = alertService
  }
  ngOnInit(): void {
    // get goals list from the server
    this.goalService.getGoals().subscribe(data=>{
      console.log(typeof data)
      this.goals = data
    })

    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }
  addNewGoal(goal){
    this.goalService.postGoal(goal).subscribe(response =>{
      console.log(response)
      this.ngOnInit()
    })
  }
  deleteGoal(index){
    let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
    
    let id = this.goals[index].id
    if (toDelete){
      this.goalService.deleteGoal(id).subscribe(res =>{
        console.log(res)
        this.goals.splice(index,1) 
        this.alertService.alertMe("The goal has been deleted")
      })
    }
  }
}
