import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { Container } from "@mui/material";
import Player from "@/components/Player";

interface Props {
    children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <Container style={{ marginTop: "40px" }}>
                {children}
            </Container>
            <Player />
        </>
    );
};

export default MainLayout;