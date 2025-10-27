import { cva, type VariantProps } from "class-variance-authority";
import { Link, type LinkProps } from "react-router-dom";
import type { ReactNode } from "react";

const navLinkVariants = cva(
  "group relative py-3 px-4 cursor-none rounded-xl flex items-center transition-all duration-200 w-full min-h-[48px]",
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
  showLabelOnMobile?: boolean;
}

export function NavLink({
  children,
  icon,
  active,
  className,
  showLabelOnMobile = false,
  ...props
}: NavLinkProps) {
  return (
    <Link className={navLinkVariants({ active, className })} {...props}>
      <div
        className={`flex items-center ${
          icon && !showLabelOnMobile
            ? "sm:w-auto w-full justify-center"
            : "w-full"
        }`}
      >
        {icon && (
          <span className="transition-transform duration-200 group-hover:scale-110 flex-shrink-0">
            {icon}
          </span>
        )}
        <span
          className={`font-medium ${
            icon && !showLabelOnMobile ? "hidden sm:inline" : ""
          }`}
        >
          {children}
        </span>
      </div>
    </Link>
  );
}
