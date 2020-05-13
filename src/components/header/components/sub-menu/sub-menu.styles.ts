import styled from 'styled-components';

import { ListItemText, Box } from '@material-ui/core';

const StyledSubMenu = styled(Box)`
  background-color: ${props => props.theme.palette.primary.dark};
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 400px;
`;

const StyledListItemText = styled(ListItemText)`
  color: #ffffff;
  font-size: 16px;
  border-bottom: 2px solid #101a50;
  padding-bottom: 3%;
`;
interface ISubmenuImage {
  url?: string;
}
const SubmenuImage = styled(Box)`
  background-image: url(${(props: ISubmenuImage) => props.url});
  background-size: cover;
  height: 310px;
  width: 100%;
`;

export { StyledSubMenu, StyledListItemText, SubmenuImage };
