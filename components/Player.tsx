"use client";
import React from "react";
import ReactAudioPlayer from "react-audio-player";

function Player() {
  return (
    <div>
      <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />;
    </div>
  );
}

export default Player;
