import React, { useState } from 'react';
import { shuffledData } from './list';

const MainCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Aktueller Index der Frage
    const [isCorrect, setIsCorrect] = useState(null); // Zustand, ob die Antwort korrekt ist
    const [hasAnswered, setHasAnswered] = useState(false); // Zustand, ob eine Antwort ausgewählt wurde

    const currentQuestion = shuffledData[currentIndex]; // Aktuelle Frage

    // Funktion, die prüft, ob die Antwort korrekt ist
    const handleAnswerClick = (selectedAnswerIndex) => {
        if (selectedAnswerIndex === currentQuestion.correctAnswer) {
            setIsCorrect(true); // Antwort ist korrekt
        } else {
            setIsCorrect(false); // Antwort ist falsch
        }
        setHasAnswered(true); // Antwort wurde ausgewählt
    };

    // Funktion, um zur nächsten Frage zu wechseln
    const nextQuestion = () => {
        if (currentIndex + 1 < shuffledData.length) {
            setCurrentIndex((prevIndex) => prevIndex + 1); // Nächste Frage laden
        } else {
            // Quiz beenden, wenn alle Fragen beantwortet sind
            alert('Quiz beendet!');
            setCurrentIndex(0); // Quiz zurücksetzen oder anders behandeln
        }
        setIsCorrect(null); // Zustand zurücksetzen
        setHasAnswered(false); // Zustand zurücksetzen
    };

    // Antworten in ein Array packen, um sie einfacher zu handhaben
    const answers = [
        currentQuestion.answer1,
        currentQuestion.answer2,
        currentQuestion.answer3,
    ];

    return (
        <main>
            <div className='BackGround-Con'>
                <div className={`Card box-animations ${isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''}`}>
                    <div className='Ask-Con'>
                        <p>{currentQuestion.question}</p> {/* Aktuelle Frage anzeigen */}
                    </div>
                    <hr className='Line' />
                    <div className='Option-Con'>
                        {/* Antwort-Buttons */}
                        {answers.map((answer, index) => (
                            <button 
                                key={index}
                                className='button-24'
                                onClick={() => handleAnswerClick(index)} // Index der Antwort übergeben
                                disabled={hasAnswered} // Button deaktivieren, nachdem eine Antwort ausgewählt wurde
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Feedback und "Nächste Frage"-Button anzeigen, wenn eine Antwort ausgewählt wurde */}
                {hasAnswered && (
                        <div className="Output-Con">
                            <p className='Output'>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
                            <button className='button-24' onClick={nextQuestion}>
                            Next question
                            </button>
                        </div>
                    )}
            </div>
        </main>
    );
};

export default MainCard;