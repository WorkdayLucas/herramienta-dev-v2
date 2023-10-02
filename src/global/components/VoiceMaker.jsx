import React, { useEffect, useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import StopIcon from "@mui/icons-material/Stop";

const VoiceMaker = ({ outVoice, VMButtonsClassName, voice }) => {
  const [utterance, setUtterance] = useState(null);

  const speakText = () => {
    const synth = window.speechSynthesis;
    if (utterance) {
      synth.cancel(); // Detener cualquier síntesis de voz en curso
    }
    const newUtterance = new SpeechSynthesisUtterance(outVoice);

    newUtterance.voice = voice || window.speechSynthesis.getVoices().filter((v)=>v.lang==="es-AR")[1]

    synth.speak(newUtterance);
    setUtterance(newUtterance); // Guardar la referencia al nuevo objeto utterance
  };

  const stopSpeak = () => {
    if (utterance) {
      window.speechSynthesis.cancel(); // Detener la síntesis de voz actual
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <span className={VMButtonsClassName} onClick={speakText}>
        <VolumeUpIcon />
      </span>
      <span className={VMButtonsClassName} onClick={stopSpeak}>
        <StopIcon />
      </span>
    </div>
  );
};
export default VoiceMaker;
