'use client'
import React, { useState } from 'react';
import styles from '@/component/soalABCD.module.css'
import { BiSolidDislike } from "react-icons/bi";
import BackgroundAtas from './backgroundAtas';
import dynamic from 'next/dynamic'
import { useBearStore } from '@/zustand/store'
import TerimaKasih from './terimakasih';
import { FaArrowAltCircleLeft } from "react-icons/fa";
// import DNDnew from './dndNew';
const DNDnew = dynamic(() => import('@/component/dndNew'), { ssr: false })

function SoalABCD({ questions }) {
    // State for current question index, selected option, and score
    const setCurrentQuestion = useBearStore((state) => state.setCurrentQuestion)
    const currentQuestion = useBearStore((state) => state.currentQuestion)

    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);

    // Function to handle answer selection
    const handleAnswer = (event) => {
        setSelectedOption(event.target.value);
    };

    const [kondisi, setKondisi] = useState(null)
    // Function to handle "Next" button click

    const handleNext = () => {
        // Check if the selected option is correct
        if (selectedOption === questions[currentQuestion].answer) {
            // If correct, update the score
            return setKondisi(null) || setCurrentQuestion(currentQuestion + 1) || setSelectedOption('') || setScore(score + 1);
        }
        else return setKondisi(true)
        // Move to the next question and reset selected option
        // setCurrentQuestion(currentQuestion + 1);
        // setSelectedOption('');
    };

    const handleKembali = () => {
        setCurrentQuestion(currentQuestion - 1)
    }

    // Check if all questions have been answered
    const quizCompleted = currentQuestion === questions.length;

    if (currentQuestion == 5) {
        return (
            <div className={styles.containerdnd}>
                {/* <SoalDND /> */}
                <DNDnew />
            </div>
        )
    }


    return (
        <div className={styles.container}>
            <BackgroundAtas />
            {quizCompleted ? (
                // Show score if quiz is completed
                <TerimaKasih />
                // <SoalDND />
                // <div>
                //     <h2>Quiz Completed!</h2>
                //     <p>Your score: {score} out of {questions.length}</p>
                // </div>
            ) : (
                // Show current question and options
                <div className={styles.isi}>
                    <h2>{questions[currentQuestion].question}</h2>
                    <ul>
                        {questions[currentQuestion].options.map((option, index) => (
                            <li key={index} >
                                <label>
                                    <input
                                        type="radio"
                                        style={selectedOption === option ? { border: ' 2px solid var(--colordua)' } : {}}
                                        name="options"
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={handleAnswer}
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                    {kondisi && <div className={styles.salahhh}>Belum Tepat yaaa...&nbsp; <BiSolidDislike /></div>}
                    <div className={styles.bawah}>
                        {currentQuestion === 0 ? null :
                            <FaArrowAltCircleLeft className={styles.iconbawah} onClick={handleKembali} />
                        }
                        <button onClick={handleNext} disabled={!selectedOption}>Lanjutkan</button>
                    </div>
                    <div className={styles.icon}>😁</div>
                    <div className={styles.icon2}>😍</div>
                    <div className={styles.icon3}>😊</div>
                    <div className={styles.icon4}>😘</div>
                </div>
            )}
        </div>
    );
}

export default SoalABCD;