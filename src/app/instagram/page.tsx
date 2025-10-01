'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SocialLoading from "../components/SocialLoading";

export default function Instagram() {

  const router = useRouter();

  useEffect(() => {
    router.push('https://www.instagram.com/hindwantushar');
  });

  return (
    <div>
      <SocialLoading />
    </div>
  );
}
