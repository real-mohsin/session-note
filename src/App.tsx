import { Container, Typography, Divider } from "@mui/material";
import { NoteForm } from "./components/NoteForm";
import  NotesList  from "./components/NotesList";
import { useSessionNotes } from "./hooks/useSessionNotes";

function App() {
  const { notes, addNote, deleteNote, loading, error } = useSessionNotes();

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Therapy Session Quick Notes
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <NoteForm onAdd={addNote} />
      <NotesList
        notes={notes}
        onDelete={deleteNote}
        // loading={loading}
        // error={error}
      />
    </Container>
  );
}

export default App;
