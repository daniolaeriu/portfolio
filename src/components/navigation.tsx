import { BackpackIcon, FileTextIcon, HomeIcon } from "@radix-ui/react-icons";
import { useLocation } from "react-router-dom";
import { NavLink } from "./nav-link";

export function Navigation() {
  const location = useLocation();

  const navigation = [
    { label: "Home", href: "/index", icon: <HomeIcon className="w-5 h-5" /> },
    {
      label: "Experience",
      href: "/experience",
      icon: <BackpackIcon className="w-5 h-5" />,
    },
    {
      label: "Resume",
      href: "/resume",
      icon: <FileTextIcon className="w-5 h-5" />,
    },
  ];

  return (
    <aside className="w-64 h-screen pt-10 bg-white/5 backdrop-blur-lg border-r border-main-200/50 p-6">
      <nav>
        <ul className="flex flex-col gap-1">
          {navigation.map((n, index) => {
            const isActive = location.pathname === n.href;
            return (
              <li key={index}>
                <NavLink to={n.href} active={isActive} icon={n.icon}>
                  {n.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
