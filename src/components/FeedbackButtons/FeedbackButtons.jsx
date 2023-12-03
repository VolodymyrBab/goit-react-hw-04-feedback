import PropTypes from "prop-types";
import classNames from 'classnames/bind';
import css from '../FeedbackButtons/FeedbackButtons.module.css';

let cx = classNames.bind(css);

const Button = ({ children, onLeaveFeedback, type, extraClass, name }) => {
    return <button
      onClick={onLeaveFeedback}
      className={cx({ btn: true, [`${extraClass}`]: true })}
      type={type}
      name={name}
    >{children}
    </button>
  }
  
  export default Button;

  Button.propTypes = {
    children: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    type: PropTypes.string,
    extraClass: PropTypes.string,
    name: PropTypes.string.isRequired,
  }