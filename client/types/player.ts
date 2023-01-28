import { ITrack } from "@/types/track";

export interface PlayerState {
    active: null | ITrack;
    volume: number;
    duration: number;
    currentTime: number;
    pause: boolean;
}

export enum PlayerActionTypes {
    PLAY = "PLAY",
    PAUSE = "PAUSE",
    SET_ACTIVE = "SET_ACTIVE",
    SET_DURATION = "SET_DURATION",
    SET_CURRENT_TIME = "SET_CURRENT_TIME",
    SET_VOLUME = "SET_VOLUME"
}

interface PlayActions {
    type: PlayerActionTypes.PLAY;
}

interface PauseActions {
    type: PlayerActionTypes.PAUSE;
}

interface SetActiveActions {
    type: PlayerActionTypes.SET_ACTIVE;
    payload: ITrack;
}

interface SetDurationActions {
    type: PlayerActionTypes.SET_DURATION;
    payload: number;
}

interface SetCurrentTimeActions {
    type: PlayerActionTypes.SET_CURRENT_TIME;
    payload: number;
}

interface SetVolumeActions {
    type: PlayerActionTypes.SET_VOLUME;
    payload: number;
}

export type PlayerAction =
    PlayActions
    | PauseActions
    | SetActiveActions
    | SetDurationActions
    | SetCurrentTimeActions
    | SetVolumeActions