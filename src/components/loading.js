import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.View`
  align-items: center;
  background-color: #00000099;
  bottom: 0;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

const ActivityIndicator = styled.ActivityIndicator`
  background-color: white;
  border-radius: 16px;
  padding: 16px;
`

export default function Loading() {
  const loading = useSelector(state => state.loading)

  if (!loading) {
    return null
  }

  return (
    <Wrapper>
      <ActivityIndicator animating={true} size="large" color="#000000" />
    </Wrapper>
  )
}
