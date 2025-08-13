'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SocialLoading from "../components/SocialLoading";

export default function Youtube() {

  const router = useRouter();

  useEffect(() => {
    router.push('https://www.youtube.com/Sharmatushar1-yt');
  });

  return (
    <div>
      <SocialLoading />
    </div>
  );
}
