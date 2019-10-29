import './layout.css';

import styled from '@emotion/styled';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import tw from 'tailwind.macro';

import Header from './header/header';

const Content = styled.div(tw`px-32 py-8 font-sans`);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' },
					]}>
					<html lang="en" />
				</Helmet>
				<Header siteTitle={data.site.siteMetadata.title} />
				<Content>{children}</Content>
			</>
		)}
	/>
);

export default Layout;
