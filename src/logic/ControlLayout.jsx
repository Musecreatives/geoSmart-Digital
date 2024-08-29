"use client"

import { usePathname } from "next/navigation";

const ControlLayout = ({children}) => {
    const pathname = usePathname();
    const checkDashboardPath = pathname.split("/").includes("dashboard") || pathname.split("/").includes("login") || pathname.split("/").includes("register");

    return(
        <div>
            {
                !checkDashboardPath &&  children 
            }
        </div>
    );
}

export default ControlLayout;