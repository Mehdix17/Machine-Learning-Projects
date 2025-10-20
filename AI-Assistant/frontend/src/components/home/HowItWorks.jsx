import React from "react";

function HowItWorks() {
  return (
    <div className="py-16 bg-base-200 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="font-semibold text-lg mb-2">1. Enter Your Text</h3>
          <p>Paste or write your notes directly in the editor.</p>
        </div>
        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="font-semibold text-lg mb-2">2. Choose Action</h3>
          <p>Summarize, generate, or organize with AI in seconds.</p>
        </div>
        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="font-semibold text-lg mb-2">3. Get Results</h3>
          <p>Download or copy your improved notes instantly.</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
