import React from 'react';
import LinkedInIcon from './icons/LinkedinIcon';
import DribbbleIcon from './icons/DribbleIcon';
import TwitterIcon from './icons/TwitterIcon';

const SocialLink = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="border-t border-[#1C1D20] pt-8 flex items-center justify-between">
      <p className="text-sm text-gray-500">© {new Date().getFullYear()}</p>
      <div className="flex items-center space-x-6">
        <SocialLink href="https://linkedin.com">
          <LinkedInIcon className="w-5 h-5" />
        </SocialLink>
        <SocialLink href="https://dribbble.com">
          <DribbbleIcon className="w-5 h-5" />
        </SocialLink>
        <SocialLink href="https://twitter.com">
          <TwitterIcon className="w-5 h-5" />
        </SocialLink>
      </div>
    </footer>
  );
};

export default Footer;
