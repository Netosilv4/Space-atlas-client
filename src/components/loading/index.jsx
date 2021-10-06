import React from 'react';

import { Container } from './styles';

function Loading() {
  return (
    <Container>
      <img width="50px" src="/loadingGif.gif" alt="loading" />
    </Container>
  );
}

export default Loading;
