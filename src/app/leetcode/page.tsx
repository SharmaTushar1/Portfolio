'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Leetcode() {

  const router = useRouter();

  useEffect(() => {
    router.push('https://www.leetcode.com/sharmatushar1');
  });

  return (
    <div>
    </div>
  );
}