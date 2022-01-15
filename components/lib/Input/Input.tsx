import React from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

export interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  sizeOfInput?: InputSize;
}

type InputSize = 'xs' | 'sm' | 'md' | 'lg';

export const Input: React.FC<IInputProps> = (props) => {
  const { style, className, sizeOfInput = 'md', ...rest } = props;

  let _style: React.CSSProperties = style || {};

  let inputSize;
  if (sizeOfInput === 'xs') {
    inputSize = styles.inputXs;
  } else if (sizeOfInput === 'sm') {
    inputSize = styles.inputSm;
  } else if (sizeOfInput === 'md') {
    inputSize = styles.inputMd;
  } else {
    inputSize = styles.inputLg;
  }

  return (
    <>
      <input
        className={cn(styles.input, `${inputSize}`, className)}
        style={_style}
        {...rest}
      />
    </>
  );
};
