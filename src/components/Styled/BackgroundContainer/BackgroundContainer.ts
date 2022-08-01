import styled from "styled-components";

export const BackgroundContainer = styled.section<{
  bgColor: string | undefined;
  bgColorDefault: string
}>`
  background-color: ${(props) => props.bgColor || props.bgColorDefault};
`;
