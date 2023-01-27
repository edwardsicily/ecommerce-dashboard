import React from "react";
import styled from "styled-components";

function HomeTitles({ content }) {
  const Title = styled.h3`
    font-size: 1.2rem;
    color: #242424;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  return <Title>{content}</Title>;
}

export default HomeTitles;
