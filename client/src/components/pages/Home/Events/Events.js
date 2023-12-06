import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from "@material-ui/core"
import React, { useContext, useEffect } from "react"
import { EventContext } from "../../../../context/eventContext/EventContext"
import { Home } from "../../../common/Base/Home"

export const Events = () => {
    const eventContext = useContext(EventContext)
    useEffect(() => {
        eventContext.getEvents()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Home>
            <div>
                {eventContext.loading ? (
                    <div>loading</div>
                ) : (
                    eventContext.event.map((ev, index) => {
                        return (
                            <Card elevation={1} className="mb-3">
                                <CardContent>
                                    <Grid
                                        container
                                        justifyContent="space-between"
                                        alignItems="flex-start"
                                    >
                                        <Grid item>
                                            <Typography color="textSecondary" variant="caption">
                                                Event no.{index + 100}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="caption">
                                                {new Date(ev.createdAt).toDateString()}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Typography color="primary">{ev.title}</Typography>
                                    <Typography variant="body1">{ev.description}</Typography>
                                </CardContent>
                                <CardActions className="pt-0 px-3">
                                    <Button
                                        size="small"
                                        color="primary"
                                        variant="outlined"
                                        onClick={() => {
                                            window.open(`${ev.link}`)
                                        }}
                                    >
                                        Link
                                    </Button>
                                </CardActions>
                            </Card>
                        )
                    })
                )}
            </div>
        </Home>
    )
}