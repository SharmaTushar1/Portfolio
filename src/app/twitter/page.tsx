'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SocialLoading from "../components/SocialLoading";

export default function Twitter() {

  const router = useRouter();

  useEffect(() => {
    router.push('https://www.twitter.com/sharmatusharone');
  });

  return (
    <div>
      <SocialLoading />
    </div>
  );
}