import React from 'react';
import { Revenue } from './types';
import { Card, Skeleton } from 'antd';

export interface RevenueDetailsProps {
  data: Revenue;
  title: string;
  loading?: boolean;
}

const Content = ({ free, usage, total, currency }: Revenue) => (
  <>
    <p>{`Free: ${free}`}</p>
    <p>{`Usage: ${usage}`}</p>
    <p>{`Revenue: ${total} ${currency}`}</p>
  </>
);

export function RevenueDetails({ loading, title, data }: RevenueDetailsProps) {
  return (
    <Card title={title} bordered={false}>
      <Skeleton loading={loading} active>
        <Content {...data} />
      </Skeleton>
    </Card>
  );
}
