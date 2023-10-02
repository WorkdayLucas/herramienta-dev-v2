import React, { useEffect, useState } from 'react'
import VoiceMaker from '../../global/components/VoiceMaker'

const Voces = () => {

  const [voces, setVoces] = useState([])
  const [voiceOut, setVoiceOut] = useState("")

useEffect(()=>{
    setVoces(window.speechSynthesis.getVoices())
},[])
  return (
    <div className="vista" style={{}}>
        <textarea value={voiceOut} onChange={(e)=>{setVoiceOut(e.target.value)}}/>
       {voces.map(voz=>
       <div style={{
        display:"flex"
       }}>
        <label style={{width:"200px", textAlign:"left"}}>{`${voz.name.split(" ")[1]} - ${voz.name.split(" ")[voz.name.split(" ").length-2]}`.replaceAll("(", "")}</label>
         <VoiceMaker outVoice={voiceOut} voice={voz}/>
       </div>
       )}

    </div>
  )
}

export default Voces