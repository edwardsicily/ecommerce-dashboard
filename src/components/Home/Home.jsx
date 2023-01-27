import React from "react";
import styled from "styled-components";
import HomeTitles from "./HomeTitles";

function Home() {
  const Wrapper = styled.main`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 2fr;
    gap: 1rem;
    padding: 1rem;
  `;
  const TopContainer = styled.div`
    background: white;
    border-radius: 1rem;
    position: relative;
    box-shadow: 0 0 8px #efefef;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover {
      box-shadow: 0 0 1rem #ededed;
    }
  `;
  const BigContainer = styled.div`
    background: rgba(121, 199, 225, 0.5);
    border-radius: 1rem;
    grid-column: 1/-1;
    position: relative;
    box-shadow: 0 0 8px #eeeeee;
    transition: all 0.7s ease;
    cursor: pointer;
    &:hover {
      background: rgba(121, 199, 225, 0.65);
      box-shadow: 0 0 1rem #ededed;
    }
  `;
  return (
    <Wrapper>
      <TopContainer>
        <HomeTitles content={"Categories"}></HomeTitles>
      </TopContainer>
      <TopContainer>
        <HomeTitles content={"Products"}></HomeTitles>
      </TopContainer>
      <TopContainer>
        <HomeTitles content={"Orders"}></HomeTitles>
      </TopContainer>
      <BigContainer>
        <HomeTitles content={"Made With Styled Components"}></HomeTitles>
      </BigContainer>
    </Wrapper>
  );
}

export default Home;
