import React from 'react';
import {  FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about me',
  },
  {
    id: 3,
    url: '/projects',
    text: 'my projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact me',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/noam.zingboim/',
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/noam-zingboim-999386209/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://github.com/NoamZingy',
    icon: <FaGithub />,
  },
];
