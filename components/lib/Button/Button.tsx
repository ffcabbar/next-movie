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
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    children = 'Button',
    className,
    size = 'md',
    variant = 'primary',
    leftIcon,
    rightIcon,
    ...rest
  } = props;

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
  if (variant === 'primary') {
    buttonVariant = styles.buttonPrimary;
  } else if (variant === 'secondary') {
    buttonVariant = styles.buttonSecondary;
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
      {...rest}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};
