import { PropTypes } from "prop-types"
const ButtonAdmin = ({styles,children,onClick,type}) => {

  return (
    
      <button type={type} onClick={onClick} className={`btn btn-main ${styles}`}>
          {children}
      </button>
  )
}

ButtonAdmin.propTypes={
  styles:PropTypes.string,
  children:PropTypes.node,
  type:PropTypes.string,
  onClick:PropTypes.func
  
}
export default ButtonAdmin