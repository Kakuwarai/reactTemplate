// shadcn
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// shadncnLogo
import { Loader2 } from "lucide-react";
import { User, Lock } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen xl:max-w-screen-xl m-auto">
        <div className="flex border rounded-md">
          <img
            src="/images/loginGNB.png"
            className="rounded-md"
            alt="logo"
            loading="lazy"
          ></img>
          <div className="xl:w-[30rem] xl:p-8 flex justify-center  items-center flex-col xl:gap-10 ">
            <div className="flex flex-col gap-2 items-center">
              <h1 className="font-bold">Welcome</h1>
              <p className="text-xs">Login to access your account</p>
            </div>
            <form>
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <span className="px-2  text-primaryGray border-r-2 absolute top-2.5  text-pgray">
                    <User size={16} />
                  </span>
                  <Input
                    // value={username}
                    className="xl:w-[300px] xl:pl-10 text-xs "
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="relative">
                  <span className="px-2  text-primaryGray border-r-2 absolute top-2.5 text-pgray">
                    <Lock size={16} />
                  </span>
                  <Input
                    // value={password}
                    className="xl:w-[300px] xl:pl-10 text-xs "
                    type="password"
                    placeholder="Password"
                  />
                  <span className="px-2 text-xs cursor-pointer text-primaryGray hover:text-primary/90 border-r-2 absolute top-2.5 right-0 text-pgray">
                    Show
                  </span>
                </div>
                <div className="flex items-end justify-end">
                  <p className="text-xs text-primaryGray hover:text-primary/90 cursor-pointer">
                    Forgot your password?{" "}
                  </p>
                </div>
                <Button className="w-full">Login</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
