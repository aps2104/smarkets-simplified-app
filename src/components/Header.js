import React from 'react';

import logo from '../logo.svg';
import './Header.css';

const Header = (props) => {
	return( 
			<div className = "Header">
                <a className='logo-link' href='/'>
				<img src={logo} className="" alt="logo" />
                </a>
			</div>
	)
}

export default React.memo(Header);