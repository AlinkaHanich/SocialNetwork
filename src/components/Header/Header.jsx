import React from 'react';
import s from './Header.module.scss';

const Header = () => {
	return (
		<header className={s.header}>
			<div>
				<img
					className={s.logo}
					src="https://images.squarespace-cdn.com/content/v1/5a623152cd39c3949ca98ad0/1555927839011-28P7V47ESC8TIAZCP4SI/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmrMDYraMJMCQwFxTSOIP7LpSBEQpA-g5k6VTjWbSuadHJq0dp98hg5AZvIaPb3DoM/comScore_Logo_Mark_2017_1000px_RGB.png"
					alt="logo"
				/>
			</div>
			<div>
				<a href="#s" className={s.nav__link}>
					Home
				</a>
			</div>
			<div>
				<a href="#s" className={s.nav__link}>
					News
				</a>
			</div>
			<div>
				<a href="#s" className={s.nav__link}>
					Masseges
				</a>
			</div>
		</header>
	);
};

export default Header;
