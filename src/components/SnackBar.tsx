import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

const SnackbarError = styled.div`
  display: flex;
  align-items: center;
  background-color: #fac5c5;
  color: rgb(191 31 31);
  padding: 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  margin-top: 10px;

  svg {
    fill: #fff;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    border-radius: 50%;
    background-color: #fac5c5;
    padding: 2px;
    border: solid 2px
  }
`;

interface Props {
  message: string;
}

const Snackbar: React.FC<Props> = ({ message }) => {
  return (
    <SnackbarError>
      <FiX />
      {message}
    </SnackbarError>
  );
};

export default Snackbar;