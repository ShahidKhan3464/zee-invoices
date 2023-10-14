import { useRouter } from "next/navigation";
import { getUser } from "@/common/utils/users.util";

export default function OnlyPublic({ component }) {
  const user = getUser();
  const router = useRouter();

  if (user && user.id_token) {
    if (typeof window === "object") {
      router.push("/dashboard");
    }
  }

  return <div>{component}</div>;
}