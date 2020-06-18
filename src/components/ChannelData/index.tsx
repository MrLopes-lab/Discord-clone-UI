import React, { useEffect, useRef } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>

        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
          key={n}
          author="Marcelo Lopes"
          date="18/06/2020"
          content="Vamos derrubar o governo"
          />
        ))}

        <ChannelMessage
          author="Orégano"
          date="18/06/2020"
          content={
            <>
              <Mention>@Marcelo Lopes</Mention>, YESSSSSSSSSSSSSSS
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat do povão" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;

