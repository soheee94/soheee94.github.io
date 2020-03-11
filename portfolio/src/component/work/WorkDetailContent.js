import React from "react";
import styled from "styled-components";
import palette from "../../utils/palette";
import media from "../../utils/media";

function WorkDetailContent({ category, data }) {
  const { title, description } = data;
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
const Category = styled.h4`
  color: #ffae4a;
  text-decoration: underline;
  margin-bottom: 8px;
`;

const Title = styled.div`
  flex: 0 0 180px;
  color: ${palette.point};
  margin-bottom: 8px;
  h2 {
    line-height: 2rem;
  }
`;
const DescriptionList = styled.ul`
  list-style: none;
  color: "#4D4D59";
  ${media.small} {
    padding-left: 16px;
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

const Block = styled.div`
  & > div {
    display: flex;
    &:nth-of-type(2) {
      margin-top: 16px;
    }
    ${media.small} {
      display: block;
    }
  }
  margin-top: 30px;
`;

export default WorkDetailContent;
