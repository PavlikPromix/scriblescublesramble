import styles from './Ownword.module.scss'
import Inputbar from '../Inputbar/Inputbar';
import Buttonchik from '../Buttonchik/Buttonchik';

function Ownword () {
    return (
        <div className={styles.owncontainer}>
            <div className={styles.panel}>
                <div className={styles.text}>Выберите слово, которое хотите загадать (5 букв)</div>
                <Inputbar>Test</Inputbar>
                <Buttonchik>Продолжить</Buttonchik>
            </div>
        </div>
    );
}

export default Ownword;