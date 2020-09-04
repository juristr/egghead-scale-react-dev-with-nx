import { text } from '@storybook/addon-knobs';
import React from 'react';
import { Header, HeaderProps } from './header';

export default {
  component: Header,
  title: 'Header',
};

export const primary = () => {
  const props: HeaderProps = {
    title: text('title', ''),
  };

  return <Header title={props.title} />;
};
