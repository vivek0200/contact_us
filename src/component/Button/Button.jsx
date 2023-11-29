import styles from './Button.module.css'
const Button = (props) => {
  const {isOutline,icon,text}=props;
  return (
    <button className={isOutline ? styles.outline_btn : styles.primart_btn}>
      {icon}
      {text}
    </button>
  )
}

export default Button
