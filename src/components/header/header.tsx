import React from 'react'

import { Container, StyledLink, Title } from './header.css'

interface HeaderProps {
	siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
	<Container>
		<StyledLink to="/">
			<Title>{siteTitle}</Title>
		</StyledLink>
	</Container>
)

export default Header
