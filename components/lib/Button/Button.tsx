import React from 'react';

export interface IButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export const ButtonPrimary: React.FC<IButtonProps> = (props) => {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
};
