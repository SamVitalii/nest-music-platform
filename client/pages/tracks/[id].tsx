import MainLayout from "@/layouts/MainLayout";
import { ITrack } from "@/types/track";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";

const TrackPage = () => {
    const track: ITrack = {
        _id: "1",
        name: "T1",
        artist: "First",
        text: "111",
        listens: 0,
        audio: "http://localhost:8000/audio/a6c35747-66bf-42d5-8c36-22e1a219fdf7.mp3",
        picture: "http://localhost:8000/image/4502b373-4e85-480d-8b9d-f95f25332006.png",
        comments: []
    };
    const router = useRouter();

    return (
        <MainLayout>
            <Button
                variant={"outlined"}
                onClick={() => router.push("/tracks")}
                style={{ fontSize: 32 }}
            >
                To List
            </Button>
            <Grid container style={{ margin: "20px 0" }}>
                <img src={track.picture} width={200} height={200} />
                <div style={{ margin: 20 }}>
                    <h1>Track: {track.name}</h1>
                    <h2>Artist: {track.artist}</h2>
                    <h2>Listens: {track.listens}</h2>
                </div>
            </Grid>
            <h1>Lyrisc</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid container>
                <TextField
                    label="Your name"
                    fullWidth
                />
                <TextField
                    label="Comment"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Send comment</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Author: {comment.username}</div>
                        <div>Comment: Z{comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;