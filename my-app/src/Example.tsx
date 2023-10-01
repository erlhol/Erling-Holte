import React from 'react';

interface Props {
  message: string;
}

const Example: React.FC<Props> = ({ message }) => {
  return <div>{message}</div>;
};

export default Example;