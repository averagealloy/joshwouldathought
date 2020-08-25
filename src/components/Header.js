import React from 'react';
import styled from 'styled-components';


const Header = () => {
     return (
     <MainContainer>
          <h1>
               this header image can be changed <br/>
               but why would you?
          </h1>
     </MainContainer>
     );
};

export default Header;

//MAIN CONT 

const MainContainer = styled.header`
background: url(../../images/shaq.jpg)no-repeat center/cover;
height: 25rem;

h1 {
     transform: translate(-50%, -50%);
     color: #fff;
     font-weight: 900;
     position: absolute;
     top: 25%;
     left: 50%
}

`;