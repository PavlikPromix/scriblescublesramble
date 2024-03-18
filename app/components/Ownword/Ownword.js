import styles from './Ownword.module.scss'
import Inputbar from '../Inputbar/Inputbar';

function Ownword () {
    return (
        <div className={styles.owncontainer}>
            <div className={styles.panel}>
                <div className={styles.text}>Выберите слово, которое хотите загадать (5 букв)</div>
                <Inputbar length={5}>Test</Inputbar>
            </div>
        </div>
    );
}

export default Ownword;