import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { Button, Card, Grid, Box } from "@mui/material";
import { useRouter } from "next/router";
import { ITrack } from "@/types/track";
import TrackList from "@/components/TrackList";

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {
            _id: "1",
            name: "T1",
            artist: "First",
            text: "111",
            listens: 0,
            audio: "http://localhost:8000/audio/b5ede3ea-8135-45c3-95fe-7aeca0878ee7.mp3",
            picture: "http://localhost:8000/image/a3737cbe-83ab-4e71-97a6-dfebefc1ee5a.png",
            comments: []
        },
        {
            _id: "2",
            name: "T2",
            artist: "Second",
            text: "222",
            listens: 2,
            audio: "http://localhost:8000/audio/d41f4524-2775-4142-9bbb-fecfd6a34924.mp3",
            picture: "http://localhost:8000/image/f561e0cd-717e-4462-8c35-1500dfdcac07.jpg",
            comments: []
        },
        {
            _id: "3",
            name: "T3",
            artist: "Third",
            text: "333",
            listens: 3,
            audio: "http://localhost:8000/audio/777468b2-6450-4397-90a8-df75002138f7.mp3",
            picture: "http://localhost:8000/image/0fb8c4bf-9819-44f5-9c07-9966d6636343.jpg",
            comments: []
        }
    ];

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