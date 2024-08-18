"use client";

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <RegisterLink>
        <Button>Sign up</Button>
      </RegisterLink>
    </div>
  );
};

export default SignUpPage;
