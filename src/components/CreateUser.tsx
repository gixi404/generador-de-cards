import { Dispatch, SetStateAction, ReactElement, ChangeEvent } from "react";
import styled, { css } from "styled-components";
import { FaRegImage as IconFilee } from "react-icons/fa";

const mediaQuery = css`
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CreateUserContainer = styled.div`
  background-color: #ffd5c2;
  width: 400px;
  border-radius: 1rem;
  padding: 1rem;
  border: 2px solid #8d8d92;
  margin-top: 5rem;
  ${mediaQuery}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  row-gap: 1rem;
  font-family: "Quicksand", "sans-serif";
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const Input = styled.input`
  width: 350px;
  height: 80px;
  border-radius: 1rem;
  font-family: "Quicksand", sans-serif;
  outline: none;
  border: none;
  font-size: 1.1rem;
  text-align: center;
  outline: 2px solid #8d8d92;
`;

const Label = styled.label`
  color: #000;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const ContainerFile = styled.div`
  position: relative;
  display: inline-block;
  &::before {
    outline: 2px solid #8d8d92;
    background-color: #ab947e;
    background-color: #eaeaea;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    text-transform: uppercase;
    content: "Select Image";
    font-style: italic;
    color: #3e3e3e;
    font-weight: bold;
    position: absolute;
    /* border: 2px solid black; */
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

const ContainerContact = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: 2px solid #8d8d92;
  border-radius: 1rem;
`;

const ItemContact = styled.input`
  width: 350px;
  height: 40px;
  font-family: "Quicksand", "sans-serif";
  outline: none;
  border: none;
  font-size: 1rem;
  text-align: center;
  border-radius: 1rem;
`;

const FileInput = styled.input`
  width: 350px;
  height: 80px;
  border-radius: 100%;
  display: inline-block;
  cursor: pointer;
`;

const IconFile = styled(IconFilee)`
  font-size: 3rem;
  color: #3e3e3e;
  position: absolute;
  top: 46%;
  right: 15%;
  cursor: pointer;
  opacity: 0.9;
`;

interface Props {
  setNameUser: Dispatch<SetStateAction<string>>;
  setImgUser: Dispatch<SetStateAction<string>>;
  setProfessionUser: Dispatch<SetStateAction<string>>;
  setTextBiographyUser: Dispatch<SetStateAction<string>>;
  setLinkedinUser: Dispatch<SetStateAction<string>>;
  setEmailUser: Dispatch<SetStateAction<string>>;
}

function CreateUser({
  setNameUser,
  setImgUser,
  setProfessionUser,
  setTextBiographyUser,
  setLinkedinUser,
  setEmailUser,
}: Props): ReactElement {
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) =>
    setNameUser(event.target.value);

  const handleChangeImg = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    let videoURL;
    if (file) {
      videoURL = URL.createObjectURL(file);
      setImgUser(videoURL);
    }
  };

  const handleChangeProfession = (event: ChangeEvent<HTMLInputElement>) =>
    setProfessionUser(event.target.value);

  const handleChangeBiography = (event: ChangeEvent<HTMLInputElement>) =>
    setTextBiographyUser(event.target.value);

  const handleClickIconFile = () => {
    const fileInput = document.getElementById("image");
    if (fileInput) fileInput.click();
  };

  const handleChangeLinkedIn = (event: ChangeEvent<HTMLInputElement>) =>
    setLinkedinUser(event.target.value);

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmailUser(event.target.value);

  return (
    <CreateUserContainer>
      <Form>
        <ContainerInput>
          <Label htmlFor="image">Image</Label>
          <ContainerFile onClick={handleClickIconFile}>
            <FileInput
              onChange={handleChangeImg}
              id="image"
              type="file"
              accept="image/*"
              name="image"
              aria-label="File"
            />
          </ContainerFile>
          <IconFile id="iconFile" onClick={handleClickIconFile} />
        </ContainerInput>

        <ContainerInput>
          <Label htmlFor="name">Name</Label>
          <Input id="name" onChange={handleChangeName} type="text" />
        </ContainerInput>

        <ContainerInput>
          <Label htmlFor="profession">Profession</Label>
          <Input
            id="profession"
            onChange={handleChangeProfession}
            type="text"
          />
        </ContainerInput>

        <ContainerInput>
          <Label htmlFor="biography">Biography</Label>
          <Input id="biography" onChange={handleChangeBiography} type="text" />
        </ContainerInput>

        <ContainerInput>
          <Label>Contact</Label>
          <ContainerContact>
            <ItemContact
              onChange={handleChangeLinkedIn}
              placeholder="LinkedIn"
            />
            <ItemContact onChange={handleChangeEmail} placeholder="Mail" />
          </ContainerContact>
        </ContainerInput>
      </Form>
    </CreateUserContainer>
  );
}

export default CreateUser;
