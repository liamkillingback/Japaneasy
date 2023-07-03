import React, { useEffect, useState } from "react";
import { Selection, Card, TileCard } from "../components";
import axios from "axios";
import { Loader } from "@react-three/drei";
let example = [
  ["3216",
  "ぴょんと",
  "ぴょんと",
  "jump",
  "子供が水たまりを<b>ぴょんと</b>飛びこえたね。",
  "こども が みずたまり を <b>ぴょんと</b> とびこえた ね",
  "The child jumped over the puddle.",
  "ぴょんと",
  "子供[こども]が 水[みず]たまりを<b>ぴょんと</b> 飛[と]びこえたね。",
  "子供[こども]が 水[みず]たまりを<b>（　）</b> 飛[と]びこえたね。",
  ],
  [
    '3215',
    'よける',
    'よける',
    'avoid, evade',
    '彼は飛んできたボールを<b>よけた</b>の。',
    'かれ は とんで きた ぼーる を <b>よけた</b> の',
    'He dodged the ball that flew towards him.',
    'よける',
    '彼[かれ]は 飛[と]んできたボールを<b>よけた</b>の。',
    '彼[かれ]は 飛[と]んできたボールを<b>（　）</b>の。'
  ],
];

const Learning = () => {
    const [word, setWord] = useState(0);
    const [wordList, setWordList] = useState([])
    const [score, setScore] = useState(0);
    const [wrongWords, setWrongWords] = useState([]);
    const [learnedWords, setLearnedWords] = useState([]);
    const [loading, setLoading] = useState(true)
  const getWords = async () => {
    const response = await axios.get("http://localhost:8080/get/randomxWords")
    console.log(response);
    setWordList(response.data.records)
    setLoading(false)
  };
  useEffect(() => {
    getWords();
  }, [])
  return (
    <div className="w-full h-full items-center justify-center flex absolute top-0 left-0">
      <div className="w-[90%] sm:h-[85%] h-[78%] sm:mt-24 rounded-xl mb-10 mt-24 items-center flex justify-center bg-[rgba(13,18,29,0.96)]">
      {loading ? <Loader /> : <Card props={wordList[word]} word={word} setWord={setWord}/>}
      
      </div>
    </div>
  );
};

export default Learning;
