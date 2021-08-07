import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
    position: relative;
    height: 70px;
    top: 0;
    left: 0;
    right: 0;
    background-color: aliceblue;
`

interface NavLinkProps {
    bold?: boolean
    to: '/' | '/counter/'
}
const NavLinkContainer = styled.div<NavLinkProps>`
    a { 
        text-decoration: 'none';
        font-size: medium;
        font-weight: ${props => props.bold ? 900 : 500};
    }
`

const NavLink: FC<NavLinkProps> = ({children, bold, to}) => (
    <NavLinkContainer bold={bold} to={to}>
        <Link to={to}>
            {children}
        </Link>
    </NavLinkContainer>
)

interface NavProps {
    page: '/' | '/counter/'
}
export const Nav: FC<NavProps> = ({page}) => {
    return (
        <NavContainer>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/counter/'>
                Counter
            </NavLink>
        </NavContainer>
    )
}