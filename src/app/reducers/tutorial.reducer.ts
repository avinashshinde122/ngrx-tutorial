import { ITutorial } from "../models/tutorial.model";
import * as TutorialActions  from "../actions/tutorial.action";

export const initialState:ITutorial = {
    name:'Initial State',
    url : 'http://google.com'
};

export function tutorialReducer(state: ITutorial[] = [initialState],action:TutorialActions.Actions){
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state,action.payload];
            break;
        case TutorialActions.REMOVE_TUTORIAL:
            let s =  state.filter(
                (t,i)=>{
                   return  i!=action.payload;
                }
            );
            return s;
            break;
        default:
            break;
    }
}