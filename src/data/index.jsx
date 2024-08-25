import { SiMongodb, SiNextdotjs, SiAliexpress, SiCanva, SiNestjs, SiInstagram } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'
import {
   FaHtml5, FaCss3Alt,
  FaNodeJs, FaPython, FaFigma, FaAngular
} from 'react-icons/fa'
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReact, TbBrandMysql } from "react-icons/tb";
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import {project1,project2 } from '../assets/images'


export const menus = [
  { name: "Home" },
  { name: "About" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Contact" },
];


export const skills = [
  {
    category: "UI/UX",
    data: [
      { skill: "Figma", icon: <FaFigma /> },
      { skill: "Canva", icon: <SiCanva /> },

    ]
  },
  
  {
    category: "Frontend Development",
    data: [
      { skill: "HTML", icon: <FaHtml5 /> },
      { skill: "CSS", icon: <FaCss3Alt /> },
      { skill: "JavaScript", icon: <RiJavascriptFill /> },
      { skill: "Tailwind", icon: <RiTailwindCssFill /> },
      { skill: "Angular", icon: <FaAngular /> },
      { skill: "Next Js", icon: <SiNextdotjs /> },
      { skill: "React", icon: <TbBrandReact /> },

    ]
  },
  {
    category: "Backend Development",
    data: [
      { skill: "NodeJS", icon: <FaNodeJs /> },
      { skill: "NestJS", icon: <SiNestjs /> },
      { skill: "ExpressJS", icon: <SiAliexpress /> },
      { skill: "MongoDB", icon: <SiMongodb /> },
      { skill: "Python", icon: <FaPython /> },
      { skill: "MySQL", icon: <TbBrandMysql /> },

    ]
  },
  {
    category: "Data science",
    data: [
      {
        skill: "Stata"
      },
      {
        skill: "SurveyCTO"
      },
    ]
  },
  
]


export const projects = [
  {
    name: 'TutorMe',
    description: `A Tutor marketplace for home based learning.`,
    image: project1,
    url: 'https://github.com/Tparfaite/TutorMe-fn',
  },

  {
    name: 'GreatCart',
    description: `An e-commerce for different products`,
    image: project2,
    url: 'https://github.com/Tparfaite/GreatKart',
  },

];

export const socialHandles = [
  
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/Tparfaite"
  },
  {
    name: "LinkedIn",
    icon: <CiLinkedin />,
    link: "https://www.linkedin.com/in/parfaite-twagiramariya-32652924a/",
  },
  {
    name: "Instagram",
    icon: <SiInstagram />,
    link: "https://www.instagram.com/tparfaite82/",
  },
];


export const contactInfo = [
  {
    name: "Email",
    icon: <MdOutlineAlternateEmail />,
    value: "parfaitetwagira@gmail.com",
  },
  {
    name: "Phone",
    icon: <IoCallOutline />,
    value: "+250786022037",
  },
  {
    name: "Address",
    icon: <IoLocationOutline />,
    value: "Musanze, Rwanda",
  },
]

export const footer = [
  {
    group: "Quick Links",
    routes: [
      { name: "Home" },
      { name: "About" },
      { name: "Skills" },
      { name: "Projects" },
      { name: "Contact" },
    ]
  },
  {
    group: "Contacts",
    routes: [
      {
        name: "parfaitetwagira@gmail.com",
        icon: <MdOutlineAlternateEmail />,
      },
      {
        name: "+250786022037",
        icon: <IoCallOutline />,
      },
      {
        name: "Musanze, Rwanda",
        icon: <IoLocationOutline />,
      },
    ]
  },
]