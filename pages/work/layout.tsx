import { Flex } from 'antd';
import Background from './components/Background';
import WorkNavbar from './components/WorkNavbar';
import WorkSidebar from './components/WorkSidebar';
import WorkMain from './components/WorkMain';
import WorkDetails from './components/WorkDetails';

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex className="max-w-screen">
      <div className="w-[10%]">
        <WorkSidebar />
      </div>
      <Flex vertical className="pl-20 w-[70%]">
        <WorkNavbar />
        <WorkMain />
      </Flex>
      <div className="w-[20%]">
        <WorkDetails />
      </div>
      <Background />
      <main>{children}</main>
    </Flex>
  );
}
