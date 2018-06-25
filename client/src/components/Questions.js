import React from 'react';
import Question from './Question.js';

export default function Questions(props) {
  return (
    props.questions.map((question, index) => {
      return <Question question={question} key={`q${index}`}/>
    })
  )
}