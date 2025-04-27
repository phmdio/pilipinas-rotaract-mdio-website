import React from 'react';

interface MarkdownLinkProps {
  href?: string;
  children?: React.ReactNode;
}

const MarkdownLink: React.FC<MarkdownLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:underline"
    >
      {children}
    </a>
  );
};

export default MarkdownLink; 