import styled from 'styled-components';
import myImage from '../../../../assets/Hero-image-.jpg';

const StyleBanner = styled.div`
  width: 1366px;
  height: 600px;
`;
const ButtonStyle = styled.button`
  width: 133px;
  height: 54px;
  background: #bf1736;
  variant: contained;
`;
const CaptionStyle = styled.div`
  text-align: initial;
  font-family: Oswald Bold;
  font-weight: bold;
  padding-bottom: 178px;
`;
const HeadingStyle = styled.h1`
  text-align: initial;
  font-family: Oswald Bold;
  font-weight: bold;
  font-size: 50px;
`;

const StyleImage = styled.img`
  background-image: url(${myImage});
  width: 1366px;
  height: 600px;
`;

export { StyleBanner, StyleImage, ButtonStyle, CaptionStyle, HeadingStyle };
