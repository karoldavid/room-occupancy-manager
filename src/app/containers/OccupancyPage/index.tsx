import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Row, Col, Divider, Layout, PageHeader } from 'antd';
import { useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { occupancySaga } from './saga';
import { RevenueDetails } from './RevenueDetails';
import { AvailableRooms, RoomType } from './types';
import { AvailableRoomsForm } from './AvailableRoomsForm';
import { revenueDetailsTitles } from './constants';

import { revenueDetailsData } from './mock/revenueDetailsData';

const { Footer, Content } = Layout;

const PREMIUM = RoomType.PREMIUM;
const ECONOMY = RoomType.ECONOMY;

export const OccupancyPage = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: occupancySaga });
  const dispatch = useDispatch();

  const onSubmitForm = (values: AvailableRooms) => {
    dispatch(actions.updateAvailableRoomsForm(values));
  };

  useEffect(() => {
    dispatch(actions.loadGuests());
  }, [dispatch]);

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
                <AvailableRoomsForm
                  title="Available Rooms"
                  onFinish={onSubmitForm}
                />
              </Col>
            </Row>
            <Divider
              orientation="left"
              style={{ color: '#333', fontWeight: 'normal' }}
            />
            <Row gutter={16}>
              <Col span={8}>
                <RevenueDetails
                  data={revenueDetailsData[PREMIUM]}
                  title={revenueDetailsTitles[PREMIUM]}
                />
              </Col>
              <Col span={8}>
                <RevenueDetails
                  data={revenueDetailsData[ECONOMY]}
                  title={revenueDetailsTitles[ECONOMY]}
                />
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footer>Credits</Footer>
      </Layout>
    </>
  );
};
