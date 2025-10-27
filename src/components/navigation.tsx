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
      href: "https://drive.google.com/file/d/1HlfbvHXkCrCm1XUDlybaR9x-G_dE5Sog/view?usp=sharing",
      icon: <FileTextIcon className="w-5 h-5" />,
      external: true,
    },
  ];

  return (
    <aside className="cursor-none rounded-tr-lg z-[100] fixed w-full xl:w-20 xl:h-screen pt-2 xl:pt-6 bg-white/5 backdrop-blur-lg border-b xl:border-b-0 xl:border-r border-main-200/10 p-3 xl:p-4">
      <nav>
        <ul className="flex flex-row xl:flex-col gap-2 justify-center xl:justify-start">
          {navigation.map((n, index) => {
            const isActive = location.pathname === n.href;
            return (
              <li key={index} className="group relative">
                <NavLink
                  target={n.external ? "_blank" : ""}
                  to={n.href}
                  active={isActive}
                  icon={n.icon}
                  className="flex items-center justify-center w-12 h-12 rounded-lg transition-all"
                >
                  <span className="sr-only">{n.label}</span>
                </NavLink>

                <span className="absolute left-full ml-2 px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden xl:block">
                  {n.label}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
