import React from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';

const Filter = () => {
  return (
    <FilterContainer>
        <FilterBox direction="row" spacing={2}>
          <Button color="error" >All</Button>
          <Button color="error">전자제품</Button>
          <Button color="error">생활용품</Button>
          <Button color="error">운동</Button>
          <Button color="error">기타</Button>
        </FilterBox>
    </FilterContainer>
  )
}

export default Filter;

const FilterContainer = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FilterBox = styled.div`
  padding: 1rem;
  Button {
    margin: 0 20px;
    padding: 0.5rem;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Cafe24Ohsquareair';
  }
`