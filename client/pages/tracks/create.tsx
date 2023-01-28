import React, { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import StepWrapper from "@/components/StepWrapper";
import { Button, Grid, TextField } from "@mui/material";
import FileUpload from "@/components/FileUpload";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);

    const next = () => {
        if (activeStep !== 2) setActiveStep(prev => prev + 1);
    };

    const back = () => {
        setActiveStep(prev => prev - 1);
    };

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction={"column"} style={{ padding: 20 }}>
                        <TextField
                            style={{ marginTop: 10 }}
                            label={"Track name"}
                        />
                        <TextField
                            style={{ marginTop: 10 }}
                            label={"Track author"}
                        />
                        <TextField
                            style={{ marginTop: 10 }}
                            label={"Track lyrics"}
                            multiline
                            rows={3}
                        />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload setFile={setPicture} accept="image/*">
                        <Button>Upload track cover</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept="audio/*">
                        <Button>Upload track itself</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button disabled={activeStep === 0} onClick={back}>Go Back</Button>
                <Button onClick={next}>Proceed</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;