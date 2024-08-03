import Link from "./Link";
function Sidebar() {
  const links = [
    { label: "Accordion", path: "/" },
    { label: "Dropdown", path: "/dropdown" },
    { label: "Button", path: "/button" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/counter" },
  ];
  const renderLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-auto flex flex-col items-start">
      {renderLinks}
    </div>
  );
}
export default Sidebar;
