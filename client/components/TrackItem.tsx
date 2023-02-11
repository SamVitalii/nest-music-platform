import React from "react";
import { Card, Grid, IconButton } from "@mui/material";
import styles from "../styles/TrackItem.module.scss";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/router";
import { playTrack } from "@/store/actions-creators/player";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import axios from "axios";
import Image from "next/image";

interface TrackItemProps {
    trackId: string;
    active?: boolean;
}

//TODO normal pausing
const TrackItem = ({ trackId, active = false }: TrackItemProps) => {
    const router = useRouter();
    const { duration, currentTime } = useTypedSelector(state => state.player);
    const { tracks } = useTypedSelector(state => state.track);
    const { playTrack, pauseTrack, setActiveTrack } = useActions();

    const currentTrack = tracks.find(track => track._id === trackId) || null;

    function play() {
        if (!currentTrack) {
            return;
        }

        setActiveTrack(currentTrack);
        playTrack();
    }

    async function deleteTrack() {
        try {
            await axios.delete(`http://localhost:8000/tracks/${currentTrack?._id}`);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Card className={styles.track} onClick={() => router.push("/tracks/" + currentTrack?._id)}>
            <IconButton onClick={play}>
                {active ? <Pause /> : <PlayArrow />}
            </IconButton>
            <Image width={70} height={70} src={"http://localhost:8000/" + currentTrack?.picture} alt="Image" />
            <Grid container direction="column" style={{ width: 200, margin: "0 20px" }}>
                <div>{currentTrack?.name}</div>
                <div style={{ fontSize: 12, color: "gray" }}>{currentTrack?.artist}</div>
            </Grid>
            {active && <div>{currentTime} / {duration}</div>}
            <IconButton onClick={deleteTrack} style={{ marginLeft: "auto" }}>
                <Delete />
            </IconButton>
        </Card>
    );
};

export default TrackItem;