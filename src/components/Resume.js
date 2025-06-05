import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import 'react-pdf/dist/Page/TextLayer.css';
import { IconContext } from "react-icons";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function Resume() {

  const pdf = process.env.REACT_APP_PDF_URL;
  const pdf_link = process.env.REACT_APP_PDF_LINK;
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <IconContext.Provider value={{size:"22px"}}>
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "space-evenly", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
          <Button
            variant="primary"
            target="_blank"
            style={{ maxWidth: "250px" }}
            onClick={(e) => {e.preventDefault();navigator.clipboard.writeText(pdf_link);}}
          >
            <BsLink45Deg />
            &nbsp;Copy Resume Link
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "space-evenly", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
          <Button
            variant="primary"
            target="_blank"
            style={{ maxWidth: "250px" }}
            onClick={(e) => {e.preventDefault();navigator.clipboard.writeText(pdf_link);}}
          >
            <BsLink45Deg />
            &nbsp;Copy Resume Link
          </Button>
        </Row>
      </Container>
    </div>
    </IconContext.Provider>
  )
}
