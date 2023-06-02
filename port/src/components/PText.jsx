import React from 'react';
import styled from 'styled-components';


const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  color: rgb(255 255 255);
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    color: var(--gray-1);
  }
`;

function PText( props) {
  return (
    <PStyle>
    {props.brand}
    </PStyle>
  )
}

export default PText