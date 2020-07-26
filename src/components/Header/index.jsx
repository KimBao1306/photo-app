import React from 'react';
import {NavLink} from 'react-router-dom';
import {Col, Container, Row} from 'reactstrap';
import './Header.scss';

Header.propTypes = {};

function Header(props) {
	return (
		<header className="header">
			<Container>
				<Row className="justify-content-between">
					<Col xs="auto">
						<NavLink exact className="header__link header__title" to="/">
							Kim Bảo
						</NavLink>
					</Col>

					<Col xs="auto">
						<NavLink
							exact
							className="header__link"
							to="/photos"
							activeClassName="header__link--active"
						>
							Redux Project
						</NavLink>
					</Col>
				</Row>
			</Container>
		</header>
	);
}

export default Header;
