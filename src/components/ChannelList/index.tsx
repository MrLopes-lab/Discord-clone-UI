import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat do povão" />
      <ChannelButton channelName="WarThunder" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="react" />
    </Container>
    );
}

export default ChannelList;

