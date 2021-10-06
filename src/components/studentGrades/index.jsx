import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { studentContext } from '../../context/studentContext';
import {
  Container, GradeList, GradeListItem, GradeTitle, GradeDetails,
} from './styles';
import useGrades from '../../hooks/useGrades';
import Loading from '../loading';

function StudentGrades({ history }) {
  const { setSelected, student } = useContext(studentContext);
  const { getGrades, grades, subjects } = useGrades();
  const [selectedSub, setSelectedSub] = useState('');
  useEffect(() => {
    setSelected(history.location.pathname);
    getGrades(student.auth.register);
  }, []);
  if (grades && subjects) {
    return (
      <Container>
        <h2>AVALIAÇÕES</h2>
        <p>Aluno:</p>
        <span>{student.basicInfo.name}</span>
        <p>Matrícula:</p>
        <span>{student.auth.register}</span>
        <GradeList>
          {
            Object.keys(grades).map((key) => (
              <GradeListItem>
                <GradeTitle onClick={() => (selectedSub === key ? setSelectedSub('') : setSelectedSub(key))}>
                  {subjects.find((e) => e.subjectID === key).subject}
                  <MdKeyboardArrowRight style={{ transform: `rotate(${selectedSub === key ? '450deg' : '0deg'})`, transition: 'ease-in-out 0.5s' }} />
                </GradeTitle>
                <GradeDetails selected={selectedSub} name={key}>
                  {
                    grades[key].map((e) => (
                      <div>
                        <h3>{e.gradeName}</h3>
                        <span>
                          Valor:
                          {e.value}
                        </span>
                        <span>
                          {' '}
                          Nota Obtida:
                          <span
                            style={{ color: `${e.obtained > e.value * 0.6 ? 'green' : 'red'}` }}
                          >
                            {e.obtained}
                          </span>
                        </span>
                        <span>
                          {' '}
                          Data:
                          { e.date}
                        </span>
                      </div>
                    ))
                  }
                </GradeDetails>
              </GradeListItem>
            ))
}
        </GradeList>
      </Container>
    );
  } return <Loading style={{ alignSelf: 'center' }} />;
}

StudentGrades.propTypes = {
  history: PropTypes.objectOf(String).isRequired,
};

export default StudentGrades;
