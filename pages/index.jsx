// shadcn
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as Form from '@radix-ui/react-form';
// shadncnLogo
import { Loader2 } from "lucide-react";
import { User, Lock } from "lucide-react";
import { useState } from "react";

export default function Home() {

  const [username, setUsername] = useState(''),
    [password, setPassword] = useState('')

  async function login() {
    console.log("onlcick");
    // await globalAPI().get(`Login/login`,{
    //   username: username,
    //   password: password
    // })
    // .then(async (response) => {
    //   if (response.status == 200) {
    //    console.log("Click!");

    //   }
    //   else if (response.status == 202 || response.status == 401) {

    //   } else {

    //   }

    // }).catch((error) => {

    // })

  }

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
            <Form.Root className="FormRoot">
              <div className="flex flex-col gap-6">

                <Form.Field className="grid " name="email">
                  <div className="flex items-baseline justify-between">
                    <Form.Message className="text-[13px] text-black opacity-[0.8]" match="valueMissing">
                      Please enter your username
                    </Form.Message>
                  </div>
                  <div className="relative">
                    <span className="px-2  text-primaryGray border-r-2 absolute top-2.5  text-pgray">
                      <User size={16} />
                    </span>
                    <Form.Control asChild>

                      <Input
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        className="xl:w-[300px] xl:pl-10 text-xs "
                        type="text"
                        placeholder="Username"
                        required
                      />
                    </Form.Control>

                  </div>
                </Form.Field>


                <Form.Field className="grid " name="password">
                  <div className="flex items-baseline justify-between">
                    <Form.Message className="text-[13px] text-red opacity-[0.8]" match="valueMissing">
                      Please enter your password
                    </Form.Message>
                  </div>
                  <div className="relative">
                    <span className="px-2  text-primaryGray border-r-2 absolute top-2.5 text-pgray">
                      <Lock size={16} />
                    </span>
                    <Form.Control asChild>
                      <Input
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        className="xl:w-[300px] xl:pl-10 text-xs "
                        type="password"
                        placeholder="Password"
                        required
                      />
                    </Form.Control>
                    <span className="px-2 text-xs cursor-pointer text-primaryGray hover:text-primary/90 border-r-2 absolute top-2.5 right-0 text-pgray">
                      Show
                    </span>
                  </div>
                </Form.Field>




                <div className="flex items-end justify-end">
                  <p className="text-xs text-primaryGray hover:text-primary/90 cursor-pointer">
                    Forgot your password?{" "}
                  </p>
                </div>
                <Form.Submit asChild>
                  <Button onClick={() => { login() }} className="w-full">Login</Button>
                </Form.Submit>
              </div>
            </Form.Root>
          </div>
        </div>
      </div>
    </>
  );
}
