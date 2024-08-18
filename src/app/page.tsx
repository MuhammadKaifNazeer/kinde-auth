"use client";

import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { ThemeToggler } from "@/components/ThemeToggler/ThemeToggler";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <LoginLink>
        <Button>Sign in</Button>
      </LoginLink>
      <RegisterLink>
        <Button>Sign up</Button>    
      </RegisterLink>
    </div>
  );
}
