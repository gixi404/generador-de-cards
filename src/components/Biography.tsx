import { ReactElement } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 85%;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 3rem;
`;
const TextBiography = styled.p`
  text-align: center;
  width: 100%;
  color: #023047;
  font-size: 1.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

interface Props {
  textBiographyUser?: string;
  contactUser?: ReactElement;
}

function Biography({ textBiographyUser, contactUser }: Props) {
  return (
    <Container>
      <TextBiography>{textBiographyUser}</TextBiography>
      {contactUser}
    </Container>
  );
}

export default Biography;
