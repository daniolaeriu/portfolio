import { cva, type VariantProps } from "class-variance-authority";
import { Link, type LinkProps } from "react-router-dom";
import type { ReactNode } from "react";

const navLinkVariants = cva(
  "group relative px-4 py-3 gap-3 rounded-xl flex items-center transition-all duration-200 w-full",
  {
    variants: {
      active: {
        true: "bg-gradient-to-r from-main-500 to-main-600 text-white shadow-lg shadow-main-500/30",
        false: "text-white hover:bg-main-50 hover:text-main-600",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export interface NavLinkProps
  extends LinkProps,
    VariantProps<typeof navLinkVariants> {
  children: ReactNode;
  icon?: ReactNode;
}

export function NavLink({
  children,
  icon,
  active,
  className,
  ...props
}: NavLinkProps) {
  return (
    <Link className={navLinkVariants({ active, className })} {...props}>
      {icon && (
        <span className="transition-transform duration-200 group-hover:scale-110">
          {icon}
        </span>
      )}
      <span className="font-medium">{children}</span>
      {active && (
        <span className="absolute right-4 w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
      )}
    </Link>
  );
}
