import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>chat do povão</Title>

      <Separator />

      <Description>Canal aberto para a massa</Description>
    </Container>
    );
}

export default ChannelInfo;

