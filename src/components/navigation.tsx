import { BackpackIcon, FileTextIcon, HomeIcon } from "@radix-ui/react-icons";
import { useLocation } from "react-router-dom";
import { NavLink } from "./nav-link";

export function Navigation() {
  const location = useLocation();

  const navigation = [
    { label: "Home", href: "/", icon: <HomeIcon className="w-5 h-5" /> },
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
    <aside className="cursor-none fixed md:min-w-72 w-full md:w-auto md:h-screen  md:pt-10 pt-4 bg-white/5 backdrop-blur-lg md:border-r border-b md:border-b-0 border-main-200/10 p-6 md:p-6 p-4 z-50">
      <nav>
        <ul className="flex md:flex-col flex-row mt-4 md:mt-4 gap-1 md:gap-1  justify-center md:justify-start">
          {navigation.map((n, index) => {
            const isActive = location.pathname === n.href;
            return (
              <li key={index}>
                <NavLink
                  className="p-4"
                  to={n.href}
                  active={isActive}
                  icon={n.icon}
                >
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
