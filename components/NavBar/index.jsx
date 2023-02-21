import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../../styles/NavBar.module.css"


export default function NavBar() {
       const r = useRouter();
       return(
              <>
                     <div className={styles.base}>
                            <div className = {styles.left_side}>

                            </div>
                            <div className = {styles.middle}>
                                   <Link href={"/"} legacyBehavior>
                                          <a className={r.pathname === "/" ? styles.active : styles.link}>Planets</a>
                                   </Link>
                                   <Link href={"/stars"} legacyBehavior>
                                          <a className={r.pathname === "/stars" ? styles.active : styles.link}>Stars</a>
                                   </Link>
                            </div>
                            <div className = {styles.right_side}>
                            </div>
                     </div>
              </>
       )      
}