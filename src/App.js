import React, { useState } from "react";
import "./App.css";

// Lista e pyetjeve
const questions = [
  { question: "Zgjidhni alternativën e saktë.", options: ["Zologjik", "Zoologjik"], correct: 1 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Kooperativë", "Koperativë"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Bashkëudhëtar", "Bashkudhëtar"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Proces", "Proçes"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Ciklist", "Çiklist"], correct: 1 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Mencë", "Mensë"], correct: 1 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Rehabilitoj", "Reabilitoj"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Mësokam", "Mësuakam"], correct: 1 },
  { question: "Zgjidhni alternativën e saktë.", options: ["I afrueshëm", "I afrushëm"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Mirë se erdhe!", "Mirëseerdhe!"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Mirupafshim!", "Mirë u pafshim!"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Ish ministër", "Ish-minstër"], correct: 1 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Shthur", "Çthur"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Çnjerëzor", "Shnjerëzor"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Lojëtar", "Lojtar"], correct: 1 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Udhëtar", "Udhtar"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Tregëtar", "Tregtar"], correct: 1 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Shoqes time", "Shoqes sime"], correct: 1 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Tri vajza", "Tre vajza"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Rishtas", "Rishtaz"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Këndez", "Këndes"], correct: 1 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Haptasi", "Haptazi"], correct: 1 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Ti qe larë", "Ti qeshe larë"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Çprish", "Shprish"], correct: 1 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Zhdëmtoj", "Çdëmtoj"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["LLogjikë", "Logjikë"], correct: 1 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Llotari", "Lotari"], correct: 1 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Uruguai", "Uruguaj"], correct: 0 },
  { question: "Zgjidhni alternativën e saktë.", options: ["Rio-de-Zhanerjo", "Rio-de-Zhanerio"], correct: 0 },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerClick = (index) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setQuizEnded(true);
      }
    }, 1000);
  };

  const renderResultMessage = () => {
    if (score >= 20) {
      return (
        <div className="clap-animation">
          <p> Duartrokitje!👏 Pikët tuaja janë: {score}</p>
        </div>
      );
    } else {
      return (
        <div className="motivational-msg">
          <p>Vazhdoni të praktikoheni. Pikët tuaja janë: {score}</p>
        </div>
      );
    }
  };

  return (
    <div className="quiz-container">
      {quizStarted && !quizEnded ? (
        <>
          <p className="question">{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedOption !== null
                    ? index === questions[currentQuestion].correct
                      ? "correct"
                      : index === selectedOption
                      ? "wrong"
                      : ""
                    : ""
                }`}
                onClick={() => handleAnswerClick(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : quizEnded ? (
        <div className="result">
          <p>Kuizi përfundoi!</p>
          <p>{renderResultMessage()}</p>
        </div>
      ) : (
        <div className="home-container">
          <h1>Fuqia e fjalës</h1>
          <p>Bërë nga: Shkolla “Mësonjëtorja e Parë Shqipe”</p>
          <p>Mirësevini në kuizin e drejtshkrimit! Përdorni njohuritë tuaja për të kaluar testin.</p>
          <button className="start-btn" onClick={handleStartQuiz}>
            Vazhdo
          </button>
        </div>
      )}
    </div>
  );
}
