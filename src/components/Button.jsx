import { PropTypes } from "prop-types"
const Button = ({styles,text,onClick,type}) => {

  return (
    
      <button type={type} onClick={onClick} className={`btn btn-main ${styles}`}>
          {text}
      </button>
  )
}

Button.propTypes={
  styles:PropTypes.string,
  text:PropTypes.string,
  type:PropTypes.string,
  onClick:PropTypes.func
}
export default Button