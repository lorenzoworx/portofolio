import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as Fa6Icons from 'react-icons/fa6';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const navData = [
  {
    id: "1",
    icon: <FaIcons.FaHome />,
    label: "Home",
    link: "/",
  },
  {
    id: "2",
    icon: <IoIcons.IoIosInformationCircle className='menu-icon' />,
    label: "About",
    link: "/about",
  },
  {
    id: "3",
    icon: <Fa6Icons.FaLaptopCode className='menu-icon' />,
    label: "Projects",
    link: "/projects",
  },
  {
    id: "4",
    icon: <MdIcons.MdContactMail />,
    label: "Contact",
    link: "/contact",
  },
];