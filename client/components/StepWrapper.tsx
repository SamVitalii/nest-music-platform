import { ReactNode } from "react";
import { Card, Container, Grid, Step, StepLabel, Stepper } from "@mui/material";

const steps = ["Track info", "Upload track cover", "Upload the track itself"];

interface StepWrapperProps {
    activeStep: number;
    children: ReactNode;
}


const StepWrapper = ({ activeStep, children }: StepWrapperProps) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) =>
                    <Step
                        key={index}
                        completed={activeStep > index}
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent="center" style={{ margin: "70px 0", height: 270 }}>
                <Card style={{ width: 600 }}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;