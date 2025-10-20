import React from "react";

function Features() {
  const features = [
    {
      title: "Summarize Text",
      desc: "Condense any document or note instantly.",
    },
    {
      title: "Generate Ideas",
      desc: "Get AI-powered brainstorming suggestions.",
    },
    {
      title: "Organize Notes",
      desc: "Turn raw thoughts into structured outlines.",
    },
  ];

  return (
    <div className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="card bg-base-100 shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
