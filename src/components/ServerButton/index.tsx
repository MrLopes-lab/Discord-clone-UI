import React from 'react';

import { Button } from './styles';

import LogoImg from '../../assets/Logo.svg';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotification?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotification,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotification={hasNotification}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={LogoImg} alt="Rocketseat" />}
    </Button>
  );
}

export default ServerButton;