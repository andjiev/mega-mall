import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

const StyledMenuIcon = styled(MenuIcon)`
  color: ${props => props.theme.palette.secondary.main};
`;

export { StyledMenuIcon };
