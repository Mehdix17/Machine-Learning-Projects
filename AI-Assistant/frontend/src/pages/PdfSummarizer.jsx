import React, { useState } from "react";
import Navbar from "../components/common/Navbar";

function PDFSummarizer() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setSummary("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Call your API here (replace with real endpoint)
      const response = await fetch("http://localhost:8000/api/summarize", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setSummary(data.summary || "No summary generated.");
    } catch (err) {
      console.error(err);
      setSummary("❌ Error while summarizing PDF.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="p-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">📄 PDF Summarizer</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
          <input
            type="file"
            accept="application/pdf"
            className="file-input file-input-bordered"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Summarizing..." : "Summarize PDF"}
          </button>
        </form>

        {summary && (
          <div className="p-4 bg-base-200 rounded-md">
            <h2 className="font-semibold mb-2">Summary:</h2>
            <p className="whitespace-pre-wrap">{summary}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default PDFSummarizer;
