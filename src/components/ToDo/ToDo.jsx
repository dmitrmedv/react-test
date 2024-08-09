import css from './ToDo.module.css';

export const ToDo = ({ friend: { name, isOnline, id }, handleClick }) => {
  return (
    <li className={css.item} onClick={() => handleClick(id)}>
      <p className={css.name}>{name}</p>
      <span className={isOnline ? css.online : css.offline}></span>
    </li>
  );
};
