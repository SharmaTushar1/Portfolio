import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col mt-auto">
      <div className="flex w-min-fit mx-auto">
        <Link href="https://www.linkedin.com/in/tusharsharma31" target="_blank">
          <Image className="px-2" width={48} height={48} src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn"/>
        </Link>
        <Link href="https://www.youtube.com/" target="_blank">
          <Image className="px-2" width={48} height={48} src={'https://img.icons8.com/color/48/youtube-play.png'} alt="YouTube" />
        </Link>
        <Link href="https://www.github.com/SharmaTushar1" target="_blank">
          <Image className="px-2" width={48} height={48} src="https://img.icons8.com/color/48/github.png" alt="GitHub"/>
        </Link>
        <Link href="mailto:sharmatushar0k@gmail.com" target="_blank">
          <Image className="px-2" width={48} height={48} src={'https://img.icons8.com/color/48/gmail-new.png'} alt="Gmail" />
        </Link>
        <Link href="https://www.twitter.com/SharmaTusharOne" target="_blank">
          <Image className="px-2" width={48} height={48} src="https://img.icons8.com/fluency/48/twitterx.png" alt="Twitter"/>
        </Link>
        <Link href="https://buymeacoffee.com/SharmaTusharOne" target="_blank">
          <Image className="px-2" width={48} height={48} src={'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-buy-me-a-coffee-help-creators-receive-support-from-their-audience-logo-color-tal-revivo.png'} alt="BuyMeACoffee" />
        </Link>
      </div>
      <div className="flex w-min-fit mx-auto">
      © {new Date().getUTCFullYear()} Tushar Sharma
      </div>
    </footer>
  );
}