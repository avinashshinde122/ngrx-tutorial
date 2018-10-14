import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITutorial } from '../../models/tutorial.model';
import { Store } from '@ngrx/store';
import { IAppState } from '../../app.state';
import * as tutorialActions from '../../actions/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials:Observable<ITutorial[]>;

  constructor(private store:Store<IAppState>) {
    this.tutorials = store.select('tutorial')
  }


  ngOnInit() {
  }

  delTutorial(index){
    this.store.dispatch(
        new tutorialActions.RemoveTutorial(index)
    );
  }
}
