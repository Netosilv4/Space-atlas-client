import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { studentContext } from '../../context/studentContext';
import {
  Container, WeekDay, TableContainer, Grade,
} from './styles';
import useSchedule from '../../hooks/useSchedule';
import Loading from '../loading';

// import { Container } from './styles';

function StudentSchedule({ history }) {
  const { setSelected, student } = useContext(studentContext);
  const { getSchedule, schedule } = useSchedule(student);

  useEffect(() => {
    setSelected(history.location.pathname);
    getSchedule();
  }, []);

  if (schedule) {
    return (
      <Container>
        <h2>HORÁRIOS</h2>
        <TableContainer>
          <WeekDay>SEGUNDA FEIRA</WeekDay>
          { schedule[0].map((e) => (
            <Grade>
              {e.subject}
              {' '}
              -
              {' '}
              {e.teacher}
            </Grade>
          ))}
          <WeekDay>TERÇA FEIRA</WeekDay>
          { schedule[1].map((e) => (
            <Grade key={e.subject}>
              {e.subject}
              {' '}
              -
              {' '}
              {e.teacher}
            </Grade>
          ))}
          <WeekDay>QUARTA FEIRA</WeekDay>
          { schedule[2].map((e) => (
            <Grade key={e.subject}>
              {e.subject}
              {' '}
              -
              {' '}
              {e.teacher}
            </Grade>
          ))}
          <WeekDay>QUINTA FEIRA</WeekDay>
          { schedule[3].map((e) => (
            <Grade key={e.subject}>
              {e.subject}
              {' '}
              -
              {' '}
              {e.teacher}
            </Grade>
          ))}
          <WeekDay>SEXTA FEIRA</WeekDay>
          { schedule[4].map((e) => (
            <Grade key={e.subject}>
              {e.subject}
              {' '}
              -
              {' '}
              {e.teacher}
            </Grade>
          ))}
        </TableContainer>
      </Container>
    );
  } return <Loading />;
}

StudentSchedule.propTypes = {
  history: PropTypes.objectOf(String).isRequired,
};
export default StudentSchedule;
