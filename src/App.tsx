import { useState } from "react";
import styled from "styled-components";
import NameUser from "./components/NameUser";
import ImgUser from "./components/ImgUser";
import Biography from "./components/Biography";
import CreateUser from "./components/CreateUser";
import defaultImg from "../src/img/default-img.png";
import ContactBtn from "./components/ContactBtn";
import mail from "../src/img/mail.png";
import linkedin from "../src/img/linkedin.png";
import Download from "./components/Download";

function App() {
  const [nameUser, setNameUser] = useState<string>("Jhon Doe"),
    [imgUser, setImgUser] = useState<string>(defaultImg),
    [professionUser, setProfessionUser] =
      useState<string>("Frontend Developer"),
    [textBiographyUser, setTextBiographyUser] =
      useState<string>(defaultTextBiography),
    [linkedinUser, setLinkedinUser] = useState<string>("Jhon Doe"),
    [emailUser, setEmailUser] = useState<string>("jhon@doe.com");

  return (
    <AppContainer>
      <Download nameDownload={nameUser} />

      <Screenshot id="user-container">
        <UserContainer>
          <Card>
            <ImgUser imgUser={imgUser} />
            <NameUser nameUser={nameUser} professionUser={professionUser} />
          </Card>

          <Biography
            contactUser={
              <ContactContainer>
                <ContactBtn icon={linkedin} link={linkedinUser} />
                <ContactBtn icon={mail} link={emailUser} />
              </ContactContainer>
            }
            textBiographyUser={textBiographyUser}
          />
        </UserContainer>
      </Screenshot>

      <CreateUser
        setNameUser={setNameUser}
        setImgUser={setImgUser}
        setProfessionUser={setProfessionUser}
        setTextBiographyUser={setTextBiographyUser}
        setLinkedinUser={setLinkedinUser}
        setEmailUser={setEmailUser}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  column-gap: 8rem;
  font-family: "Quicksand", "sans-serif";
`;

const Screenshot = styled.div`
  background-color: #343434;
  padding: 2rem;
  display: grid;
  place-content: center;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 700px;
  height: 530px;
  border-radius: 1rem;
  background-color: #ffd5c2;
  margin: 0 1.2rem 0 1.2rem;
  max-width: 100%;
  max-height: 100%;
`;

const Card = styled.div`
  background-color: #f19c79;
  width: 100%;
  max-height: 380px;
  margin-top: 1rem;
  display: flex;
  flex-flow: row wrap;
  column-gap: 3rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 1rem;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 1rem;
  column-gap: 1rem;
`;

const defaultProps = {
  defaultTextBiography:
    "Inicié mi aprendizaje de forma autodidacta utilizando plataformas como ... y ... Desarrollo sitios web responsive con experiencias de usuario atractivas y funcionales. Trabajo con tecnologías como ..., ... y ... Tengo ... años de edad y vivo en ...",
};

const { defaultTextBiography } = defaultProps;
