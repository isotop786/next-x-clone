import Image from "next/image"
import logo from '../public/assets/twitter_logo.png'
import SidebarMenuItem from "./SidebarMenuItem"
import {HomeIcon} from '@heroicons/react/solid'
import {BellIcon} from '@heroicons/react/outline'
import {HashtagIcon} from '@heroicons/react/outline'
import {InboxIcon} from '@heroicons/react/outline'
import {BookmarkIcon} from '@heroicons/react/outline'
import {ClipboardIcon} from '@heroicons/react/outline'
import {UserIcon} from '@heroicons/react/outline'
import {DotsCircleHorizontalIcon} from '@heroicons/react/outline'
import {DotsHorizontalIcon} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
        {/* Logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100">
            <Image src={logo} width={0} height={0} className="w-auto h-auto"/>
        </div>
        {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-start xl:space-y-2">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
            <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
            <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
            <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
            <SidebarMenuItem text="Profile" Icon={UserIcon}/>
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
        </div>
        
        {/* Button */}
        <button className="bg-blue-400 my-4 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
        
        {/* Mini-Profile */}
        <div className="flex items-center hoverEffect justify-center xl:justify-start mt-auto">
            <img 

            alt="users_profile_img"  className="w-10 h-10 rounded-full xl:mr-2" src="https://www.upwork.com/profile-portraits/c1TOGYyOsTYunWelF4ngv7uotqGRDKT9nIQymnMHytl7kkQsNOY0hIvZpEI83jpPmi"/>
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">Maruf</h4>
                <p className="text-gray-500">@marufkbr</p>
            </div>
            <div>
                <DotsHorizontalIcon className="h-3 xl:ml-2 hidden xl:inline"/>
            </div>
        </div>

    </div>
  )
}

export default Sidebar