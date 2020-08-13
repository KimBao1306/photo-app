import React from 'react';
import {NavLink} from 'react-router-dom';
import {Col, Container, Row, Nav, NavItem} from 'reactstrap';
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
						<Nav>
							<NavItem>
								<NavLink
									exact
									className="header__link"
									to="/auth/login"
									activeClassName="header__link--active"
								>
									Login
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									exact
									className="header__link"
									to="/photos"
									activeClassName="header__link--active"
								>
									Redux Project
								</NavLink>
							</NavItem>
						</Nav>
					</Col>
				</Row>
			</Container>
		</header>
	);
}

export default Header;
