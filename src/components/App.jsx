import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Sections/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (evt) => {
    // console.log(evt.target);
    const { name } = evt.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round((this.state.good / total) * 100);
    return positivePercentage;

  };

render() {

  const { good, neutral, bad } = this.state;
  const total = this.countTotalFeedback();
  const positivePercentage = this.countPositiveFeedbackPercentage();
  
  return <div>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
            <Notification message="There is no feedback"/>
        )}
      </Section>
  </div>
  }
}
export default App;