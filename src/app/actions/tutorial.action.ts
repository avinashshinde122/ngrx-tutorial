import { Action } from "@ngrx/store";
import { ITutorial } from "../models/tutorial.model";

export const ADD_TUTORIAL = 'Add';
export const REMOVE_TUTORIAL = 'Remove';

export class AddTutorial implements Action{
   readonly type: string = ADD_TUTORIAL;
   constructor(public payload: ITutorial){}
}

export class RemoveTutorial implements Action{
    readonly type: string = REMOVE_TUTORIAL;
    constructor(public payload: number){}
 }

 export type Actions = AddTutorial | RemoveTutorial; 