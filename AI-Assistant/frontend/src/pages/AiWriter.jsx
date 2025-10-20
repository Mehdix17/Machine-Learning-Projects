import React, { useState } from "react";
import Navbar from "../components/common/Navbar";

function AIWriter() {
  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    // Dummy generation logic (replace with your backend/AI API later)
    setGeneratedText(`✨ AI Generated Response for: "${prompt}"`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
        <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-primary">
              ✍️ AI Writer
            </h2>
            <p className="text-gray-500">
              Enter a topic or prompt and let the AI generate content for you.
            </p>

            <form onSubmit={handleGenerate} className="mt-4 space-y-4">
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Type your prompt here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              ></textarea>
              <button type="submit" className="btn btn-primary w-full">
                Generate
              </button>
            </form>

            {generatedText && (
              <div className="mt-6">
                <h3 className="font-bold text-lg">Generated Content:</h3>
                <div className="p-4 mt-2 bg-base-200 rounded-lg">
                  {generatedText}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AIWriter;
