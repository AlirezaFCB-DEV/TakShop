import { MdOutlineLocationOn, MdOutlineMail, MdOutlinePhone } from "react-icons/md";

export interface ShopInfoProps {
  title: string;
  icon: React.ReactNode;
  data: string;
}

export const ShopInfos: ShopInfoProps[] = [
  {
    title: "پست الکترونیکی",
    icon: <MdOutlineMail className="shop-info_icon"/>,
    data: "takshoppp@gmail.com",
  },
  {
    title: "آدرس",
    icon: <MdOutlineLocationOn className="shop-info_icon"/>,
    data: "تهران - ولیعصر - پلاک 188",
  },
  {
    title: "تلفن",
    icon: <MdOutlinePhone className="shop-info_icon"/>,
    data: "021-12345678",
  },
];
