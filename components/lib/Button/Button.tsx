import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';
export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: ButtonSize;
  variant?: ButtonVariant;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
type ButtonVariant = 'solid' | 'outline' | 'ghost';

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    children = 'Button',
    style,
    className,
    size = 'md',
    variant = 'solid',
    leftIcon,
    rightIcon,
    ...rest
  } = props;

  let _style: React.CSSProperties = style || {};

  /* Override Defaults */
  // if (color && _style) {
  //   _style.color = color;
  // }

  let buttonSize;
  if (size === 'xs') {
    buttonSize = styles.buttonXs;
  } else if (size === 'sm') {
    buttonSize = styles.buttonSm;
  } else if (size === 'md') {
    buttonSize = styles.buttonMd;
  } else {
    buttonSize = styles.buttonLg;
  }

  let buttonVariant;
  if (variant === 'solid') {
    buttonVariant = styles.buttonSolid;
  } else if (variant === 'outline') {
    buttonVariant = styles.buttonOutline;
  } else if (variant === 'ghost') {
    buttonVariant = styles.buttonGhost;
  }

  return (
    <button
      className={cn(
        styles.button,
        `${buttonSize}`,
        `${buttonVariant}`,
        className
      )}
      style={_style}
      {...rest}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};
