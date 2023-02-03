import { Fragment } from "react";
import { ResponsiveNavbar } from "../components/Navbar";

export function About() {
  let periodStyle = {
    color: "#000000",
    fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
  };

  let institutionStyle = {
    color: "#000000",
    fontWeight: "bold",
    fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
  };

  return (
    <Fragment>
      <div
        className="d-flex justify-content-center"
        style={{
          fontFamily:
            "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
        }}
      >
        <div>
          <img className="rounded-circle" src="https://picsum.photos/id/247/200" width={100} />
        </div>
        <div className="ms-2">
          <div style={{
            marginBottom: '50px'
          }}>
            <span className="h2">Rananda Dian Ilham</span>
            {", "}
            <span>27 years old</span>
          </div>
          <div>
            <p className="h5">Work Experience</p>
            <div className="">
              <p className="mb-0">
                <span style={periodStyle}>2000-2003</span>
                {" | "}
                <span style={institutionStyle}>Web Developer{", "}</span>
                <span style={institutionStyle}>Super company</span>
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
            </div>
          </div>
          <div>
            <p className="h5">Education</p>
            <p>
              <span style={periodStyle}>2000 - 2003</span>
              {" | "}
              <span style={institutionStyle}>University of Zimbabwe</span>
            </p>
            <p>Major in CompSci</p>
          </div>
          <div>
            <p className="h5">Contact</p>
            <p className="mb-0">Supermail@mail.com</p>
            <p className="mb-0">(+62) 812 xxxx xxxx</p>
            <p className="mb-0">Github</p>
            <p className="mb-0">
              <a href="_#">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
