import React from 'react';
// import cn from 'classnames';
// import styles from './Button.module.scss';

export interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input: React.FC<IInputProps> = () => {
  return (
    <>
      <input />
    </>
  );
};
