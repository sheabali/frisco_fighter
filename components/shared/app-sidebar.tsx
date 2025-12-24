"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "@/src/assets/logo.png";
import {
  HandCoins,
  Home,
  InfoIcon,
  LayoutDashboard,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  user: {
    navMain: [
      {
        title: "Dashboard",
        url: "/user",
        icon: LayoutDashboard,
      },
      {
        title: "Your Profile",
        url: "/user/dashboard/profile",
        icon: User,
      },
      {
        title: "Go Back To Home",
        url: "/",
        icon: Home,
      },
    ],
  },

  admin: {
    navMain: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Members",
        url: "/user/dashboard/members",
        icon: HandCoins,
        items: [
          {
            title: "Events",
            url: "/user/dashboard/events",
            icon: Users,
          },
          {
            title: "Notifications",
            url: "/user/dashboard/notifications",
            icon: InfoIcon,
          },
        ],
      },
      {
        title: "Your Profile",
        url: "/user/dashboard/profile",
        icon: User,
      },
      {
        title: "Go Back To Home",
        url: "/",
        icon: Home,
      },
    ],
  },
};

interface AppSidebarProps {
  role: string;
}

export default function AppSidebar({ role, ...props }: AppSidebarProps) {
  const sidebarData = data[role?.toLowerCase() as keyof typeof data];

  return (
    <Sidebar
      collapsible="icon"
      className="w-64 bg-white border-r border-blue-200"
      {...props}
    >
      <SidebarHeader>
        <Link
          href={"/"}
          className="flex items-center w-full max-h-40 justify-center"
        >
          <Image
            src={Logo.src}
            alt="Logo"
            width={300}
            height={300}
            className="size-auto "
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData?.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
