import { useState } from "react";
import Header from "./Header";
import NowPlaying from "./NowPlaying";
import Playlist from "./Playlist";

export default function App() {
  const [showProgressBar, setShowProgressBar] = useState(true);

  const handleShowMusic = () => {
    setShowProgressBar(!showProgressBar);
  };

  return (
    <>
      <Header handleShowMusic={handleShowMusic} title="Tocando Agora" />
      <Playlist showPlaylist={!showProgressBar} />
      <NowPlaying showProgressBar={showProgressBar} />
    </>
  );
}
