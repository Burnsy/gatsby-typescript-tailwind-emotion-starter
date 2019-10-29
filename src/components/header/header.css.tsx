import styled from '@emotion/styled';
import { Link } from 'gatsby';
import tw from 'tailwind.macro';

export const Container = styled.div(tw`bg-red-500 px-32 py-8`);
export const Title = styled.h1(tw`text-grey-darkest m-0`);
export const StyledLink = styled(Link)(tw`no-underline text-inherit`);
