// shadcn
import * as Form from "@radix-ui/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// lucide
import { Loader2 } from "lucide-react";
import { User, Lock } from "lucide-react";


//react state
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// GlobalFunctions.js
import { globalAPI, encryptAES } from "./function/globalFunctions";
import { useQueries, useQuery, useMutation } from "@tanstack/react-query";
//localStorage
import useStorage from "./function/zLocalStorage";
//RealTime
import { HubConnectionBuilder } from "@microsoft/signalr";
import { cookies } from "next/headers";

//crypting
import CryptoJS from "crypto-js";

//cookies
import Cookies from 'js-cookie';

export default function Home() {
  

  const [username, setUsername] = useState(""),
    [password, setPassword] = useState(""),
    router = useRouter(),
    [data, setData] = useState({}),
    setStorage = (nameKey, value) => {
      setData((prevData) => ({ ...prevData, [nameKey]: value }));
    },
    getStorage = (nameKey) => {
      return data[nameKey];
    }


  //functionRealTime
  const connection = new HubConnectionBuilder()
    .withUrl('http://192.168.0.35:5289/Groupnb@2024Lumping')
    .withAutomaticReconnect()
    .build()
  const [messages, setMessage] = useState([])

  connection.on('ReceiveMessage', (user, message) => {
    const newMessages = [...messages, { user, message }];

    cookies().set('login', res.data, { secure: true })
    console.log(message);

    tanLogin.mutate();
  });



  useEffect(() => {
   
      //functionRealTime
    connection.start()
      .then(() => {
        console.log("Connection established");
      })
      .catch((err) => {
        console.error(err.toString());
      })
  }, [])


  //functionLogin
  const tanLogin = useMutation({
    mutationFn: () =>
      globalAPI().post(`Login/login`, {
        username: username,
        password: password
      }),
    onSuccess: (res) => {
      try {
        const encryptedText = encryptAES(JSON.stringify(res.data));
        Cookies.set("uD", encryptedText);
        router.push("/dashboard");
        setopenbar(true);
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => {
      console.log(error.response.data);
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    tanLogin.mutate()
  };

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
            <Form.Root onSubmit={handleSubmit} className="FormRoot">
              <div className="flex flex-col gap-4 xl:h-[250px]">
                <Form.Field className="grid" name="email">
                  <div className="relative">
                    <span className="px-2  text-primaryGray border-r-2 absolute top-2.5  text-pgray">
                      <User size={16} />
                    </span>
                    <Form.Control asChild>
                      <Input
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className="xl:w-[300px] xl:pl-10 text-xs "
                        type="text"
                        placeholder="Username"
                        required
                      />
                    </Form.Control>
                    <div className="flex items-baseline justify-between">
                      <Form.Message
                        className="text-rose-500/90 text-xs p-1.5 "
                        match="valueMissing"
                      >
                        Invalid Username
                      </Form.Message>
                    </div>
                  </div>
                </Form.Field>

                <Form.Field className="grid" name="password">
                  <div className="relative">
                    <span className="px-2  text-primaryGray border-r-2 absolute top-2.5 text-pgray">
                      <Lock size={16} />
                    </span>
                    <Form.Control asChild>
                      <Input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="xl:w-[300px] xl:pl-10 text-xs "
                        type="password"
                        placeholder="Password"
                        required
                      />
                    </Form.Control>
                    <div className="flex items-baseline justify-between">
                      <Form.Message
                        className="text-rose-500/90 text-xs p-1.5 "
                        match="valueMissing"
                      >
                        Invalid Password
                      </Form.Message>
                    </div>
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
                  <Button className="w-full">{tanLogin.isPending ? 'Loading...' : 'Login'}</Button>
                </Form.Submit>
              </div>
            </Form.Root>
          </div>
        </div>
      </div>
    </>
  );
}
