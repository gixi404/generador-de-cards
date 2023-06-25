import { ReactElement } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #211f1f;
  word-wrap: break-word;
  overflow: hidden;
  padding: 1rem;
`;

const Name = styled.h2`
  font-size: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Profession = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.1rem;
  text-align: center;
  text-transform: uppercase;
  font-style: italic;
  width: 100%;
`;

interface Props {
  nameUser?: string;
  professionUser?: string;
}

function NameUser({ nameUser, professionUser }: Props): ReactElement {
  const formatProfession = () =>
    professionUser ? professionUser : "Profession";

  return (
    <Container>
      <Name>{nameUser}</Name>
      <Profession>{formatProfession()}</Profession>
    </Container>
  );
}

export default NameUser;
