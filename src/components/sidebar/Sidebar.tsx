import { Component } from 'solid-js';
import Profile from './Profile';
import SidebarItem from './SidebarItem';

const Sidebar: Component = () => {
	return (
		<aside id='sidebar' class='w-[330px] leading-4 bg-white text-stone-500 flex flex-col justify-start items-center'>
			<Profile />
      <SidebarItem />
		</aside>
	);
};

export default Sidebar;
