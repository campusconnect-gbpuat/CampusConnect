import React from "react"
import "./App.css"
import { Routing } from "./components/common/Routing"
import { AdsState } from "./context/adsContext/AdsState"
import { AuthState } from "./context/authContext/AuthState"
import { BlogState } from "./context/blogContext/BlogState"
import { NoticeState } from "./context/noticeContext/NoticeState"
import { EventState } from "./context/eventContext/EventState"
import { PollState } from "./context/pollContext/PollState"
import { PostState } from "./context/postContext/PostState"
import { UserState } from "./context/userContext/UserState"

export const App = () => {
  return (
    <AuthState>
      <UserState>
        <PollState>
          <PostState>
            <BlogState>
              <AdsState>
                <EventState>
                  <NoticeState>
                    <Routing />
                  </NoticeState>
                </EventState>
              </AdsState>
            </BlogState>
          </PostState>
        </PollState>
      </UserState>
    </AuthState>
  )
}
