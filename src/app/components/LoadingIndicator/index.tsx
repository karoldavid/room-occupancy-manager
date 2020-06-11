import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
`;

const Center = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const LoadingIndicator = () => (
  <Overlay>
    <Center>
      <Spin size="large" />
    </Center>
  </Overlay>
);
