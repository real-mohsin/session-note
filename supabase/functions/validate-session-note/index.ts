import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req: Request) => {
  const note = await req.json();
  const { duration } = note;

  if (duration < 15 || duration > 120) {
    return new Response(
      JSON.stringify({
        valid: false,
        error: "Duration must be between 15–120 minutes",
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(JSON.stringify({ valid: true }), {
    headers: { "Content-Type": "application/json" },
  });
});
