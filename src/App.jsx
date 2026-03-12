import { useState, useEffect, useRef } from "react";
import Gallery from "./Gallery";
import "./App.css";
import tacLogo from "../public/images/tacn-letter-head-design-white-no-bg.png";

function App() {

  const [enterGallery, setEnterGallery] = useState(false);
  const audioRef = useRef(null);

  /* -------- AUTOPLAY AUDIO -------- */

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    // Start audio at 15 seconds
    audio.currentTime = 29;

    // Try autoplay
    const playPromise = audio.play();

    if (playPromise !== undefined) {

      playPromise.catch(() => {

        // fallback if browser blocks autoplay
        document.addEventListener(
          "click",
          () => {
            audio.play();
          },
          { once: true }
        );

      });

    }

  }, []);

  return (
    <>

      {/* AUDIO (kept outside landing/gallery so it keeps playing) */}

      <audio ref={audioRef} loop autoPlay>
        <source
          src="/audio/Jesu Oba Alade (Live) - EmmaOMG & The OhemGee Choir - Gospeljuice.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* LANDING PAGE */}

      {!enterGallery && (

        <div className="landing">

          <img
            src={tacLogo}
            alt="Church Logo"
            className="logo"
          />

          <h2 className="main-title">
            The Apostolic Church
          </h2>

          <h2 className="glorious-text">
            Glorious Women
          </h2>

          <p className="subtitle">
            Newark, New Jersey, US
          </p>

          <h2 className="welcome">
            You Are Welcome
          </h2>

          <button onClick={() => setEnterGallery(true)}>
            Enter Gallery
          </button>

        </div>

      )}

      {/* GALLERY */}

      {enterGallery && <Gallery />}

    </>
  );
}

export default App;