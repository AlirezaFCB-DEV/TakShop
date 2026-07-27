import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { BsSmartwatch } from "react-icons/bs";
import { CiHeadphones, CiHeart, CiMobile3 } from "react-icons/ci";
import { IoIosGitNetwork } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { LiaLaptopSolid } from "react-icons/lia";

interface CategoriesProps {
    id: number;
    title: string;
    icon: React.ReactNode;
}

type CategoriesItems = CategoriesProps[];

const Categories : CategoriesItems = [
    {
      id: 1,
      title: "موبایل",
      icon: <CiMobile3 />,
    },
    {
      id: 2 ,
      title: "لپتاپ",
      icon: <LiaLaptopSolid className="category-title_icon" />,
    },
    {
      id: 3,
      title: "لوازم جانبی لپتاپ",
      icon: <IoGameControllerOutline className="category-title_icon" />,
    },
    {
      id: 4,
      title: "هدست و هدفون",
      icon: <CiHeadphones className="category-title_icon" />,
    },
    {
      id: 5,
      title: "دوربین",
      icon: <AiOutlineCamera className="category-title_icon" />,
    },
    {
      id: 6,
      title: "اینترنت",
      icon: <IoIosGitNetwork className="category-title_icon" />,
    },
    { 
      id: 7,
      title: "ساعت هوشمند",
      icon: <BsSmartwatch className="category-title_icon" />,
    },
  ];

export default Categories