import React, { useState, useEffect } from "react";
import { Ramen } from "./canvas";
import axios from "axios";
import { Card, Selection } from "./index";

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

const Landing = () => {
  
  const [intro, setIntro] = useState(true);
  const [word, setWord] = useState(0);
  useEffect(() => {
    window.scrollTo(0,1)
  }, [])
  return (
    <div className="landing fixed w-screen items-center justify-center flex min-h-screen sm:pb-0 mb-20">
      <Ramen />
      <div
        className={`${
          intro && "hidden"
        } w-[90%] sm:h-[85%] h-[78%] sm:mt-24 rounded-xl mb-10 mt-12 flex flex-col items-center justify-center fixed bg-[rgba(13,18,29,0.96)]`}
      >
        {/* <Card props={example[word]} word={word} setWord={setWord} /> */}
        <Selection />
      </div>
      <div
        className={`${
          !intro && "hidden"
        } w-[90%] h-[75%] p-1 sm:mt-24 mt-28 rounded-xl flex flex-col items-center fixed text-[#FF851B] bg-[rgba(13,18,29,0.88)] overflow-y-scroll no-scrollbar sm:mb-0 mb-20`}
      >
        <h1 className="sm:text-[4rem] text-[1.5rem] rounded-full p-5 text-center">
          Welcome to Japaneasy!
        </h1>
        <h1 className="sm:text-[2.5rem] text-[1.3rem] flower text-white text-center float-left">
          Enhance your Japanese language skills by focusing on the most
          frequently utilized words in Japan. Japaneasy offers you an
          opportunity to learn these essential components, which constitute
          approximately 70% of everyday language usage. You can acquire
          vocabulary written in hiragana and practice incorporating it into
          sentences also written in hiragana. For more advanced learners, we
          provide the option to familiarize yourself with word and sentence
          representations as typically encountered in Japan, incorporating
          hiragana, kanji, and katakana.
        </h1>
        <button className="text-[2rem] text-black bg-[#5ce632] p-3 rounded-full m-10" onClick={() => setIntro(!intro)}>Get started!</button>
      </div>
    </div>
  );
};
export default Landing;
