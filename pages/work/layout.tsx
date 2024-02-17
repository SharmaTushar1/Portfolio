import Background from './components/Background';
import WorkNavbar from './components/WorkNavbar';
import WorkSidebar from './components/WorkSidebar';

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WorkSidebar />
      <WorkNavbar />
      <Background />
      <main>{children}</main>
    </>
  );
}
