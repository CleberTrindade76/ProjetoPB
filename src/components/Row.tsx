import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    place-content: space-between;
    margin-top: 16px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export default Row;
