"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
    const route = useRouter();
    useEffect(() => {
        route.push("/dashboard/home");
    }, [route]);

    return null;
}

export default DashboardPage;
