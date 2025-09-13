import React from "react";
import StoryKeeper from "./StoryKeeper";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>📖 StoryKeeper</h1>
      <p>Welcome! Add and keep your stories here.</p>
      <StoryKeeper />
    </div>
  );
}

export default App;
