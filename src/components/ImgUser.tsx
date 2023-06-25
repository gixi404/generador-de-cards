import styled from "styled-components";

const Img = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 100%;
  outline: 3px solid white;
  border: 3px solid #f19c79;
  object-fit: cover;
`;

interface Props {
  imgUser?: string;
}

function ImgUser({ imgUser }: Props) {
  return <Img src={imgUser} />;
}

export default ImgUser;
