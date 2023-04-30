import MainLayout from "@/layouts/MainLayout";
import React from "react";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import { ITrack } from "@/types/track";
import TrackList from "@/components/TrackList";

const Index = () => {
    const router = useRouter()
    // const tracks: ITrack = [
    //     {}
    // ]

    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>List of tracks</h1>
                            <Button onClick={() => router.push('/tracks/create')}>
                                Download
                            </Button>
                        </Grid>
                    </Box>
                    {/* <TrackList tracks={tracks}/> */}
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default Index;