import React, { useState } from 'react'
import { products } from '../../utils/constants/products';
import styled from 'styled-components';
import { Input } from '../UI/Input';
import { Button } from '../UI/Button';

const UseProudcts = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [amounts, setAmounts] = useState(0);
    const amountChangeHandler = (e) => {
      const value = e.target.value;
      if (value > 5) {
        setAmounts(5);
      } else {
        setAmounts(value);
      }
    };
  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
    <div>
      
      <StyleContainerMain>
      <StyleContainerLest>
      <StyleInput
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
        {filteredProducts.map(product => (
          <StyleList key={product.id}>
            <StyleProducts>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span>${product.price}</span>
            </StyleProducts>
            <PulseAdd >
        <AddInput >
          Amount
          <Input
            type="number"
            max="5"
            onChange={amountChangeHandler}
            value={amounts}
          />
        </AddInput>
        <Button
          onClick={() => {
            setAmounts(0);
          }}
        >
          Add
        </Button >
      </PulseAdd>
          </StyleList>
        ))}
      </StyleContainerLest>
      </StyleContainerMain>
    </div>

  );
};

export default UseProudcts


const StyleProducts = styled.div`
    display: flex;
  flex-direction: column;
  gap: 4px;
  & > li{
    list-style: none;
  } 
  & > h2 {
    font-size: 18px;
    padding-top: 20px;
  }
  & > p {
    font-size: 16px;
  color: #222222;
  padding-top:10px ;
  }
  & > span{
    font-size: 20px;
    padding-top: 10px;
  color: #ad5502;
  }
`;
const PulseAdd = styled.div`
    display: flex;
  flex-direction: column;
  align-items: end;
  padding: 24px 0;
  gap: 12px;
`;
const StyleList =  styled.li`
    border-bottom: 1px solid rgba(0, 0, 0, 0.634);
  width: 909px;
  display: flex;
  justify-content: space-between;
`;
const AddInput = styled.label`
     display: flex; 
    gap: 20px; 
`

const StyleContainerMain = styled.div`
  background-color: #3f3f3f;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const StyleContainerLest = styled.ul`
  width: 1000px;
  min-height: 564px;
  margin-top: 150px;
  border-radius: 16px;
  background-color: #ffffff;
  list-style: none;
  padding: 40px 0 40px 40px;
  -webkit-box-shadow: 0px 0px 13px 14px rgba(7, 6, 7, 0.2);
  -moz-box-shadow: 0px 0px 13px 14px rgba(7, 6, 7, 0.2);
  box-shadow: 0px 0px 13px 14px rgba(7, 6, 7, 0.2);
`;


const StyleInput = styled.input`
width: 100%;
  padding: 12px 20px;
  padding-right: 10px ;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid red;
  border-radius: 4px;
`
