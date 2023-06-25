import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.3rem;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

interface Props {
  link: string;
  icon: string;
}

function ContactBtn({ link, icon }: Props) {
  return (
    <Container>
      <img src={icon} width="35px" height="35px" />
      <Text>{link}</Text>
    </Container>
  );
}

export default ContactBtn;
