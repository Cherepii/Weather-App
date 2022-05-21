import { FC } from "react"
import styles from "./Header.module.scss"

const Header: FC<{title: string}> = ({title}) => {
  return (
    <div className={styles.heading}>{title}</div>
  )
}
export default Header