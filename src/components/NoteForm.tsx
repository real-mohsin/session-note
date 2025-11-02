import { useState } from "react";
import { TextField, Button, Box, Stack } from "@mui/material";
import type { SessionNote } from "../hooks/useSessionNotes";

interface NoteFormProps {
  onAdd: (note: SessionNote) => void;
}

export const NoteForm = ({ onAdd }: NoteFormProps) => {
  const [form, setForm] = useState<SessionNote>({
    client_name: "",
    session_date: "",
    quick_notes: "",
    duration: 30,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.client_name || !form.session_date)
      return alert("Client name and session date are required");
    onAdd(form);
    setForm({ client_name: "", session_date: "", quick_notes: "", duration: 30 });
  };

  return (
    <Box mb={4}>
      <Stack spacing={2}>
        <TextField
          label="Client Name"
          name="client_name"
          value={form.client_name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Session Date"
          name="session_date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={form.session_date}
          onChange={handleChange}
          required
        />
        <TextField
          label="Quick Notes"
          name="quick_notes"
          multiline
          rows={3}
          inputProps={{ maxLength: 500 }}
          value={form.quick_notes}
          onChange={handleChange}
        />
        <TextField
          label="Duration (minutes)"
          name="duration"
          type="number"
          value={form.duration}
          onChange={handleChange}
          inputProps={{ min: 15, max: 120 }}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Add Note
        </Button>
      </Stack>
    </Box>
  );
};
