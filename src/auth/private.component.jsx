"use client";

import { useRouter } from "next/navigation";
import Sidebar from "@/common/components/sidebar/sidebar.component";

export default function Private({ component }) {
  const user = getUser();
  const router = useRouter();

  // if (!getAccessToken() && !user) {
  //   if (typeof window === "object") {
  //     router.push("/login");
  //   }
  // }

  return <Sidebar component={component} />;
}