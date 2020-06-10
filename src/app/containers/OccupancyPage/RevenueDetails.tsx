import React from 'react';
import { Revenue } from './types';
import { Card } from 'antd';

export interface RevenueDetailsProps {
  data: Revenue;
  title: string;
}

export function RevenueDetails({ data, title }: RevenueDetailsProps) {
  return (
    <Card title={title} bordered={false}>
      <p>{`free: ${data.free}`}</p>
      <p>{`usage: ${data.usage}`}</p>
      <p>{`revenue: ${data.total} ${data.currency}`}</p>
    </Card>
  );
}
