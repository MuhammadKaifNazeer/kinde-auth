"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoginLink>
        <Button>Sign in</Button>
      </LoginLink>
    </div>
  );
};

export default SignInPage;
