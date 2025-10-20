import React, { useState } from "react";
import Navbar from "../components/common/Navbar";

function YouTubeTranscriber() {
  const [url, setUrl] = useState("");
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTranscript("");

    try {
      // Call your API here (replace with real endpoint)
      const response = await fetch("http://localhost:8000/api/transcribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      setTranscript(data.transcript || "No transcript found.");
    } catch (err) {
      console.error(err);
      setTranscript("❌ Error while fetching transcript.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="p-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🎥 YouTube Transcriber</h1>
        <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter YouTube video URL"
            className="input input-bordered flex-1"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Transcribing..." : "Transcribe"}
          </button>
        </form>

        {transcript && (
          <div className="p-4 bg-base-200 rounded-md">
            <h2 className="font-semibold mb-2">Transcript:</h2>
            <p className="whitespace-pre-wrap">{transcript}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default YouTubeTranscriber;
