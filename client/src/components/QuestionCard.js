import React, { Component } from "react";
import { Card } from "semantic-ui-react";

export default class QuestionCard extends Component {
  constructor() {
    super();
    this.state = {
      correct: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(index) {
    if (this.props.correctAnswer === this.props.answers[index]) {
      this.setState({
        correct: true
      });
    }
  }

  render() {
    return (
      <div className="question-card">
        <h3>{this.props.question}</h3>
        <Card.Group>
          {this.props.answers.map((answer, index) => {
            return (
              <Card
                fluid
                color="blue"
                index={index}
                className="question-card-option"
                key={`answer:${index}`}
                header={answer}
                onClick={() => {
                  this.props.questionClickHandler();
                  this.clickHandler(index);
                }}
              />
            );
          })}
        </Card.Group>
      </div>
    );
  }
}
