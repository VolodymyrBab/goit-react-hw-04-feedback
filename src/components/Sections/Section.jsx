import PropTypes from 'prop-types';
import css from '../Sections/Section.module.css';



const Section = ({title, children}) => {
  return (
    <section className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default Section;