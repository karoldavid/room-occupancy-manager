import React, { useState } from 'react';
import { Form, InputNumber, Button } from 'antd';
import { Callbacks } from 'rc-field-form/es/interface';
import { Card } from 'antd';
import { AvailableRoomsFormValues, RoomType } from './types';
import { availableRoomsFormInputLabels } from './constants';

const premium = RoomType.PREMIUM;
const economy = RoomType.ECONOMY;

const premiumInputLabel = availableRoomsFormInputLabels[premium];
const economyInputLabel = availableRoomsFormInputLabels[economy];

interface AvailableRoomsFormProps {
  title: string;
  onFinish: Callbacks['onFinish'];
}

const initialFormState: AvailableRoomsFormValues = {
  [premium]: {
    value: 0,
  },
  [economy]: {
    value: 0,
  },
};

export const AvailableRoomsForm: React.FC<AvailableRoomsFormProps> = ({
  title,
  onFinish,
}) => {
  const [number, setNumber] = useState(initialFormState);

  const checkRoomNumber = (rule, value: number): Promise<void> => {
    if (Number.isInteger(value) && value >= 0) {
      return Promise.resolve();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('>= 0');
  };

  const onNumberChange = (name: string) => (
    value: string | number | undefined,
  ) => {
    if (typeof value === 'number') {
      setNumber({
        ...number,
        [name]: { value },
      });
    }
  };

  return (
    <Card title={title} bordered={false}>
      <Form name="customized_form_controls" onFinish={onFinish}>
        <Form.Item
          name={premium}
          label={premiumInputLabel}
          initialValue={0}
          rules={[
            {
              validator: checkRoomNumber,
            },
          ]}
        >
          <InputNumber
            type="number"
            min={0}
            max={999}
            value={number[premium].value}
            onChange={onNumberChange(premium)}
          />
        </Form.Item>
        <Form.Item
          name={economy}
          label={economyInputLabel}
          initialValue={0}
          rules={[
            {
              validator: checkRoomNumber,
            },
          ]}
        >
          <InputNumber
            type="number"
            min={0}
            max={999}
            value={number[economy].value}
            onChange={onNumberChange(economy)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
