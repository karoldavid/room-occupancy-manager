import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Row, Col, Divider, Layout, PageHeader } from 'antd';
const { Footer, Content } = Layout;

export const OccupancyPage = () => {
  return (
    <>
      <Helmet>
        <title>Occupancy Page</title>
        <meta name="description" content="Room Occupancy Manager" />
      </Helmet>
      <Layout>
        <PageHeader
          className="site-page-header"
          title="Room Occupation Manager"
          subTitle="Calculate the number of guests and revenue"
        />
        <Divider
          orientation="left"
          style={{ color: '#333', fontWeight: 'normal' }}
        />
        <Layout>
          <Content style={{ padding: '0 50px' }}>
            <Row gutter={16}>
              <Col className="gutter-row" span={8}>
                Room Occupancy Form Component
              </Col>
            </Row>
            <Divider
              orientation="left"
              style={{ color: '#333', fontWeight: 'normal' }}
            />
            <Row gutter={16}>
              <Col span={8}>Revenue Details Component - Premium</Col>
              <Col span={8}>Revenue Details Component - Economy</Col>
            </Row>
          </Content>
        </Layout>
        <Footer>Credits</Footer>
      </Layout>
    </>
  );
};
