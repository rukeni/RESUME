import { Component } from "solid-js";
import Profile from "./Profile";
import SidebarItem from "./SidebarItem";

const Sidebar: Component = () => {
  return (
    <aside
      id="sidebar"
      class="flex min-w-[330px] flex-col items-center justify-start bg-white leading-4 text-stone-500"
    >
      <Profile />
      <SidebarItem />
    </aside>
  );
};

export default Sidebar;
