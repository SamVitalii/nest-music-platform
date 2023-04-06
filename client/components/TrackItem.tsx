import React from "react";
import { Card, Grid, IconButton } from "@mui/material";
import styles from "../styles/TrackItem.module.scss";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/router";
import { playTrack } from "@/store/actions-creators/player";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import axios from "axios";
import { ITrack } from "@/types/track";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem = ({ track, active = false }: TrackItemProps) => {
    const router = useRouter();
    const { duration, currentTime } = useTypedSelector(state => state.player);
    const { playTrack, setActiveTrack } = useActions();


    function play(e: any) {
        if (!track) {
            return;
        }
        e.stopPropagation();
        setActiveTrack(track);
        playTrack();
    }

    async function deleteTrack() {
        try {
            await axios.delete(`http://localhost:8000/tracks/${track?._id}`);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Card className={styles.track} onClick={() => router.push("/tracks/" + track?._id)}>
            <IconButton onClick={play}>
                {active ? <Pause /> : <PlayArrow />}
            </IconButton>
            <img width={70} height={70} src={"http://localhost:8000/" + track?.picture} alt={":3"} />
            <Grid container direction="column" style={{ width: 200, margin: "0 20px" }}>
                <div>{track?.name}</div>
                <div style={{ fontSize: 12, color: "gray" }}>{track?.artist}</div>
            </Grid>
            {active && <div>{currentTime} / {duration}</div>}
            <IconButton onClick={deleteTrack} style={{ marginLeft: "auto" }}>
                <Delete />
            </IconButton>
        </Card>
    );
};

export default TrackItem;