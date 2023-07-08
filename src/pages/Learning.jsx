import React, { useEffect, useState } from "react";
import { Selection, Card, HiriganaToEnglishCard, Results } from "../components";
import axios from "axios";

import Loader from "../components/LoaderSpinner";

const Learning = () => {
  const [word, setWord] = useState(0);
  const [wordList, setWordList] = useState([]);
  const [score, setScore] = useState(0);
  const [wrongWords, setWrongWords] = useState([]);
  const [learnedWords, setLearnedWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestFinished, setIsTestFinished] = useState(false);

  useEffect(() => {
    getWords();
  }, []);
  useEffect(() => {
    console.log(wrongWords);
  }, [wrongWords]);
  useEffect(() => {
    console.log(learnedWords);
  }, [learnedWords]);

  //Gets words from server
  const getWords = async () => {
      try {
        // const response = await axios.get("https://japanezy.onrender.com/get/randomxWords")
      const response = await axios.get(
        "http://localhost:8080/get/randomxWords"
      );
      setWordList(response.data.records);
      setLoading(false);
    } catch (error) { alert(error) }
  };

  //function to shuffle wordList
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const startTest = () => {
    let shuffled_words = wordList;
    shuffle(shuffled_words);
    setWordList(shuffled_words);
    setIsTestStarted(true);
  };
  const finishTest = () => {
    setIsTestFinished(true);
  };

  return (
    <div className="w-full h-full items-center justify-center flex absolute top-0 left-0">
      <div className="md:w-[80%] w-[95%] h-[74%] sm:mt-24 rounded-3xl mb-10 mt-10 items-center flex justify-center flex-col bg-[rgba(13,18,29,0.96)]">
        
        {isTestFinished ? (
          <Results
            score={score}
            learnedWords={learnedWords}
            wrongWords={wrongWords}
          />
        ) : loading ? (
          <Loader></Loader>
        ) : !isTestStarted ? (
          <Card
            props={wordList[word]}
            word={word}
            setWord={setWord}
            startTest={startTest}
          />
        ) : (
          <HiriganaToEnglishCard
            props={wordList[word]}
            word={word}
            setWord={setWord}
            finishTest={finishTest}
            setLearnedWords={setLearnedWords}
            learnedWords={learnedWords}
            setWrongWords={setWrongWords}
            wrongWords={wrongWords}
            setScore={setScore}
            score={score}
          />
        )}
      </div>
    </div>
  );
};

export default Learning;
