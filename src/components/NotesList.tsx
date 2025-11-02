import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid
} from "@mui/material";
import type { SessionNote } from "../hooks/useSessionNotes";

interface NotesListProps {
  notes: SessionNote[];
  onDelete: (id: string) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, onDelete }) => {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const handleDeleteClick = (id: string) => setSelectedId(id);
  const handleConfirmDelete = () => {
    if (selectedId) {
      onDelete(selectedId);
      setSelectedId(null);
    }
  };
  const handleClose = () => setSelectedId(null);

  if (notes.length === 0)
    return (
      <Typography sx={{ mt: 2, textAlign: "center" }}>
        No notes found.
      </Typography>
    );

  return (
    <>
      <Grid container spacing={2}>
        {notes.map((note) => (
        //   <Grid key={note.id} xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">{note.client_name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {new Date(note.session_date).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {note.quick_notes.length > 100
                    ? `${note.quick_notes.slice(0, 100)}...`
                    : note.quick_notes}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Duration: {note.duration} min
                </Typography>
                <Button
                  color="error"
                  size="small"
                  sx={{ mt: 1 }}
                  onClick={() => handleDeleteClick(note.id!)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
        //   </Grid>
        ))}
      </Grid>

      {/* Confirmation Dialog */}
      <Dialog open={!!selectedId} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this note?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="error" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NotesList;

