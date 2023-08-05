// ? This is the component that will render when someone will visit my profile
// ? So say I did sharmatushar1.com/linkedin the thing is that I'm using react useEffect and useRouter for that
// ? So it will unfortunately render the page first and even some other way I think it will always render the page so the navbar will be visible always.
// ? So to avoid it what we can do is render this page as loading component and make it cover everything till the page laods.
import './SocialLoading.css';

export default function SocialLoading() {
  return (
    <div className=''>
      <div className="w-screen h-screen bg-zinc-50 dark:bg-zinc-950 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col">
        <div className='w-fit h-fit'>
          <div className="loader"></div>
        </div>
        <div>
          Thanks for tuning in!!
        </div>
        <div className="flex w-min-fit mx-auto z-20 text-zinc-950 dark:text-zinc-50 absolute bottom-4">
        © {new Date().getUTCFullYear()} Tushar Sharma
        </div>
      </div>
    </div>
  );
}