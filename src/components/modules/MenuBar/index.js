import React, { useState, useEffect } from "react";
import Sidebar from "react-sidebar";

const mql = window.matchMedia(`(min-width: 800px)`);

const MenuBar = ({ children, sideContent }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  const mediaQueryChanged = () => {
    setSidebarOpen(false);
    setSidebarDocked(mql.matches);
  };
  useEffect(() => {
    mql.addEventListener("change", mediaQueryChanged);
  }, []);

  return (
    <div>
      <Sidebar
        sidebar={sideContent}
        open={sidebarOpen}
        docked={sidebarDocked}
        onSetOpen={onSetSidebarOpen}
      >
        {children}
      </Sidebar>
    </div>
  );
};

export default MenuBar;
