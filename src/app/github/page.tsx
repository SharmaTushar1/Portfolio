'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SocialLoading from "../components/SocialLoading";

export default function Github() {

  const router = useRouter();

  useEffect(() => {
    router.push('https://www.github.com/sharmatushar1');
  });

  return (
    <div>
      <SocialLoading />
    </div>
  );
}