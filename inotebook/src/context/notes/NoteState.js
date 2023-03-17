import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=> {
    const host = "http://localhost:5000"
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial)

    // Get All Notes
    const getNotes = async ()=>{
      // API CALL

      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxMWY2YWJlODc4MjQyYmY0NzUzYjMwIn0sImlhdCI6MTY3ODg5ODg1OX0.UENpMrJeQtB59-_gPogtHQKwUoDUU4ssSrRP07cuXpo"
        }
      });
      const json = await response.json();
      // console.log(json) 
      setNotes(json)
    }

    // Add A note
      const addNote = async (title, description, tag)=>{
        // TODO API CALL

        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxMWY2YWJlODc4MjQyYmY0NzUzYjMwIn0sImlhdCI6MTY3ODg5ODg1OX0.UENpMrJeQtB59-_gPogtHQKwUoDUU4ssSrRP07cuXpo"
          },
          body: JSON.stringify({title, description, tag}),
        });
        const note = await response.json();

        setNotes(notes.concat(note))
      }
      // Delete A Note
      const deleteNote = async (id)=>{
        // TODO API CALL

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxMWY2YWJlODc4MjQyYmY0NzUzYjMwIn0sImlhdCI6MTY3ODg5ODg1OX0.UENpMrJeQtB59-_gPogtHQKwUoDUU4ssSrRP07cuXpo"
          },
        });
        const json = await response.json(); 

        const newNote = notes.filter((note)=>{return note._id!==id})
        setNotes(newNote)
      }
      
      // Edit A note
      const editNote = async (id, title, description, tag)=>{
        // API CALL

        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxMWY2YWJlODc4MjQyYmY0NzUzYjMwIn0sImlhdCI6MTY3ODg5ODg1OX0.UENpMrJeQtB59-_gPogtHQKwUoDUU4ssSrRP07cuXpo"
          },
          body: JSON.stringify({title, description, tag}), 
        });
        const json = await response.json();
        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id === id)
          {
            element.title = title;
            element.description = description;
            element.tag = tag;
          }
        }
      }

    return (                                          
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
        {props.children}
        </NoteContext.Provider>
    )
} 

export default NoteState;