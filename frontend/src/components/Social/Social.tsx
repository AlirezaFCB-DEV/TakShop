"use client";

import Link from "next/link";
import { socialProps } from "../Footer/SocialData";

const Social = ({ href, icon }: socialProps) => {
  return <Link href={href}>{icon}</Link>;
};

export default Social;
