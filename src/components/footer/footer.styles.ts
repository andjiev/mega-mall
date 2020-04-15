import styled from 'styled-components';

const ListStyle = styled.ul`
  list-style-type: none;
  color: white;
`;

const TextStyle = styled.div`
  color: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterStyle = styled.section`
  background: #252525;
  padding-top: 56px;
  width: 100%;
  height: 428px;
`;
const WrapperStyle = styled.div`
  max-width: 1366px;
  height: auto;
  width: 100%;
  margin: 0 auto;
  display: block;
`;
const RowStyle = styled.div`
  padding-bottom: 50px;
`;

export { ListStyle, TextStyle, FooterStyle, WrapperStyle, RowStyle };
