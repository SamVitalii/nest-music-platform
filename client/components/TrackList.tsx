import React from "react";
import { ITrack } from "@/types/track";
import { Box, Grid } from "@mui/material";
import TrackItem from "@/components/TrackItem";

interface TrackListProps {
    tracks: ITrack[];
}

const TrackList = ({ tracks }: TrackListProps) => {
    return (
        <Grid container direction="column">
            <Box p={2}>
                {tracks.map(track =>
                    <TrackItem
                        key={track._id}
                        trackId={track._id}
                    />)}
            </Box>
        </Grid>
    );
};

export default TrackList;