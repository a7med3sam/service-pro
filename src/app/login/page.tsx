import { Suspense } from "react";
import LoginPage from "@/sections/login/view";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <LoginPage />
    </Suspense>
  );
}
