import type React from "react"
import { Link, useLocation } from "react-router-dom"


export const ActiveLink = ({ children, href, }:
    { href: string, 
        children: React.ReactNode, 
        
    }) => {
    const location = useLocation()

    return (
        <Link className={`${location.pathname ===href? "bg-amber-400" : ""} flex items-center gap-3 p-3`} to={href}>
            {children}
        </Link>
    )
}