import { h } from 'preact';
import Truck from '../../assets/Truck.js';
import style from './style';
import Fade from 'react-reveal/Fade';

const Header = () => (
	<div class={style.header}>
		<nav style="justify-content:flex-start;" class="navbar navbar-light">
			<p>Speed Pros</p>
			<Fade right big duration={900} ><div><Truck /></div></Fade>
		</nav>
	</div>
);

export default Header;
