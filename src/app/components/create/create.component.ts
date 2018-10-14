import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../app.state';
import { Store } from '@ngrx/store';
import * as tutorialActions from '../../actions/tutorial.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store:Store<IAppState>) { }

  ngOnInit() {
  }

  addTutorial(name:string,url:string){
    this.store.dispatch(
      new tutorialActions.AddTutorial({name:name,url:url})
    );
  }

}
