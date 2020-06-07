import styled from 'styled-components';
import { darken } from 'polished';

interface ConsultProps {
  background: boolean
}

export const Container = styled.div`
  a{
    position: absolute;
    top: 2%;
    left: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background: transparent;
    border: none;
    text-decoration: none;

  span{
    color: red;
  }
  p{
    color: red;
    font-size: 26px;
  }
  }

  h1 {
    text-align: center;
    position: absolute;
    top: 35px;
    left: 40%;
    font-size: 40px;
  }
`;

export const BackButton = styled.button`
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  table{
    border-spacing: 5px;
    display: flex;
    flex-direction: column;
    
  }

  tr {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  td{
  
  }

  
`;

export const AsideBox = styled.div`
  background: #f1f1f1;
  opacity: 0.8;
  border: solid 1px #f1f1f1;
  border-radius: 16px;
  position: absolute;
  top: 5%;
  left: 15%;
  font-size: 24px;
  overflow-y: scroll;
  height: 90%;
  padding: 15px;
  box-shadow: 0px 0px 21px -2px #000000;
  width: 30%;
  
  &::-webkit-scrollbar-track{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
  background-color: #F5F5F5;
  box-shadow: 0px 0px 21px -2px #000000;
}

&::-webkit-scrollbar{
	width: 12px;
	background-color: #f1f1f1;
}

&::-webkit-scrollbar-thumb{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #f1f1f1; 
}

&::-webkit-scrollbar-thumb:hover{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #dadada;
}
h2{
    text-align: center;
    margin: 10px;
  }
`;

export const SearchBox = styled.div`
  background: #f1f1f1;
  opacity: 0.9;
  border: solid 1px #f1f1f1;
  border-radius: 16px;
  position: absolute;
  padding: 15px;
  top: 15%;
  left: 50%;
  font-size: 24px;
  width: 30%;
  height: 70%;
  box-shadow: 0px 0px 21px -2px #000000;

  @keyframes ripple {
	0%   { transform: translate(-100%, -100%); }
	80%  { transform: translate(-100%, -100%) scale(50); }
	100% { transform: translate(-100%, -100%) scale(50); opacity: 0; } }
  
  h2{
    text-align: center;
    margin: 10px 0 20px 0;
  }
  input {
    margin: 0 ;
    width: 80%;
    height: 5%;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 0px 7px -2px #000000;
    padding: 10px;
    color: #606060;
    outline: none; 
    
    &::placeholder{
      color: #b0b0bc;
    }
  }
  
    button {
      height: 5%;
      width: 18%;
      margin-left: 2%;
      border-radius: 10px;
      border: none;
      box-shadow: 0px 0px 10px -2px #000000;
      background: #22EDAF;
      color: #fff;
      font-weight: bold;
      font-size: 16px;

    &:hover{
      background: ${darken(0.09, '#22EDAF')};
      transition: 1s;
    }
    .ripple {
      background-color: #90EDD0;
      width: 1rem;
      height: 1rem;
      position: absolute;
      border-radius: 50%;
      transform: translateX(-100%) translateY(-100%);
      mix-blend-mode: screen;
      animation: ripple 1000ms ease-out forwards;
    }
  }
    #category-name {
      font-size: 36px;
      text-align: center;
      margin: 120px 0 90px 0;
      text-shadow: 1px 1px 15px rgba(0,0,0,0.75);
      
    }
    #category-id {
      font-size: 70px;
      text-align: center;
      margin: 40px auto;
      width: 70%;
      padding: 10px;
      border: none;
      border-radius: 55px;
      color: #fff;
    }
`;
