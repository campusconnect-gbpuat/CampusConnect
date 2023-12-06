import { Grid } from "@material-ui/core"
import React from "react"
import { NoticeCard } from "./Notice/NoticeCard"
import { PollCard } from "./Poll/PollCard"

export const HomeRightBar = () => {
  return (
    <div className="home-right-bar">
      <Grid container direction="column" justifyContent="center">
        <PollCard />
        <NoticeCard />
      </Grid>
    </div>
  )
}
