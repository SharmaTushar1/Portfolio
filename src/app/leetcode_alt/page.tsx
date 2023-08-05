'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LeetcodeAlt() {

  const router = useRouter();

  useEffect(() => {
    router.push('https://www.leetcode.com/sharmatushar1_');
  });

  return (
    <div>
    </div>
  );
}