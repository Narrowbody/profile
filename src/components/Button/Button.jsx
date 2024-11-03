import styles from './Button.module.css';

function Button() {
	function clickHandler() {
		const btn = document.querySelector('#btn');
		btn.console.log('You clicked me');
	}
	return (
		<div>
			<button className='btn' id='btn' onClick={() => clickHandler()}>
				Click Me
			</button>
		</div>
	);
}

export default Button;
