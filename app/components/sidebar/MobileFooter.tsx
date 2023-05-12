"use client"

import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import useConversation from "@/app/hooks/useConversation";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  return (
    <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t lg:hidden">
          {routes.map((item) => (
            <MobileItem
              key={item.label}
              href={item.href}
              icon={item.icon}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
    </div>
  );
};

export default MobileFooter;