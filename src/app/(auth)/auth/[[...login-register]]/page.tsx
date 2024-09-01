"use client";
import ThemeSwitcher from "~/components/ThemeSwitcher";
import CodePinasLogo from "../../../../../public/assets/CodePinasLogo.png";
import { Separator } from "~/components/ui/separator";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export default function Auth() {
  const [isRecaptchaVerified, setIsReCaptchaVerified] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeRecaptcha = () => {
    setIsReCaptchaVerified(true);
  };

  return (
    <div className="relative h-screen w-screen">
      <div className="absolute right-4 top-4">
        <ThemeSwitcher />
      </div>
      <div className="container flex h-full w-full max-w-none flex-col items-center justify-center">
        <div className="flex w-full max-w-[400px] flex-col items-center justify-center gap-5 pl-12 pr-12 pt-12">
          <div className="flex flex-col items-center justify-center gap-6">
            <img
              className="h-45 flex-none object-cover [clip-path:circle()]"
              src={CodePinasLogo.src}
              alt="Example Logo"
            />
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-2xl font-extrabold">Welcome</span>
              <span className="text-muted-foreground">
                Login or sign up below
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <Separator />
          </div>
          <div className="flex flex-col items-center justify-center self-start">
            <span className="self-start text-2xl font-bold">Login</span>
            <span className="self-start text-sm text-muted-foreground">
              Enter your email below to login.
            </span>
          </div>
          <form className="w-76">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="email"
                id="email"
                placeholder="Enter your Email..."
              />
              <Label htmlFor="password">Password</Label>
              <Input
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type="password"
                id="password"
                placeholder="Enter your Password..."
              />
            </div>
            <div className="mt-3">
              <ReCAPTCHA
                onChange={onChangeRecaptcha}
                sitekey="6Ld3WR8qAAAAACypib4Kd6zhUPJj16Aghyz6Q7kK"
              />
            </div>
            <Link href="/dashboard">
              <Button
                disabled={isRecaptchaVerified}
                type="submit"
                className="mt-4 w-full bg-foreground"
              >
                Sign In
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
