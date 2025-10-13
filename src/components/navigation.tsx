import { BackpackIcon, FileTextIcon, HomeIcon } from "@radix-ui/react-icons";
import { useLocation } from "react-router-dom";
import { NavLink } from "./nav-link";
import type { ReactNode } from "react";

interface Link {
  label: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
}

export function Navigation() {
  const location = useLocation();

  const navigation: Link[] = [
    { label: "Home", href: "/", icon: <HomeIcon className="w-5 h-5" /> },
    {
      label: "Experience",
      href: "/experience",
      icon: <BackpackIcon className="w-5 h-5" />,
    },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1HJnuWVqA5jNPIzvM-PZpnqATbT0De4gf/view?usp=sharing",
      icon: <FileTextIcon className="w-5 h-5" />,
      external: true,
    },
  ];

  return (
    <aside className="cursor-none fixed w-full xl:w-auto xl:min-w-72 xl:h-screen pt-4 xl:pt-10 bg-white/5 backdrop-blur-lg border-b xl:border-b-0 xl:border-r border-main-200/10 p-6 z-50">
      <nav>
        <ul className="flex flex-row xl:flex-col  lg:mt-4 gap-1 justify-center xl:justify-start">
          {navigation.map((n, index) => {
            const isActive = location.pathname === n.href;
            return (
              <li key={index}>
                <NavLink
                  target={n.external ? "_blank" : ""}
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
