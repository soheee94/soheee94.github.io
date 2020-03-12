import React from "react";
import styled from "styled-components";
import media from "../../lib/style/media";
import { useHistory } from "react-router-dom";
import palette from "../../lib/style/palette";

const Block = styled.div`
  width: 50%;
  height: auto;
  padding-top: 50%;
  position: relative;

  ${media.small} {
    width: 100%;
    padding-top: 90%;
  }
`;

const InsideBlock = styled.div`
  margin: 10px;
  background-image: url(${props => props.image});
  background-blend-mode: saturation;
  background-position: center;
  background-size: cover;
  /* background: white; */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  color: ${palette.point};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.35s ease;
  border-radius: 18px;
  overflow: hidden;
  p {
    transition: all 0.25s ease-in-out;
  }
  h2 {
    margin-bottom: 8px;
  }
  &:hover {
    box-shadow: 0px 5px 24px rgba(93, 93, 93, 0.5);
    p {
      color: ${palette.point};
    }
  }
`;
function MainWork({ title, introduction, image }) {
  const history = useHistory();
  return (
    <Block onClick={() => history.push(`/work/${title}`)}>
      <InsideBlock image={image}>
        <h2>{title}</h2>
        <p>{introduction.title}</p>
      </InsideBlock>
    </Block>
  );
}

export default React.memo(MainWork);
