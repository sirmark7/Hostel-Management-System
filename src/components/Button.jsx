import { PropTypes } from "prop-types"
const Button = ({styles,text,onClick}) => {

  return (
    
      <button onClick={onClick} className={`btn btn-main ${styles}`}>
          {text}
      </button>
  )
}

Button.propTypes={
  styles:PropTypes.string,
  text:PropTypes.string,
  onClick:PropTypes.function
}
export default Button