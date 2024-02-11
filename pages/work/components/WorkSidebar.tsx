import { Flex } from 'antd';
import React from 'react';
import MusicPlayer from './MusicPlayer';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useRouter } from 'next/router';
import useStore from '@/store/store';

const WorkSidebar = () => {
  const router = useRouter();
  const { page } = useStore();
  return (
    <>
      <Flex
        vertical
        className="bg-red-900/5 hover:bg-black/10 text-white h-screen w-40 z-10 fixed"
      >
        <Flex vertical className="h-1/2 w-40" justify="space-between">
          <div className="relative top-28">
            <div className="-rotate-90 text-3xl text-right">{page}</div>
          </div>
          <div
            className="text-center w-full cursor-pointer"
            onClick={() => router.back()}
          >
            <KeyboardBackspaceIcon className="text-6xl" />
          </div>
        </Flex>
        {/* <div className="h-1/2"></div> */}
        <Flex
          align="end"
          className="h-1/2 text-xs relative bottom-2"
          justify="center"
        >
          <MusicPlayer />© {new Date().getFullYear()} Tushar Sharma
        </Flex>
      </Flex>
    </>
  );
};

export default WorkSidebar;
