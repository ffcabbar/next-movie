import React from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

export interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input: React.FC<IInputProps> = (props) => {
  const { style, className, ...rest } = props;

  let _style: React.CSSProperties = style || {};

  return (
    <>
      <input className={cn(styles.input, className)} style={_style} {...rest} />
    </>
  );
};
