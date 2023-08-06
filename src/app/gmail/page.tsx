'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SocialLoading from "../components/SocialLoading";

export default function Gmail() {

  const router = useRouter();

  useEffect(() => {
    router.push('mailto:Sharmatushar0k@gmail.com');
  });

  return (
    <div>
      <SocialLoading />
    </div>
  );
}