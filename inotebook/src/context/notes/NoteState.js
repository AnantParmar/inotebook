import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=> {
    
    const notesInitial = [
        {
          "_id": "64088cf0b11dadf53b2549f8",
          "user": "6403733ce298da29b18ca8ff",
          "title": "My Title 4",
          "description": "Please WakeUp Early",
          "tag": "personal",
          "date": "2023-03-08T13:26:08.167Z",
          "__v": 0
        },
        {
          "_id": "6408af0fa42561077800135e",
          "user": "6403733ce298da29b18ca8ff",
          "title": "My Title 4",
          "description": "Please WakeUp Early",
          "tag": "personal",
          "date": "2023-03-08T15:51:43.424Z",
          "__v": 0
        },
        {
          "_id": "6408af0fa42561077800135e",
          "user": "6403733ce298da29b18ca8ff",
          "title": "My Title 4",
          "description": "Please WakeUp Early",
          "tag": "personal",
          "date": "2023-03-08T15:51:43.424Z",
          "__v": 0
        },
        {
          "_id": "6408af0fa42561077800135e",
          "user": "6403733ce298da29b18ca8ff",
          "title": "My Title 4",
          "description": "Please WakeUp Early",
          "tag": "personal",
          "date": "2023-03-08T15:51:43.424Z",
          "__v": 0
        },
        {
          "_id": "6408af0fa42561077800135e",
          "user": "6403733ce298da29b18ca8ff",
          "title": "My Title 4",
          "description": "Please WakeUp Early",
          "tag": "personal",
          "date": "2023-03-08T15:51:43.424Z",
          "__v": 0
        },
        {
          "_id": "6408af0fa42561077800135e",
          "user": "6403733ce298da29b18ca8ff",
          "title": "My Title 4",
          "description": "Please WakeUp Early",
          "tag": "personal",
          "date": "2023-03-08T15:51:43.424Z",
          "__v": 0
        },
        {
          "_id": "6408af0fa42561077800135e",
          "user": "6403733ce298da29b18ca8ff",
          "title": "My Title 4",
          "description": "Please WakeUp Early",
          "tag": "personal",
          "date": "2023-03-08T15:51:43.424Z",
          "__v": 0
        },
        {
          "_id": "6408af0fa42561077800135e",
          "user": "6403733ce298da29b18ca8ff",
          "title": "My Title 4",
          "description": "Please WakeUp Early",
          "tag": "personal",
          "date": "2023-03-08T15:51:43.424Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(notesInitial)
    return (                                          
        <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
        </NoteContext.Provider>
    )
} 

export default NoteState;