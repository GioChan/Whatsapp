import React from 'react';
import styled from 'styled-components';
import StatusListItem from './StatusListItem';
import { statusItems } from '../data/statusItems';

const StyledList = styled.div`
  padding: 0;
  margin: 0;
`;

const StatusList = () => {
  return (
    <StyledList>
      {statusItems.map((item) => (
        <StatusListItem key={item.id} {...item} />
      ))}
      <StatusListItem />
    </StyledList>
  );
};

export default StatusList;
