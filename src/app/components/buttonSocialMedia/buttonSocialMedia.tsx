import { ReactNode } from 'react';

type Props = {
  nameText: ReactNode;
  className: string;
};

export const ButtonSocialMedia = ({ nameText, className }: Props) => (
  <div>
    <button className={className}>{nameText}</button>
  </div>
);
