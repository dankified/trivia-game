//Implement this component with Menu from reactive ui.
import React, { Component } from "react";
import QuestionCard from "./QuestionCard";

export default class Question extends Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = function(index) {
    this.setState({
      selected: true
    });
  };

  render() {
    return (
      <QuestionCard
        question={this.props.question.question}
        correctAnswer={this.props.question.correctAnswer}
        answers={this.props.question.answers}
        questionClickHandler={this.handleClick}
      />
    );
  }
}
