import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about us",
  },
  {
    id: 3,
    url: "/blog",
    text: "blog",
  },
  {
    id: 4,
    url: "/gallery",
    text: "gallery",
  },
  {
    id: 5,
    url: "/product",
    text: "product",
  },
  {
    id: 5,
    url: "/contact",
    text: "contact us",
  },
];

export const footerMenu = [
  {
    title: "about us",
    items: [
      {
        id: 1,
        url: "/",
        text: "about us",
      },
      {
        id: 2,
        url: "/",
        text: "more search",
      },
      {
        id: 3,
        url: "/",
        text: "blog",
      },
      {
        id: 4,
        url: "/",
        text: "testimonials",
      },
      {
        id: 5,
        url: "/",
        text: "events",
      },
    ],
  },
  {
    title: "helpful links",
    items: [
      {
        id: 1,
        url: "/",
        text: "about us",
      },
      {
        id: 2,
        url: "/",
        text: "more search",
      },
      {
        id: 3,
        url: "/",
        text: "blog",
      },
      {
        id: 4,
        url: "/",
        text: "testimonials",
      },
      {
        id: 5,
        url: "/",
        text: "events",
      },
    ],
  },
];

export const footerSocialIcons = [
  {
    id: 1,
    url: "https://www.facebook.com/rakib.arif39",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.google.com",
    icon: <FaGoogle />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 4,
    url: "https://www.instragram.com",
    icon: <FaInstagram />,
  },
];

export const callToAction = {
  title: "Programming is not a profession it's my passion",
  desc: "It is hard to have outstanding career growth in software development without a passion for it",
};
