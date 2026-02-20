import { useState } from "react";
import Gallery from "./Gallery";
import "./App.css";

function App() {
  const [enterGallery, setEnterGallery] = useState(false);

  if (enterGallery) {
    return <Gallery />;
  }

  return (
    <div className="landing">
      <h1>You Are Welcome</h1>
      <button onClick={() => setEnterGallery(true)}>
        Enter Gallery
      </button>
    </div>
  );
}

export default App;