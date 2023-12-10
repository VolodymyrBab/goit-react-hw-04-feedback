import React, {useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Sections/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
 


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const options = ['good', 'neutral', 'bad'];
  
  
  console.log('good>>', good )

  const onLeaveFeedback = (e) => {
    switch (e.target.name) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const total = () => good + neutral + bad;
  const positivePercentage = () =>  Math.round((good / (good + neutral + bad)) * 100);




  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={positivePercentage()}
          />
        ) : (
            <Notification message="There is no feedback"/>
        )}
      </Section>
  </div>
  )
}

export default App





// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };


// countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };
//   countPositiveFeedbackPercentage() {
//     const total = this.countTotalFeedback();
//     const positivePercentage = Math.round((this.state.good / total) * 100);
//     return positivePercentage;

//   };

// render() {

//   const { good, neutral, bad } = this.state;
//   const total = this.countTotalFeedback();
//   const positivePercentage = this.countPositiveFeedbackPercentage();
  
//   return <div>
//       <Section title="Please leave feedback">
//         <FeedbackOptions 
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.onLeaveFeedback}
//         />
//       </Section>
//       <Section title="Statistics">
//         {total ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         ) : (
//             <Notification message="There is no feedback"/>
//         )}
//       </Section>
//   </div>
//   }
// }
// export default App;