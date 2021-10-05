import React, {
  useContext, useState, useEffect,
} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { useHistory } from 'react-router-dom';
import {
  Section, H2, P, Button, InputFile,
} from './styles';
import studentFields from '../../helper/studentFields';
import { studentContext } from '../../context/studentContext';
import useRequest from '../../hooks/useRequest';

function Requests() {
  const { student } = useContext(studentContext);
  const { sendRequest } = useRequest();
  const [studentTarget, setTarget] = useState('Nome');
  const [newValue, setNewValue] = useState();
  const [reason, setReason] = useState();
  const { setSelected } = useContext(studentContext);
  const history = useHistory();

  useEffect(() => {
    setSelected(history.location.pathname);
  }, []);

  return (
    <Section>
      <H2>
        ATUALIZAÇÃO DE INFORMAÇÕES
      </H2>
      <P>Informação que deseja alterar:</P>
      <FormControl style={{ width: '55%' }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={studentTarget}
          onChange={({ target }) => setTarget(target.value)}
        >
          {studentFields.map((e) => (
            <MenuItem
              key={e}
              value={e}
            >
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <P>Alterar para:</P>
      <TextField
        value={newValue}
        onChange={({ target }) => setNewValue(target.value)}
        id="outlined-basic"
        label="Digite a nova informação"
        variant="outlined"
      />
      <P>Motivo:</P>
      <TextField
        id="outlined-multiline-static"
        label="Digite o motivo da mudança"
        multiline
        rows={5}
        style={{ width: '100%', marginBottom: '30px' }}
        variant="outlined"
        value={reason}
        onChange={({ target }) => setReason(target.value)}
      />
      <InputFile type="file" />
      <Button
        onClick={() => sendRequest(student, studentTarget, newValue, reason)}
        type="button"
      >
        Enviar Solicitação
      </Button>
    </Section>
  );
}

export default Requests;
