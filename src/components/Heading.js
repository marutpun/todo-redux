import React from 'react';

export default function Heading({ children, align }) {
  return <h1 className={`uk-text-${align}`}>{children}</h1>;
}
