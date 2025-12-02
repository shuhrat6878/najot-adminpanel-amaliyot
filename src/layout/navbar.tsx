import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


import { links } from "./layout-data"
import { Link } from "react-router-dom"
import tutor from "@/assets/tutor-icon.svg"
import { ActiveLink } from "@/components/ui/active-link"




export function AppSidebar({ role }: { role: "admin" | "teacher"}) {
  return (
    <Sidebar>
      <SidebarHeader className="p-3" >  
        <Link to={`/app/${role}{data, isLoading}`} className="w-30 m-5" > 
        <img src={tutor} alt="tutor" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupContent className="p-0">
            <SidebarMenu>
              {links[role].map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <ActiveLink  href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </ActiveLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}