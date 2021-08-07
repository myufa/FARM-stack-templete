import React, { FC, useEffect, useState } from 'react'
import { useLayoutEffect } from 'react'
import styled from 'styled-components'
import { useCountStore, usePageStore } from '../../store'


const CounterContainer = styled.div`
    position: absolute;
    color: white;
    background: #394a52;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 16px 40px -5px rgba(0, 0, 0, 0.5);
    width: 120px;
    height: 120px;
    font-size: 3em;
    z-index: 20000;
`

const CountDisplay = styled.span`
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -10px;
    transform: translate3d(-50%, -50%, 0);
`

const OneUpButton = styled.button`
    margin: 10px;
    padding: 5px 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100px;
    border-radius: 5px;
    border: solid 2px white;
    outline: none;
    background: transparent;
    color: white;
    cursor: pointer;
`

export const Counter: FC = () => {
    const { count, inc, reset } = useCountStore()

    //useLayoutEffect(() => reset(), [])

    return (
        <CounterContainer>
            <CountDisplay>{count}</CountDisplay>
            <OneUpButton onClick={inc}>One Up</OneUpButton>
        </CounterContainer>
    )
}