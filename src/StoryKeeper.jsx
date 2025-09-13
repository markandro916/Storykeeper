import React, { useState } from "react";

function StoryKeeper() {
  const [story, setStory] = useState("");
  const [stories, setStories] = useState([]);

  const addStory = () => {
    if (story.trim() === "") return;
    setStories([...stories, story]);
    setStory("");
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <textarea
        value={story}
        onChange={(e) => setStory(e.target.value)}
        placeholder="Write your story..."
        rows="4"
        cols="40"
        style={{ display: "block", marginBottom: "0.5rem" }}
      />

      <button onClick={addStory}>Save Story</button>

      <h2>📝 Saved Stories</h2>
      <ul>
        {stories.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default StoryKeeper;
