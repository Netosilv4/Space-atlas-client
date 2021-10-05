import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: dropDown 1s normal;
  margin-bottom: 50px;
  h2 {
  padding-top: 40px;
  word-break: break-word;
  text-align: center;
  color: black;
  font-size: 15px;
  font-weight: 100;
  letter-spacing: 4px;
  margin-bottom: 20px;
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

export const WeekDay = styled.tr`
  margin-top:30px;
  background: linear-gradient( 45deg,
    rgb(65, 51, 122),
    rgb(85, 149, 180)
  );
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding:0;
  border-radius: 5px;
`;

export const TableContainer = styled.table`
  width: 80%;
`;

export const Grade = styled.tr`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  padding: 10px 5px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  text-align: left;
  font-weight: 700;
`;
