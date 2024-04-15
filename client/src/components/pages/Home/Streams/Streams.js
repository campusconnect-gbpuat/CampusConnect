import {
    Card,
    CardContent,
    CardActions,
    Button,
    Grid,
    Typography,
} from "@material-ui/core"
import React, { useContext, useState, useEffect } from "react"
import { StreamContext } from "../../../../context/streamContext/StreamContext"
import { Home } from "../../../common/Base/Home"
import { AuthContext } from "../../../../context/authContext/authContext"
import CameraIcon from "@material-ui/icons/Camera"
import { LoadingStream } from "./LoadingStream"
import { StreamModal } from "../../Modals/StreamModal"

export const Streams = () => {
    const streamContext = useContext(StreamContext)
    const authContext = useContext(AuthContext)
    const [showStreamModal, setShowStreamModal] = useState(false)
    const [streamModalObj,setStreamModalObj]= useState()

    useEffect(() => {
        streamContext.getStreams()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleModalStream = (st) => {
        setShowStreamModal(!showStreamModal)
        setStreamModalObj(st)
    }

    const styleTheme =
        authContext.theme === "dark"
            ? { background: "#121212", color: "whitesmoke" }
            : { background: "white", color: "black" }

    const clickStyleTheme =
        authContext.theme === "dark"
            ? { color: "#03DAC6", borderColor: "#03DAC6" }
            : { color: "blue", borderColor: "blue" }

    return (
        <Home>
            <div>
                {streamContext.loading ? (
                    <LoadingStream />
                ) : (
                    Array.isArray(streamContext.stream) && streamContext.stream.length ? (
                        streamContext.stream.map((st, index) => {
                            return (
                                <Card elevation={1} className="mb-3" style={styleTheme}>
                                    <div className="centered-image-container">
                                        {st.picture && (
                                        <img
                                            className="centered-image"
                                            height="100%"
                                            src={`https://campusconnect-cp84.onrender.com/${st.picture[0]}`}
                                            alt={st.picture}
                                        />
                                        )}
                                    </div>
                                    <CardContent>
                                        <Grid>
                                            <Grid container justifyContent="space-between" alignItems="flex-start">
                                                <Grid item>
                                                    <Grid item>
                                                        <Typography variant="body1">Title: {st.title}</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="body1">Date: {st.date}</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="body1">Time: {st.time}</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="body1">Type: {st.type}</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="body1">Attendees: {st.attendees}</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="body1">Organizer: {st.organizer}</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item className="mt-3">
                                                    <Grid container direction="row">
                                                        <Grid item>
                                                            {authContext.user.role === 2 && (
                                                                <CardActions className="pt-0 px-0">
                                                                    <Button
                                                                        size="small"
                                                                        variant="outlined"
                                                                        onClick={() => {
                                                                            handleModalStream(st);
                                                                        }}
                                                                        style={clickStyleTheme}
                                                                    >
                                                                        Edit
                                                                    </Button>
                                                                </CardActions>
                                                            )}
                                                        </Grid>
                                                        <Grid item>
                                                            {authContext.user.role === 2 && (
                                                                <CardActions className="pt-0 px-3">
                                                                    <Button
                                                                        size="small"
                                                                        variant="outlined"
                                                                        onClick={() => {
                                                                            streamContext.deleteStream(authContext.user._id, st._id);
                                                                        }}
                                                                        style={clickStyleTheme}
                                                                    >
                                                                        Delete
                                                                    </Button>
                                                                </CardActions>
                                                            )}
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            )
                        })
                    ) : (
                        <div
                            className="m-auto"
                            style={{
                                height: "30vh",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Grid
                                container
                                spacing={3}
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <CameraIcon fontSize="large" />
                                <h6 className="mt-2">No live stream out there</h6>
                            </Grid>
                        </div>
                    )
                )}
                {showStreamModal && streamModalObj && (
                    <StreamModal
                        show={showStreamModal}
                        handleModal={handleModalStream}
                        streamFunction={streamContext.updateStream}
                        modalTitle="Update Live Stream"
                        stream={streamModalObj}
                    />
                )}
            </div>
        </Home>
    )
}