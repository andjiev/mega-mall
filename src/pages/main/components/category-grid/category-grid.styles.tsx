import styled from 'styled-components';
import React from 'react';

interface IStyledColProps {
  img: string;
}
const ColStyle = styled.div`
  background-image: url(${(props: IStyledColProps) => props.img});
  width: 100%;
  max-width: 300px;
  height: 460px;
`;

export { ColStyle };
