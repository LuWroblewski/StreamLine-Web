import { ReactNode } from 'react';

type Props = {
  href: string;
  nameText: ReactNode;
  className: string;
};

export const ButtonSocialMedia = ({ href, nameText, className }: Props) => (
  <div>
    <a href={href} target='_blank'>
      <button className={className}>{nameText}</button>
    </a>
  </div>
);
