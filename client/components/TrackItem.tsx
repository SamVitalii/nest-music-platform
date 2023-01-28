import React from "react";
import { ITrack } from "@/types/track";
import { Card, Grid, IconButton } from "@mui/material";
import styles from "../styles/TrackItem.module.scss";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/router";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem = ({ track, active = false }: TrackItemProps) => {
    const router = useRouter();

    return (
        <Card className={styles.track} onClick={() => router.push("/tracks/" + track._id)}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active ? <Pause /> : <PlayArrow />}
            </IconButton>
            <img width={70} height={70} src={track.picture} />
            <Grid container direction="column" style={{ width: 200, margin: "0 20px" }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
            </Grid>
            {active && <div>02:45 / 04:12</div>}
            <IconButton onClick={e => e.stopPropagation()} style={{ marginLeft: "auto" }}>
                <Delete />
            </IconButton>
        </Card>
    );
};

export default TrackItem;