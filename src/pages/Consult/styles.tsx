import styled from 'styled-components';
import { darken } from 'polished';
import { device } from '../../styles/devices';

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

  @media ${device.laptop} {
    height: 80%;
    top: 10%;
    left: 2%;
    width: 45%;
  }

  @media ${device.tablet} {
    height: 80%;
    top: 10%;
    left: 2%;
    width: 45%;
  }

  @media ${device.mobileL} {
    display: none;
  }

  @media ${device.mobileM} {
    display: none;
  }
  
  @media ${device.mobileS} {
    display: none;
  }

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
  overflow-y: scroll;
  top: 15%;
  left: 50%;
  font-size: 24px;
  width: 30%;
  height: 70%;
  box-shadow: 0px 0px 21px -2px #000000;

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

  @media ${device.laptop} {
    height: 70%;
    top: 15%;
    right: 1%;
    width: 45%;
  }

  @media ${device.tablet} {
    height: 70%;
    top: 15%;
    right: 2%;
    width: 48%;
  }

  @media ${device.mobileL} {
    width: 90%;
    height: 80%;
    left:5%;

  }

  @media ${device.mobileM} {
    width: 90%;
    height: 80%;
    left:5%;
    
  }
  
  @media ${device.mobileS} {
    width: 90%;
    height: 80%;
    left:5%;
  }

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
    width: 78%;
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
      width: 20%;
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
`;

export const Response = styled.div`
  width: 100%;
  padding: 20px 5px;
  margin-top: 30px;

div{
    display: flex;
    flex-direction: column;  
    
  #chevron {
    color: red;
    display: flex;
    align-Self: center;
    margin: 10px;
    
  }

  #categories {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #bcbcbc;
    padding: 20px;
    border-radius: 16px;
    
  }

}
    #category-name {
      font-size: 24px;
      text-shadow: 1px 1px 15px rgba(255,255,255,0.75);

      @media ${device.mobileL} {
       font-size: 20px;

      }

      @media ${device.mobileM} {
        font-size: 20px;
        
      }
      
      @media ${device.mobileS} {
        font-size: 20px;
        
      }
    }
    #category-id {
      font-size: 26px;
      text-align: center;
      
      border: none;
      border-radius: 55px;
      color: #fff;
      text-shadow: 1px 1px 15px rgba(0,0,0,0.75);


      @media ${device.mobileL} {
       font-size: 20px;
  
      }

      @media ${device.mobileM} {
        font-size: 20px;
       
      }
      
      @media ${device.mobileS} {
        font-size: 20px;
        
      }
      
    }
    
`;