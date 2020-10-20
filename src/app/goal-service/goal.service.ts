import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor( private http: HttpClient) { }

  postGoal(goal): Observable<any>{
    return this.http.post('http://localhost:5000/goal (Links to an external site.)', goal)
  }

  getGoals(): Observable<any>{
    // return Goals
    return this.http.get('http://localhost:5000/goal (Links to an external site.)')
  }

  getGoal(id): Observable<any>{
    return this.http.get(`http://localhost:5000/goal/${id} (Links to an external site.)`)
  }

  deleteGoal(id){
    return this.http.delete(`http://localhost:5000/goal/${id} (Links to an external site.)`)
  }
}
