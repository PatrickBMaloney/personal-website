import React from "react";
import Tab from 'react-bootstrap/Tab';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import classes from "./Experience.css";

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
                                            <li className="nav-title">Software Developer</li>
                                            <li>Ford Motor Co.</li>
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
                                            <li>Big River Technologies Inc.</li>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="forth">
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
                                    <h4>Power Management Software Developer</h4>
                                    <hr/>
                                    <p className="float-left"><a href="https://www.ford.ca/">Ford Motor Co.</a></p>
                                    <p className="float-right">Sept. 2020 - Dec. 2020</p>
                                    <ul className="experience-bullets">
                                        <li>After returning to the same team for a second consecutive term I was very experienced with the code and brought forward major design decisions and implemented critical new features while increasing code stability and maintainability</li>
                                        <li>Expanded unit test coverage by 25% using <span className="bold">gtest</span> and <span className="bold">gmock</span> frameworks within first two weeks</li>
                                        <li>Completely redesigned the team’s API to  allow for request status callbacks and a simplified use case based requesting interface</li>
                                    </ul>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div>
                                    <h4>Power Management Software Developer</h4>
                                    <hr/>
                                    <p className="float-left"><a href="https://www.ford.ca/">Ford Motor Co.</a></p>
                                    <p className="float-right">Jan. 2020 - April. 2020</p>
                                    <ul className="experience-bullets">
                                        <li>Produced large-scale, thread-safe and performance-oriented software using <span className="bold">C++</span> to manage data from Controller Area Networks (<span className="bold">CAN</span>) across three Electronic Control Units (ECUs)</li>
                                        <li>Used <span className="bold">VS Code</span> and <span className="bold">Momentics</span> to developed cross-platform code to run on <span className="bold">Linux</span> and <span className="bold">QNX</span> embedded systems</li>
                                        <li>Delivered debugging tool which enabled CAN messaging, resource state querying, and power states requests during testing</li>
                                    </ul>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div>
                                    <h4>Software Developer</h4>
                                    <hr/>
                                    <p className="float-left"><a href="https://bigrivertech.com/">Big River Technologies Inc.</a></p>
                                    <p className="float-right">May. 2019 - Aug. 2019</p>
                                    <ul className="experience-bullets">
                                        <li>Designed and built a <span className="bold">MySQL</span> database to improve tracking of employee provisioning and access management</li>
                                        <li>Wrote clean code in <span className="bold">JavaScript</span>, <span className="bold">HTML</span>, and <span className="bold">CSS</span> for the company’s internal and external websites</li>
                                        <li>Developed coding best practice and company standards documentation</li>
                                    </ul>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="forth">
                                <div>
                                    <h4>Cancer Radiotherapy Research Assistant</h4>
                                    <hr/>
                                    <p className="float-left"><a href="https://www.grhosp.on.ca/care/services-departments/cancer/grrcc-information">Grand River Regional Cancer Centre</a></p>
                                    <p className="float-right">Sept. 2019 - Mar. 2020</p>
                                    <ul className="experience-bullets">
                                        <li>Worked with doctors and professors in a study to analyze retrospective radiation therapy data for the optimization of brain cancer treatment</li>
                                        <li>Wrote <span className="bold">Python</span> scripts to extract and visualize treatment plan data from radiation modelling system</li>
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
}

export default Experience;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     display: 'flex',
//     height: 224,
//   },
//   tabs: {
//     borderRight: `1px solid ${theme.palette.divider}`,
//   },
// }));

// export default function Experience() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         className={classes.tabs}
//       >
//         <Tab label="Item One" {...a11yProps(0)} />
//         <Tab label="Item Two" {...a11yProps(1)} />
//         <Tab label="Item Three" {...a11yProps(2)} />
//         <Tab label="Item Four" {...a11yProps(3)} />
//         <Tab label="Item Five" {...a11yProps(4)} />
//         <Tab label="Item Six" {...a11yProps(5)} />
//         <Tab label="Item Seven" {...a11yProps(6)} />
//       </Tabs>
//       <TabPanel value={value} index={0}>
//         Item One Inner
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Item Four
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         Item Five
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         Item Six
//       </TabPanel>
//       <TabPanel value={value} index={6}>
//         Item Seven
//       </TabPanel>
//     </div>
//   );
// }
