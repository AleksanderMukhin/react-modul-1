import PropTypes from 'prop-types';

export const Head = ({ clas, id, data, children }) => {
  console.log(children)
  return (<>
    {children}
    <p id={id} className={clas}>
    I am Head
    </p>
  </>)
}
Head.propTypes = {
  clas:PropTypes.string.isRequired,
  id:PropTypes.string.isRequired,
  data:PropTypes.arrayOf(PropTypes.string), 
  children:PropTypes.array,
}

// isRequired указать на то что это значение должно быть обязательным
// data:PropTypes.arrayOf(PropTypes.string), указывает на то что должен быть массив в котором придут строки но не указываем isRequired чтобы он не ругался если придёт другое значение
// children:PropTypes.element, патамушта Children является  массивом