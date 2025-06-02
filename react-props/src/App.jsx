import './App.css'

import Post from './components/post';


export default function App() {
  const posts = [
    {
      author: "Alice",
      content: "Hello, world! This is my first post.",
      created_at: "2025-06-01 10:00",
      edited: false
    },
    {
      author: "Bob",
      content: "React props make components reusable and dynamic.",
      created_at: "2025-06-01 11:15",
      edited: true
    },
    {
      author: "Charlie",
      content: "Anyone up for a coding challenge?",
      created_at: "2025-06-02 09:30",
      edited: false
    },
    {
      author: "Dana",
      content: "Just finished a great book on JavaScript!",
      created_at: "2025-06-02 12:45",
      edited: false
    },
    {
      author: "Eli",
      content: "Does anyone have tips for learning React hooks?",
      created_at: "2025-06-02 13:10",
      edited: true
    },
    {
      author: "Fay",
      content: "Check out my new portfolio site: fay.dev",
      created_at: "2025-06-02 14:00",
      edited: false
    },
    {
      author: "Grace",
      content: "Debugging is like being a detective in a crime movie.",
      created_at: "2025-06-02 15:20",
      edited: false
    },
    {
      author: "Hank",
      content: "What’s your favorite VS Code extension?",
      created_at: "2025-06-02 16:05",
      edited: false
    },
    {
      author: "Ivy",
      content: "Learning about state management today!",
      created_at: "2025-06-02 17:30",
      edited: true
    },
    {
      author: "Jules",
      content: "Can someone explain the useEffect hook?",
      created_at: "2025-06-02 18:00",
      edited: false
    },
    {
      author: "Kai",
      content: "Just deployed my first app to Netlify!",
      created_at: "2025-06-02 18:45",
      edited: false
    },
    {
      author: "Lena",
      content: "Props vs state: when to use which?",
      created_at: "2025-06-02 19:10",
      edited: false
    },
    {
      author: "Mona",
      content: "Pair programming is so much fun!",
      created_at: "2025-06-02 19:45",
      edited: true
    },
    {
      author: "Nate",
      content: "What’s new in React 19?",
      created_at: "2025-06-02 20:15",
      edited: false
    },
    {
      author: "Omar",
      content: "How do you manage large component trees?",
      created_at: "2025-06-02 21:00",
      edited: false
    }
  ];

  return (
    <main>
      <div id='feed'>
        {posts.map((p, i) => (
          <Post
            key={i}
            author={p.author}
            content={p.content}
            created_at={p.created_at}
            edited={p.edited}
          />
        ))}
      </div>
    </main>
  );
};