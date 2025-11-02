import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export interface SessionNote {
  id?: string;
  client_name: string;
  session_date: string;
  quick_notes: string;
  duration: number;
}

export const useSessionNotes = () => {
  const [notes, setNotes] = useState<SessionNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotes = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("session_notes")
      .select("*")
      .order("session_date", { ascending: false });
    if (error) setError(error.message);
    else setNotes(data as SessionNote[]);
    setLoading(false);
  };

  const addNote = async (note: SessionNote) => {
    // 🔹 Validate via Supabase Edge Function
    const { data: validation } = await supabase.functions.invoke("validate-session-note", {
      body: note,
    });
    if (!validation?.valid) {
      alert(validation?.error || "Invalid note");
      return;
    }

    const { error } = await supabase.from("session_notes").insert(note);
    if (error) setError(error.message);
    else await fetchNotes();
  };

  const deleteNote = async (id: string) => {
    if (!confirm("Delete this note?")) return;
    const { error } = await supabase.from("session_notes").delete().eq("id", id);
    if (error) setError(error.message);
    else setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return { notes, addNote, deleteNote, loading, error };
};

export default useSessionNotes;