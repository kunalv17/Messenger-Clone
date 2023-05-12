"use client";

import Link from "next/link";

import clsx from "clsx";

interface DesktopItemProps {
  href: string;
  label: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  href,
  label,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          `
        group
        flex
        gap-x-3
        rounded-md
        items-center
        p-3
        leading-6
        text-sm
        font-semibold
        text-gray-500
        hover:text-black
        hover:bg-gray-100
      `,
          active && `bg-gray-100 text-black`
        )}
      >
        <Icon className="w-6 h-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
