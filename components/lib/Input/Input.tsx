import React from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

export interface IInputProps extends Omit<A, 'size'> {
  size?: InputSize;
  icon?: React.ReactElement;
}

type A = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type InputSize = 'xs' | 'sm' | 'md' | 'lg';

export const Input: React.FC<IInputProps> = (props) => {
  const { style, className, size = 'md', icon, ...rest } = props;

  let _style: React.CSSProperties = style || {};

  let inputSize;
  if (size === 'xs') {
    inputSize = styles.inputXs;
  } else if (size === 'sm') {
    inputSize = styles.inputSm;
  } else if (size === 'md') {
    inputSize = styles.inputMd;
  } else {
    inputSize = styles.inputLg;
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={cn(styles.input, `${inputSize}`, className)}
        style={_style}
        {...rest}
      />
      {icon && <span>{icon}</span>}
    </div>
  );
};
