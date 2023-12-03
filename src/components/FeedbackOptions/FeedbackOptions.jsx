import React from "react";
import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';
import Button from '../FeedbackButtons/FeedbackButtons';





    const FeedbackOptions = ({ options, onLeaveFeedback }) => {
        return <ul className={css.btn_list}>
          {options.map((option) => <li key={option}>
            <Button
              onLeaveFeedback={onLeaveFeedback}
              type="button"
              name={option}
              extraClass={option}>
              {option}
            </Button>
          </li>
          )}
        </ul>
      }

      export default FeedbackOptions;


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}