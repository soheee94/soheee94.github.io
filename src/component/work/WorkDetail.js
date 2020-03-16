import React from "react";
import styled from "styled-components";
import palette from "../../lib/style/palette";
import media from "../../lib/style/media";

function WorkDetail({ category, data }) {
  return (
    <Block>
      <Category>{category}</Category>
      {data.map(({ title, description }) => (
        <div key={title}>
          <Title>
            <h2>{title}</h2>
          </Title>
          <DescriptionList>
            {description.map((text, index) => (
              <Description key={index}>{text}</Description>
            ))}
          </DescriptionList>
        </div>
      ))}
    </Block>
  );
}
const Block = styled.div`
  & > div {
    /* display: flex; */
    &:nth-of-type(2) {
      margin-top: 1rem;
    }
    ${media.medium} {
      display: block;
    }
  }
  margin-top: 3rem;
`;

const Category = styled.h4`
  color: #ffae4a;
  margin-bottom: 0.5rem;
`;

const Title = styled.div`
  flex: 0 0 180px;
  color: ${palette.point};
  margin-bottom: 0.5rem;
  h2 {
    line-height: 2rem;
  }
`;
const DescriptionList = styled.ul`
  list-style: none;
  color: ${palette.sub};
  ${media.medium} {
    padding-left: 1rem;
  }
`;

const Description = styled.li({
  marginBottom: "8px",

  "::before": {
    content: "'\\2022'",
    display: "inline-block",
    width: "1rem",
    marginLeft: "-1rem"
  }
});

export default WorkDetail;
