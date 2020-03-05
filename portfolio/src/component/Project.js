import React from "react";
import styled from "styled-components";
import media from "../utils/media";

const Block = styled.div`
  width: 50%;
  height: auto;
  padding-top: 55%;
  position: relative;

  ${media.medium} {
    width: 100%;
    padding-top: 110%;
  }
`;

const InsideBlock = styled.div`
  margin: 10px;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.5);
  border-radius: 18px;
  p {
    transition: all 0.25s ease-in-out;
  }
  &:hover {
    p {
      color: ${props => props.theme.point};
    }
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
  margin-bottom: 10px;
  letter-spacing: 0.02em;
`;

const Description = styled.p`
  font-size: 15px;
`;

function Project({ title, description }) {
  return (
    <Block>
      <InsideBlock>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InsideBlock>
    </Block>
  );
}

export default Project;
