'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SocialLoading from "../components/SocialLoading";

export default function Linkedin() {

  const router = useRouter();

  useEffect(() => {
    router.push('https://www.linkedin.com/in/tusharsharma31');
  });

  return (
    <div>
      {/* <SocialLoading /> */}
    </div>
  );
}