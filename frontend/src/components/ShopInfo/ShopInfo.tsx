"use client";

import { ShopInfoProps } from "../Footer/ShopInfoData";

const ShopInfo = ({ title, icon, data }: ShopInfoProps) => {
  return (
    <section>
      <section className="flex items-center gap-1">
        {icon}
        <h3 className="desktop-heading3">{title}</h3>
      </section>
      <p>{data}</p>
    </section>
  );
};

export default ShopInfo;
