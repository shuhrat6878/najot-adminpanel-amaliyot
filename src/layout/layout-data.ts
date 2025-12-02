import { Calendar, Home, Inbox, Search, Settings,Camera, } from "lucide-react"

export const links = {
    admin: [
        {
            title: "Home",
            url: "/app/admin",
            icon: Home,
        },
        {
            title: "Teacher",
            url: "/app/admin/teacher",
            icon: Inbox,
        },
        {
            title: "Calendar",
            url: "#",
            icon: Calendar,
        },
        {
            title: "Search",
            url: "#",
            icon: Search,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
    ],
    teacher:[
        {
            title: "Home",
            url: "#",
            icon: Home,
        },
        {
            title: "Camera",
            url: "#",
            icon: Camera,
        },
    ]
    
}