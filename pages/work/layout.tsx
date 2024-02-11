import WorkSidebar from './components/WorkSidebar';

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WorkSidebar />
      <main>{children}</main>
    </>
  );
}
