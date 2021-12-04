import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "./useScrollFadeIn";

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    margin-top: 680px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Label: styled.p`
    display: inline-block;

    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    text-align: center;
    margin-bottom: 4rem;
  `,
  ItemWrapper: styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  ItemBox: styled.li`
    width: 380px;
    padding: 3rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
    background-color: white;
  `,
  ItemTitle: styled.h3`
    margin-bottom: 1rem;
  `,
  ItemDescription: styled.p`
    margin-bottom: 1.5rem;
  `,
  ItemButton: styled.button`
    margin-top: auto;
    cursor: pointer;
  `
};

const SERVICES_ITEMS = [
  {
    title: "Volutpat odio",
    description:
      "Facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing. In hac habitasse platea dictumst quisque sagittis purus.",
    button: "Get started"
  },
  {
    title: "Diam donec",
    description:
      "Adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Pulvinar elementum integer enim neque volutpat ac.",
    button: "Switch over"
  },
  {
    title: "Elit at imperdiet",
    description:
      "Dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent.",
    button: "Read more"
  }
];

const Services = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3)
  };

  return (
    <S.Wrapper>
      <S.Label>Our Services</S.Label>
      <S.Title>
        Quis hendrerit dolor
        <br />
        Magna eget est
      </S.Title>
      <S.ItemWrapper>
        {SERVICES_ITEMS.map((item, index) => (
          <S.ItemBox key={item.title} {...animatedItem[index]}>
            <S.ItemTitle>{item.title}</S.ItemTitle>
            <S.ItemDescription>{item.description}</S.ItemDescription>
            <S.ItemButton>{item.button}</S.ItemButton>
          </S.ItemBox>
        ))}
      </S.ItemWrapper>
    </S.Wrapper>
  );
};

export default Services;
