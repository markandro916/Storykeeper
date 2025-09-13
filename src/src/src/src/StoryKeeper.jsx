import { useState } from "react"

export default function StoryKeeper() {
  const [stories, setStories] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const addStory = () => {
    if (!title.trim() || !content.trim()) return
    const newStory = {
      id: Date.now(),
      title,
      content,
    }
    setStories([newStory, ...stories])
    setTitle("")
    setContent("")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">📖 StoryKeeper</h1>

      <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Story title"
          className="w-full p-2 border rounded mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Story details..."
          className="w-full p-2 border rounded mb-2"
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          onClick={addStory}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Story
        </button>
      </div>

      <div className="mt-6 w-full max-w-md">
        {stories.length === 0 ? (
          <p className="text-gray-600">No stories yet. Start writing!</p>
        ) : (
          stories.map((story) => (
            <div
              key={story.id}
              className="bg-white p-4 rounded-xl shadow mb-4"
            >
              <h2 className="font-bold text-lg">{story.title}</h2>
              <p className="text-gray-700">{story.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
