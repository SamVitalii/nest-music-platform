import React, { useEffect } from "react";
import { Grid, IconButton } from "@mui/material";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import styles from "@/styles/Player.module.scss";
import { ITrack } from "@/types/track";
import TrackProgress from "@/components/TrackProgress";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";

let audio: any;

const Player = () => {
    const track: ITrack = {
        _id: "1",
        name: "T1",
        artist: "First",
        text: "111",
        listens: 0,
        audio: "http://localhost:8000/audio/b5ede3ea-8135-45c3-95fe-7aeca0878ee7.mp3",
        picture: "http://localhost:8000/image/a3737cbe-83ab-4e71-97a6-dfebefc1ee5a.png",
        comments: []
    };
    const { pause, active, volume, duration, currentTime } = useTypedSelector(state => state.player);
    const { playTrack, pauseTrack } = useActions();

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
            audio.src = track.audio;
        }
    }, []);

    const play = () => {
        if (pause) {
            playTrack();
            audio.play();
        } else {
            pauseTrack();
            audio.pause();
        }
    };

    return (
        <div className={styles.player}>
            <IconButton onClick={play}>
                {!pause ? <Pause /> : <PlayArrow />}
            </IconButton>
            <Grid container direction="column" style={{ width: 200, margin: "0 20px" }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})} />
            <VolumeUp style={{ marginLeft: "auto" }} />
            <TrackProgress left={0} right={100} onChange={() => ({})} />
        </div>
    );
};

export default Player;