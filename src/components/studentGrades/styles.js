import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  animation: dropDown 500ms normal;
  padding: 40px 20px;
  h2 {
  word-break: break-word;
  text-align: center;
  color: black;
  font-size: 15px;
  font-weight: 100;
  letter-spacing: 4px;
  margin-bottom: 40px;
  }
  p {
    font-size: 14px;
    text-align: left;
    margin-top: 10px;
  }
  span {
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    text-align: left;
    font-weight: 700;
  }
`;

export const GradeTitle = styled.h3`
  font-size: 12;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 300;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 6px;
`;

export const GradeListItem = styled.li`
  div {
    display: flex;
    flex-direction: column;
    gap: 5%;
    border-bottom: 1px solid lightgray;
  }
`;

export const GradeList = styled.ul``;

export const GradeDetails = styled.div`
  background-color: white;
  padding: 0 10px;
  display: flex;
  overflow: ${(props) => (props.selected === props.name ? 'scroll' : 'hidden')};
  max-height: ${(props) => (props.selected === props.name ? '400px' : 0)};
  margin-bottom: ${(props) => (props.selected === props.name ? '30px' : '15px')};
  border: 1px solid lightgray;
  transition: 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  flex-direction: column;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 10px 10px gray;
  span {
    font-size: 12px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.6);
  }
  h3 {
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    padding: 5px;
  }
    div {
      padding-bottom: 5px;
    }

`;
