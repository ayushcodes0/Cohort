import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

    const Words = ["Ayush", "Utkarsh", "Yash", "Faizan", "Shreshth", "Anupam", "AKS"];
    const Total_lines = 1000;
    const All_words = [];
    for(let i = 1; i<=Total_lines; i++){
        let sentence = "";
        for(let j = 0; j<Words.length; j++){
            sentence += (Words[Math.floor(Math.random() * Words.length)]);
            sentence += " ";
        }
        All_words.push(sentence)
    }

const Assignment1 = () => {

    

    const [sentences, setsentences] = useState([All_words])
    const [filter, setfilter] = useState("")
    const fileredSentences = useMemo(()=>{
        return  sentences.filter(x=>x.includes(filter))
    },[sentences, filter]) 
    console.log("filtered sentences: ", fileredSentences)
  return (
    <div>
      <input type="text"  placeholder='Enter Text' onChange={(e)=>{
        setfilter(e.target.value)
        }}/>
      {fileredSentences.map(word=> <div>{word}</div> )}
    </div>
  )
}

export default Assignment1
