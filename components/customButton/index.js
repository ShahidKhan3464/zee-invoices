import React from 'react';
import { StyledButton } from './style';

const Index = ({ clicked = () => null, type = null, p, lh, fs, bg, width, color, radius, border, title }) => {

  return (
    <StyledButton
      p={p}
      lh={lh}
      fs={fs}
      bg={bg}
      width={width}
      color={color}
      radius={radius}
      border={border}
      onClick={() => clicked()}
      type={type ? type : 'button'}
    >
      {title}
    </StyledButton>
  )
}

export default Index