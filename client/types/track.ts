export interface IComment {
    _id: string;
    username: string;
    text: string;
}

export interface ITrack {
    _id: string;
    name: string;
    artist: string;
    text: string;
    listens: number;
    audio: string;
    picture: string;
    comments: IComment[];
}

export interface TrackState {
    tracks: ITrack[];
    error: string;
}

export enum TrackActionTypes {
    FETCH_TRACKS = "FETCH_TRACKS",
    FETCH_TRACKS_ERROR = "FETCH_TRACKS_ERROR",
}

interface FetchTrackAction {
    type: TrackActionTypes.FETCH_TRACKS;
    payload: ITrack[];
}

interface FetchTrackErrorAction {
    type: TrackActionTypes.FETCH_TRACKS_ERROR;
    payload: string;
}

export type TrackAction = FetchTrackAction | FetchTrackErrorAction