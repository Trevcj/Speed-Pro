import { h, Component } from 'preact';
import style from './style';
import Fade from 'react-reveal/Fade';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			phone: '555-555-5555',
			year: new Date().getFullYear()
		};
	}
	
	componentDidMount() {
		const damage = [
			'Rain Damage',
			'Broken Pipe',
			'Sewer  Backup',
			'Home Flooding'
		];

		let i = 0;

		function myLoop() {
			setTimeout(() => {
				document.getElementById('damChange').innerHTML = `<div class='${style.fadeInTop}'>${damage[i]}</div>`;
				i++;
				if (i < damage.length) {
					myLoop();
				}
			}, 1500);
		}
		myLoop();

	}

	render() {
		return (
			<div class={style.home}>
				<div class={`container-fluid ${style.mainTop}`}>
					<div class={`col ${style.topText}`}>
						<div>
							<div class="row">
								<div class="col">
									<h1 id="damChange" class={`display-2 ${style.mainText}`}><div class={style.fadeInTop}>Water Damage</div></h1>
									<p class={style.subText}>Whatever the problem we're here to help.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="container">
					
					<div class={`col ${style.contentCol}`}>
						<div
							style="align-items: center;justify-content: center;margin: 2rem auto;"
							class="row text-center"
						>
							<div class="col">
								<div>
									<a href="tel:+1-833-918-1279">
										<h1
											style="text-align: center;margin: 1rem auto;"
											class={style.pageHead}
										>
										(833) 918-1279
										</h1>
									</a>
									<h1
										style="text-align: center;margin: auto;"
										class={style.call}
									>
										For quick and professional service call now
									</h1>
								</div>
							</div>
						</div>
						<div
							style="align-items: center;justify-content: center;"
							class="row"
						>
							<div class="col-md-8">
								<p>
                  From excess rain damage to a broken pipe to sewer backups,
                  home flooding can cause disaster in your home, and wreak
                  havoc on your belongings. While there is never an ideal
                  time for these emergencies, reaction time is critical. To
                  help minimize damage, water removal must happen quickly.
                  When flooding occurs, you need an expert to help - and you
                  need it fast. Speed Pros trained and certified technicians
                  are on call 24/7. We arrive on the scene with state of the
                  art equipment designed to quickly remove the water from
                  your home.
								</p>
							</div>
							<div class="col-md-4">
								<Fade right>
									<div>
										<img
											class={style.infoPic}
											alt="house"
											src="https://res.cloudinary.com/trevcj/image/upload/c_scale,w_423/v1567647638/architecture-beautiful-exterior-106399_pxuggq.jpg"
										/>
									</div>
								</Fade>
							</div>
						</div>
						<div style="align-items: center;justify-content: center;" class="row">
							<div class="col-md-4 order-last order-md-0">
								<Fade left>
									<div>
										<img
											class={style.infoPic}
											alt="bath"
											src="https://res.cloudinary.com/trevcj/image/upload/c_scale,w_445/v1567647735/apartment-bathroom-cabinet-2775319_pfbe11.jpg"
										/>
									</div>
								</Fade>
							</div>
							<div class="col-md-8">
								<h2 class={style.pageHead}>Why Us?</h2>
								<p>
                  Our IICRC certified experts are trained to deal with water
                  removal emergencies, and will contact you within 15
                  minutes of your call. We will advise you on how to minimize
                  the water damage until our crew arrives, which is always 2
                  hours or less.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div style="color: #FFFFFF;font-size: 1.7rem;padding: 1.2rem;background-color: #1E4FA4;">
					<h5 style="text-align: center;margin: auto;">Restorioai &copy; {this.state.year}</h5>
				</div>
			</div>
		);
	}
}
