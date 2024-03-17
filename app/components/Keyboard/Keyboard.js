import './Keyboard.css'
import Letter from './Letters/Letter';
function Keyboard({}) {
	return (
		<div className="keyboard">
            <div className="keyboard-row row1"><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter></div>
            <div className="keyboard-row row2"><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter></div>
            <div className="keyboard-row row3"><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter><Letter>A</Letter></div>
        </div>
	);
}
export default Keyboard;