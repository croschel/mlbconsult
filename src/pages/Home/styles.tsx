import styled from 'styled-components';
import { device } from '../../styles/devices';

export const Container = styled.div``;

export const Content = styled.div`
  position: absolute;
  top: 25%;
  left: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptopL} {
    left: 25%;
  }

  @media ${device.laptop} {
    left: 18%;
  }
  @media ${device.tablet} {
    left: 10%;
  }
  @media ${device.mobileL} {
    left: 5%;
  }
  @media ${device.mobileM} {
    left: 2%;
    h1 {
    margin: 20px;
    font-size: 28px;
    text-align:center;
  }
  
  h2 {
  text-shadow: 4px 4px 10px rgba(0,0,0,0.75);
  margin: 20px 0 40px 0;
}

a{
  background: #08D79C;
  padding: 20px;
  border-radius: 16px;
  width: 300px;
  text-align: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 15px 4px #000000; 
  box-shadow: 1px 1px 15px 0px #000000;
}
  }
  h1 {
  text-shadow: 4px 4px 10px rgba(0,0,0,0.75);
  margin: 20px;
  text-align:center;

  }
  
  h2 {
  text-shadow: 4px 4px 10px rgba(0,0,0,0.75);
  margin: 20px 0 40px 0;
  text-align:center;

}

a{
  background: #08D79C;
  padding: 20px;
  border-radius: 16px;
  width: 300px;
  text-align: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 15px 4px #000000; 
  box-shadow: 1px 1px 15px 0px #000000;
}
span {
  margin-right: 10px;
}
`;







