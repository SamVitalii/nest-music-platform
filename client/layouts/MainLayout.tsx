import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { Container } from "@mui/material";
import Player from "@/components/Player";
import Head from "next/head";

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
    children?: ReactNode;
}

const MainLayout = ({ children, title, description, keywords }: MainLayoutProps) => {
    return (
        <>
            <Head>
                <title>{title || "Music platform"}</title>
                <meta name="description"
                      content={`Music platform. Just be and listen to whatever you want.` + description} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content={keywords || "Music, tracks, listen free"} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <Container style={{ marginTop: "40px" }}>
                {children}
            </Container>
            <Player />
        </>
    );
};

export default MainLayout;