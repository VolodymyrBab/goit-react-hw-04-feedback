import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from '../Statistics/Statistics.module.css';



const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return <div>
      <ul className={css.list}>
        <li className={css.item}>
          Good
          <span className={css.points}>
          </span>
          <span className={css.value}>{good}</span>
        </li>
        <li className={css.item}>
          Neutral
          <span className={css.points}>
          </span>
          <span className={css.value}>{neutral}</span>
        </li>
        <li className={css.item}>
          Bad
          <span className={css.points}>  
          </span>
          <span className={css.value}>{bad}</span>
        </li>
      </ul>
      <div className={css.line}></div>
      <p className={classNames(css.item, css.total)}>
        Total
        <span className={css.points}>
        </span>
        <span className={css.value}>{total}</span>
      </p>
      <p className={classNames(css.item, css.positive)}>
        Positive feedback
        <span className={classNames(css.value, css.presenters)}>
          {positivePercentage}%
        </span>
      </p>
    </div>
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
