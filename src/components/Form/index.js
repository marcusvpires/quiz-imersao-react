import React from 'react';
import * as S from './styled';

export default function Template() {
  return (
    <S.Wrapper onSubmit="">
      <S.NameInput placeholder="Digite seu nome" />
      <S.Button>Button</S.Button>
    </S.Wrapper>
  );
}
