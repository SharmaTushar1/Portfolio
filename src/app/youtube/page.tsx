'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SocialLoading from "../components/SocialLoading";

export default function Youtube() {

  const router = useRouter();

  useEffect(() => {
    router.push('https://www.youtube.com/');
  });

  return (
    <div>
      <SocialLoading />
    </div>
  );
}