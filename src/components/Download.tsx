import styled from "styled-components";
import downloadImg from "../img/download.png";
import html2canvas from "html2canvas";

const Img = styled.img`
  border: 2px solid green;
  border-radius: 1rem;
  padding: 0.5rem;
  position: relative;
  top: 0;
  left: 0;
  margin: 1rem;
  width: 80px;
  height: 80px;
  transition-duration: 0.2s;
  &:hover {
    scale: 1.1;
    cursor: pointer;
  }
`;

interface Props {
  nameDownload: string;
}

function Download({ nameDownload }: Props) {
  const formatName = () =>
    (nameDownload = nameDownload.replace(" ", "-").toLowerCase());

  function handleDownload() {
    const userContainer = document.getElementById("user-container");
    if (userContainer) {
      html2canvas(userContainer).then((canvas) => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = formatName();
        link.click();
      });
    }
  }

  return <Img src={downloadImg} alt="download" onClick={handleDownload} />;
}

export default Download;
