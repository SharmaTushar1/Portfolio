'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SocialLoading from "../components/SocialLoading";

export default function LeetcodeAlt() {

  const router = useRouter();

  useEffect(() => {
    router.push('https://www.leetcode.com/sharmatushar1_');
  });

  return (
    <div>
      <SocialLoading />
    </div>
  );
}