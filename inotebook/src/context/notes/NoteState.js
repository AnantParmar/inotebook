import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=> {
    
    const notesInitial = [
        {
          "_id": "64088cf0b11dadf53b2549f18",
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
          "_id": "6408af0fa425610778001351e",
          "user": "6403733ce298da29b18ca8ff",
          "title": "My Title 4",
          "description": "Please WakeUp Early",
          "tag": "personal",
          "date": "2023-03-08T15:51:43.424Z",
          "__v": 0
        },
        {
          "_id": "6408af0fa425610778001352e",
          "user": "6403733ce298da29b18ca8ff",
          "title": "My Title 4",
          "description": "Please WakeUp Early",
          "tag": "personal",
          "date": "2023-03-08T15:51:43.424Z",
          "__v": 0
        },
        {
          "_id": "6408af0fa425610778001353e",
          "user": "6403733ce298da29b18ca8ff",
          "title": "My Title 4",
          "description": "Please WakeUp Early",
          "tag": "personal",
          "date": "2023-03-08T15:51:43.424Z",
          "__v": 0
        },
        {
          "_id": "6408af0fa425610778001354e",
          "user": "6403733ce298da29b18ca8ff",
          "title": "My Title 4",
          "description": "Please WakeUp Early",
          "tag": "personal",
          "date": "2023-03-08T15:51:43.424Z",
          "__v": 0
        },
        {
          "_id": "6408af0fa425610778001355e",
          "user": "6403733ce298da29b18ca8ff",
          "title": "My Title 4",
          "description": "Please WakeUp Early",
          "tag": "personal",
          "date": "2023-03-08T15:51:43.424Z",
          "__v": 0
        },
        {
          "_id": "6408af0fa425610778001356e",
          "user": "6403733ce298da29b18ca8ff",
          "title": "My Title 4",
          "description": "Please WakeUp Early",
          "tag": "personal",
          "date": "2023-03-08T15:51:43.424Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(notesInitial)

    // Add A note
      const addNote = (title, description, tag)=>{
        // TODO API CALL
        console.log("Adding a new Note")
        const note = {
            "_id": "6408af0fa425610778001356e",
          "user": "6403733ce298da29b18ca8ff",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-03-08T15:51:43.424Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }
      // Delete A Note
      const deleteNote = (id)=>{

      }
      
      // Edit A note
      const editNote = (id)=>{

      }

    return (                                          
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
        {props.children}
        </NoteContext.Provider>
    )
} 

export default NoteState;