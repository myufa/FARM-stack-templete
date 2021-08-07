import React, { FC, useEffect, useState } from 'react'
import { useLayoutEffect } from 'react'
import styled from 'styled-components'
import { Counter } from '../../components/Counter'
import { useCountStore, usePageStore } from '../../store'


export const CounterPage: FC = () => {
    const { count, inc, reset } = useCountStore()
    const { setPage } = usePageStore()

    useEffect(() => {
        setPage('/counter/')
        return () => reset()
    }, [])

    //useLayoutEffect(, [])

    return (
        <Counter/>
    )
}