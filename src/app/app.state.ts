import { ITutorial } from "./models/tutorial.model";

export interface IAppState{
    readonly tutorial : ITutorial[];
}