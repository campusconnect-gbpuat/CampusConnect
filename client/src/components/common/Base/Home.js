import { Grid } from "@material-ui/core"
import React from "react"
import { useContext } from "react"
import { useEffect } from "react"
import { AuthContext } from "../../../context/authContext/authContext"
import { UserContext } from "../../../context/userContext/UserContext"
import { HomeRightBar } from "../../pages/Home/HomeRightBar"
import { HomeSideBar } from "../../pages/Home/HomeSideBar"
import { InputBox } from "../../pages/Home/InputBox"
import Header from "../Header/Header"
import HeaderMobile from "../Header/HeaderMobile"
import "./Home.css"
import { requestFirebaseNotificationPermission, subscribeUserToTopic } from "../../../utils/notification"
import { PollCard } from "../../pages/Home/Poll/PollCard"
import { UpdateCard } from "../../pages/Home/Update/UpdateCard"

export const Home = ({ children }) => {
  const userContext = useContext(UserContext)
  const authContext = useContext(AuthContext)
  // useEffect(() => {
  //   userContext.getUserById(authContext.user._id)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  useEffect(() => {
    userContext.getUserById(authContext.user._id);
    // console.log(userContext);
    requestFirebaseNotificationPermission().then((token) => {
      if(authContext.user.role !== 2){
        subscribeUserToTopic(token, "campus").catch((error) => {
          console.error("Subscription error: ", error);
        });
      }
      userContext.user.friendList.forEach((friend) => {
        let topic = friend._id;
        subscribeUserToTopic(token, topic).then(() => {
          console.log("Subscribed to topic");
        }).catch((error) => {
          console.error("Subscription error: ", error);
        });
      });
    }).catch((error) => {
      console.error("Error requesting notification permission: ", error);
    });
  }, [authContext.user._id]);

  return (
    <div className="home">
      <HeaderMobile />
      <Header />
      <div className="container">
        <Grid container spacing={3} justifyContent="center">
          <Grid item md={3}>
            <HomeSideBar />
          </Grid>
          <Grid item md={6}>
            <div id="home-center-wrapper">
              <InputBox />
              <PollCard />
              <UpdateCard />
              {children}
            </div>
          </Grid>
          <Grid item md={3}>
            <HomeRightBar />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
