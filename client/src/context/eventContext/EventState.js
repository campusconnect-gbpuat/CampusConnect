import axios from "axios"
import React, { useReducer } from "react"
import { API } from "../../utils/proxy"
import { EVENT_ERROR, EVENT_GET, EVENT_LOADING } from "../types"
import { EventContext } from "./EventContext"
import EventReducer from "./EventReducer"

export const EventState = ({ children }) => {
  const initialState = {
    event: [],
    error: "",
    success: "",
    loading: true,
  }
  const [state, dispatch] = useReducer(EventReducer, initialState)

  const getEvents = async () => {
    try {
      dispatch({
        type: EVENT_LOADING,
        payload: true,
      })
      const response = await axios.get(`${API}/events`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("_token"))}`,
        },
      })
      if (response) {
        dispatch({
          type: EVENT_GET,
          payload: response.data,
        })
      }
    } catch (error) {
      dispatch({
        type: EVENT_ERROR,
        payload: error.response.data.errorMsg,
      })
    }
  }

  return (
    <EventContext.Provider
      value={{
        event: state.event,
        loading: state.loading,
        error: state.error,
        success: state.success,
        getEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  )
}
