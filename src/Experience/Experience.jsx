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
                        <Col sm={3}>
                            <div className="flex-container">
                                <Nav className="flex-column nav-panel">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                        <Col sm={0.5} className="vl"></Col>
                        <Col>
                        <Tab.Content className="content-container">
                            <Tab.Pane eventKey="first">
                                <div>
                                    <h4>Power Management Software Developer - Ford</h4>
                                    <hr/>
                                    <p>Sept. 2020 - Dec. 2020</p>
                                    <ul>
                                        <li>the ejanf sja dja the a wehst.</li>
                                        <li>the ejanf sja dja the a wehst.</li>
                                        <li>the ejanf sja dja the a wehst.</li>
                                    </ul>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div>
                                    <h4>Power Management Software Developer - Ford</h4>
                                    <hr/>
                                    <p>Jan. 2020 - April 2020</p>
                                    <ul>
                                        <li>the ejanf sja dja the a wehst.</li>
                                        <li>the ejanf sja dja the a wehst.</li>
                                        <li>the ejanf sja dja the a wehst.</li>
                                    </ul>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div>
                                    <h4>Software Developer - Big River Technologies Inc.</h4>
                                    <hr/>
                                    <p>May. 2019 - Aug. 2019</p>
                                    <ul>
                                        <li>the ejanf sja dja the a wehst.</li>
                                        <li>the ejanf sja dja the a wehst.</li>
                                        <li>the ejanf sja dja the a wehst.</li>
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
