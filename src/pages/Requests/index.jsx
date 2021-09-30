import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import {
  Section, H2, P, Button, InputFile,
} from './styles';

const Requests = () => (
  <Section>
    <H2>
      ATUALIZAÇÃO DE INFORMAÇÕES
    </H2>
    <P>Rua:</P>
    <FormControl>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    <P>Alterar para:</P>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <P>Motivo:</P>
    <TextField
      id="outlined-multiline-static"
      label="Multiline"
      multiline
      rows={5}
      variant="outlined"
    />
    <InputFile type="file" />
    <Button type="button">Enviar Solicitação</Button>
  </Section>
);

export default Requests;
