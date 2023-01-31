import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { Button, Card, Grid, Box } from "@mui/material";
import { useRouter } from "next/router";
import TrackList from "@/components/TrackList";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "@/store";
import { fetchTracks } from "@/store/actions-creators/track";

const Index = () => {
    const router = useRouter();
    const { tracks, error } = useTypedSelector(state => state.track);

    if (error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>;
    }

    return (
        <MainLayout>
            <Grid container display="flex" justifyContent="center">
                <Card style={{ width: 900 }}>
                    <Box p={3}>
                        <Grid container justifyContent="space-between">
                            <h1>Track List</h1>
                            <Button onClick={() => router.push("/tracks/create")}>Upload</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;

// @ts-ignore
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());
});