import MainLayout from "@/layouts/MainLayout";
import { IComment, ITrack } from "@/types/track";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { userInput } from "@/hooks/userInput";

const TrackPage = ({ serverTrack }: any) => {
    const [track, setTrack] = useState<ITrack>(serverTrack);
    const router = useRouter();
    const username = userInput("");
    const text = userInput("");

    const addComment = async () => {
        try {
            const response = await axios.post("http://localhost:8000/tracks/comment", {
                username: username.value,
                text: text.value,
                trackId: track._id
            });
            setTrack({ ...track, comments: [...track.comments, response.data] });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <MainLayout
            title={"Music platform" + track.name + " - " + <track className="artist" />}
            keywords={track.name + ", " + track.artist}
        >
            <Button
                variant={"outlined"}
                onClick={() => router.push("/tracks")}
                style={{ fontSize: 32 }}
            >
                To List
            </Button>
            <Grid container style={{ margin: "20px 0" }}>
                <img src={"http://localhost:8000/" + track.picture} width={200} height={200} />
                <div style={{ margin: 20 }}>
                    <h1>Track: {track.name}</h1>
                    <h2>Artist: {track.artist}</h2>
                    <h2>Listens: {track.listens}</h2>
                </div>
            </Grid>
            <h1>Lyrics</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid container>
                <TextField
                    label="Your name"
                    fullWidth
                    {...username}
                />
                <TextField style={{ margin: "7px 0" }}
                           label="Comment"
                           {...text}
                           fullWidth
                           multiline
                           rows={4}
                />
                <Button onClick={addComment}>Send comment</Button>
            </Grid>
            <div>
                {track?.comments?.map((comment: IComment) =>
                    <div>
                        <div>Author: {comment.username}</div>
                        <div>Comment: {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const response = await axios.get("http://localhost:8000/tracks/" + params?.id);

    return {
        props: {
            serverTrack: response.data
        }
    };
};