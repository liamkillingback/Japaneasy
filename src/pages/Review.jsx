import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/LoaderSpinner";
import { Results } from "../components";
import { Card, HiriganaToEnglishCard } from "../components";
import axios from "axios";

const Review = ({ props }) => {
  const [word, setWord] = useState(0);
  const [wordList, setWordList] = useState([]);
  const [score, setScore] = useState(0);
  const [wrongWords, setWrongWords] = useState([]);
  const [learnedWords, setLearnedWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [isHard, setIsHard] = useState(false);
  const [listLength, setListLength] = useState(4);
  let hardWords = useSelector((state) => state.user.hardWords);
  let knownWords = useSelector((state) => state.user.learnedWords);
  useEffect(() => {
    if (props === "hard") {
      console.log(props);
      setIsHard(true);
    }
    if (isHard) {
      setWordList(hardWords);
      setListLength(hardWords.length);
    } else {
      setWordList(knownWords);
      setListLength(knownWords.length);
    }

    setLoading(false);
  }, [isHard]);
  useEffect(() => {
    if (listLength > 5) {
      let fiveWords = wordList.slice(0, 5);
      console.log(fiveWords);
      setWordList(fiveWords);
      setListLength(5);
      console.log(listLength);
    }
  }, [wordList]);

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

  const finishTest = async () => {
    // try {
    //   if (isHard) {

    //     let response = await axios.post(
    //       "http://localhost:8080/auth/update_words",
    //       {
    //         learnedWords: learnedWords,
    //         wrongWords: wrongWords,
    //         score: score,
    //         username: user.username,
    //       }
    //     );
    //     console.log(response);
    //     dispatch(refreshUser({ user: response.data.user }));
    //   }
    // } catch (error) {
    //   alert(error);
    // }
    setIsTestFinished(true);
  };

  return (
    <div className="w-full h-full items-center justify-center flex absolute top-0 left-0">
      <div className="w-[90%] sm:h-[85%] h-[78%] sm:mt-24 rounded-xl mb-10 mt-24 items-center justify-center bg-[rgba(13,18,29,0.96)]">
        <div className="branches w-full h-full">
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
              listLength={listLength}
              props={wordList[word]}
              word={word}
              setWord={setWord}
              startTest={startTest}
            />
          ) : (
            <HiriganaToEnglishCard
              listLength={listLength}
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
    </div>
  );
};

export default Review;
