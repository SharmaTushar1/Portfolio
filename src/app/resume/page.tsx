'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SocialLoading from "../components/SocialLoading";

export default function Resume() {

  const router = useRouter();

  useEffect(() => {
    router.push('https://drive.google.com/file/d/130YjNiHslGljbkbQhc-wRpzn275d4-pV/view?usp=drive_link');
  });

  return (
    <div>
      <SocialLoading />
    </div>
  );
}