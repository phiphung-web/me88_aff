import Sidebar from "../overview/Sidebar";

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-12 md:col-span-9">{children}</div>
      </div>
    </div>
  );
}
