import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";

import {NewNote} from './NewNote'
import { useLocalStorage } from "./useLocalStorage";

export type Note = { // a new type that adds an id to the NoteData type, bcoz while creating a notedata we don't have an id
  id: string
} & NoteData

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}
export type RawNote = {
  id: string
}
export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}
export type Tag = {
  id: string
  label: string
}

function App() {
  const [ notes, setNotes ] = useLocalStorage<RawNote[]>("NOTES", []);
  const [ tags, setTags ] = useLocalStorage<Tag[]>("TAGS", [])
  return (
    <Container className="my-4" >
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">  {/* nested routes for custom id */}
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App
