import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Row, Col, Divider, Layout, PageHeader } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { occupancySaga } from './saga';
import {
  selectLoading,
  selectAvailableRooms,
  selectRevenueRoom,
} from './selectors';
import { AvailableRooms, RoomType, RevenueRoomType } from './types';
import { getDetailsDataByCategory } from './helpers';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import { AvailableRoomsForm } from './AvailableRoomsForm';
import { RevenueDetails } from './RevenueDetails';
import { revenueDetailsTitles } from './constants';

const { Footer, Content } = Layout;

const PREMIUM = RoomType.PREMIUM;
const ECONOMY = RoomType.ECONOMY;

export const OccupancyPage = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: occupancySaga });

  const loading = useSelector(selectLoading);
  const availableRooms = useSelector(selectAvailableRooms);
  const revenueRoom = useSelector(selectRevenueRoom);

  const dispatch = useDispatch();

  const onSubmitForm = (values: AvailableRooms) => {
    dispatch(actions.loadGuests());
    dispatch(actions.updateAvailableRoomsForm(values));
  };

  return (
    <>
      <Helmet>
        <title>Occupancy Page</title>
        <meta name="description" content="Room Occupancy Manager" />
      </Helmet>
      <Layout>
        {loading && <LoadingIndicator />}
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
              <Col span={8}>
                <RevenueDetails
                  loading={loading}
                  title={revenueDetailsTitles[PREMIUM]}
                  data={getDetailsDataByCategory(PREMIUM)(
                    revenueRoom,
                    availableRooms,
                  )}
                />
              </Col>
              <Col span={8}>
                <RevenueDetails
                  loading={loading}
                  title={revenueDetailsTitles[ECONOMY]}
                  data={getDetailsDataByCategory(ECONOMY)(
                    revenueRoom,
                    availableRooms,
                  )}
                />
              </Col>
            </Row>
            <Divider
              orientation="left"
              style={{ color: '#333', fontWeight: 'normal' }}
            />
          </Content>
        </Layout>
        <Footer>Credits</Footer>
      </Layout>
    </>
  );
};
