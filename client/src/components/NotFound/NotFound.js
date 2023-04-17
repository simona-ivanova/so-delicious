import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

export const NotFound = () => {
return (
<div className={styles["main"]}>
    	<div className={styles["not-found"]}>
        		<h1>Error 404</h1>
                <p>Страницата не е намерена.</p>
                <p>Върни се към <Link to="/">Началната страница</Link></p>
               
    	</div>
</div>
)
}