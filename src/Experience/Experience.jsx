import React from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "./Experience.scss";

const Experience = () => {
  return (
    <div className="experience-section" id="experience">
      <h2>My Experience</h2>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="experience-viewer">
          <Row>
            <Col sm={4}>
              <div className="flex-container">
                <Nav className="flex-column nav-panel">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <li className="nav-title">Full Stack Developer</li>
                      <li>IBM</li>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <li className="nav-title">Software Developer</li>
                      <li>Ford Motor Co.</li>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <li className="nav-title">Software Developer</li>
                      <li>Ford Motor Co.</li>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="forth">
                      <li className="nav-title">Software Developer</li>
                      <li>Big River Technologies Inc.</li>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">
                      <li className="nav-title">Research Assistant</li>
                      <li>Grand River Cancer Center</li>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <Col sm={0.5} className="vl"></Col>
            <Col>
              <Tab.Content className="content-container">
                <Tab.Pane eventKey="first">
                  <div>
                    <h3>Full Stack Developer</h3>
                    <hr />
                    <p className="float-left">
                      <a href="https://www.ibm.com/ca-en/products/qradar-siem">
                        IBM
                      </a>
                    </p>
                    <p className="float-right">May 2021 - Aug. 2021</p>
                    <ul className="experience-bullets">
                      <li>
                        Developed a SIEM web app using a variety of technologies
                        including <span className="bold">React.js</span>,{" "}
                        <span className="bold">Sass</span>,{" "}
                        <span className="bold">Node.js</span>,{" "}
                        <span className="bold">Docker</span>,{" "}
                        <span className="bold">SQLite</span>, and{" "}
                        <span className="bold">NoSQL DBs</span>
                      </li>
                      <li>
                        Wrote Restful APIs in{" "}
                        <span className="bold">Node.js</span> for new and legacy
                        web applications while applying web development
                        engineering best practices
                      </li>
                      <li>
                        Designed and developed a data-heavy visualization report
                        to allow clients to view exported SIEM rules offline
                        using vanilla <span className="bold">HTML</span> and{" "}
                        <span className="bold">CSS</span>
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div>
                    <h3>Power Management Software Developer</h3>
                    <hr />
                    <p className="float-left">
                      <a href="https://www.ford.ca/">Ford Motor Co.</a>
                    </p>
                    <p className="float-right">Sept. 2020 - Dec. 2020</p>
                    <ul className="experience-bullets">
                      <li>
                        After returning to the same team for a second
                        consecutive term I was very experienced with the code
                        and brought forward major design decisions and
                        implemented critical new features while increasing code
                        stability and maintainability
                      </li>
                      <li>
                        Expanded unit test coverage by 25% using{" "}
                        <span className="bold">gtest</span> and{" "}
                        <span className="bold">gmock</span> frameworks within
                        first two weeks
                      </li>
                      <li>
                        Completely redesigned the team’s API to allow for
                        request status callbacks and a simplified use case based
                        requesting interface
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div>
                    <h3>Power Management Software Developer</h3>
                    <hr />
                    <p className="float-left">
                      <a href="https://www.ford.ca/">Ford Motor Co.</a>
                    </p>
                    <p className="float-right">Jan. 2020 - April. 2020</p>
                    <ul className="experience-bullets">
                      <li>
                        Produced large-scale, thread-safe and
                        performance-oriented software using{" "}
                        <span className="bold">C++</span> to manage data from
                        Controller Area Networks (
                        <span className="bold">CAN</span>) across three
                        Electronic Control Units (ECUs)
                      </li>
                      <li>
                        Used <span className="bold">VS Code</span> and{" "}
                        <span className="bold">Momentics</span> to developed
                        cross-platform code to run on{" "}
                        <span className="bold">Linux</span> and{" "}
                        <span className="bold">QNX</span> embedded systems
                      </li>
                      <li>
                        Delivered debugging tool which enabled CAN messaging,
                        resource state querying, and power states requests
                        during testing
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="forth">
                  <div>
                    <h3>Software Developer</h3>
                    <hr />
                    <p className="float-left">
                      <a href="https://bigrivertech.com/">
                        Big River Technologies Inc.
                      </a>
                    </p>
                    <p className="float-right">May. 2019 - Aug. 2019</p>
                    <ul className="experience-bullets">
                      <li>
                        Designed and built a <span className="bold">MySQL</span>{" "}
                        database to improve tracking of employee provisioning
                        and access management
                      </li>
                      <li>
                        Wrote clean code in{" "}
                        <span className="bold">JavaScript</span>,{" "}
                        <span className="bold">HTML</span>, and{" "}
                        <span className="bold">CSS</span> for the company’s
                        internal and external websites
                      </li>
                      <li>
                        Developed coding best practice and company standards
                        documentation
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <div>
                    <h3>Cancer Radiotherapy Research Assistant</h3>
                    <hr />
                    <p className="float-left">
                      <a href="https://www.grhosp.on.ca/care/services-departments/cancer/grrcc-information">
                        Grand River Regional Cancer Centre
                      </a>
                    </p>
                    <p className="float-right">Sept. 2019 - Mar. 2020</p>
                    <ul className="experience-bullets">
                      <li>
                        Worked with doctors and professors in a study to analyze
                        retrospective radiation therapy data for the
                        optimization of brain cancer treatment
                      </li>
                      <li>
                        Wrote <span className="bold">Python</span> scripts to
                        extract and visualize treatment plan data from radiation
                        modelling system
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </div>
      </Tab.Container>
    </div>
  );
};

export default Experience;
