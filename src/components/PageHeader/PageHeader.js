import React from 'react';
import cssModule from 'react-css-modules';
import styles from './PageHeader.css';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import {
    Route,
    Link,
} from 'react-router-dom'
class PageHeaderBar extends React.Component {
  static propTypes = {

  }
  render () {
      return (<Grid className="" fluid>
          <Row className="">
              <Col lg={4} md={2} sm={6}>
                  <PageHeader className="header-container">
                      <Link to="/">DEMO Streaming</Link>
                  </PageHeader>
              </Col>
              <Col lg={2} md={2} sm={2}>
                  Log in
              </Col>
              <Col lg={2} md={2} sm={2}>
                  Start your free trial
              </Col>
          </Row>
          <Row className="">
              <PageHeader className="sub-header-container">
                  <Link to="/">
                      <small>Popular Titles</small>
                  </Link>
              </PageHeader>
          </Row>
      </Grid>);
  }
}

export default cssModule(PageHeaderBar, styles);
