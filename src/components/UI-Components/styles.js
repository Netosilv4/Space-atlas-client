import styled from 'styled-components';

export const H4 = styled.h4`
  font-size: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  font-weight: 300;
  color: ${(props) => (props.select ? 'rgb(245, 233, 96)' : 'white')};
  border-left: ${(props) => (props.select ? '5px solid rgb(245, 233, 96)' : null)};
  padding-left: ${(props) => (props.select ? '5px' : '10px')};
`;

export const dale = styled.h1``;
