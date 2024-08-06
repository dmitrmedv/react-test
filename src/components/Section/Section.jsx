import css from './Section.module.css';

export const Section = ({ color, children }) => {
  return (
    <section className={`${color ? css.gray : css.white} ${css.section}`}>
      {children}
    </section>
  );
};
