// shadcn
import * as Form from "@radix-ui/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// lucide
import { Loader2 } from "lucide-react";
import { User, Lock } from "lucide-react";
import { ReloadIcon } from "@radix-ui/react-icons";

//react state
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

=======
import { useState, useEffect } from "react"; 
import { useRouter } from 'next/navigation'
>>>>>>> c4e9d788d097ba711fb7eab178a6cffbf1ef2c34
// GlobalFunctions.js
import { globalAPI, encryptAES } from "./function/globalFunctions";
import { useQueries, useQuery, useMutation } from "@tanstack/react-query";

//localStorage
import useStorage from "./function/zLocalStorage";

//RealTime
import { HubConnectionBuilder } from "@microsoft/signalr";
import { cookies } from "next/headers";

<<<<<<< HEAD
//crypting
import CryptoJS from "crypto-js";

=======
>>>>>>> c4e9d788d097ba711fb7eab178a6cffbf1ef2c34
//cookies
import Cookies from "js-cookie";

//zustand store

import { useStore } from "@/store/store";

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
    };

  //zustand store

  const passwordText = useStore((state) => state.bar);
  const setPasswordText = useStore((state) => state.setBar);

  //functionRealTime
  const connection = new HubConnectionBuilder()
    .withUrl("http://192.168.0.35:5289/Groupnb@2024Lumping")
    .withAutomaticReconnect()
    .build();
  const [messages, setMessage] = useState([]);

  connection.on("ReceiveMessage", (user, message) => {
    const newMessages = [...messages, { user, message }];

    cookies().set("login", res.data, { secure: true });
    console.log(message);

    tanLogin.mutate();
  });

  useEffect(() => {
    //functionRealTime
    connection
      .start()
      .then(() => {
        console.log("Connection established");
      })
      .catch((err) => {
        console.error(err.toString());
      });
  }, []);

<<<<<<< HEAD
  //AES

  const key = CryptoJS.enc.Utf8.parse("GroupNBEncry2024");
  const iv = CryptoJS.enc.Utf8.parse("GroupNBEncry2024");

  const encryptAES = (plainText, key, iv) => {
    const encrypted = CryptoJS.AES.encrypt(plainText, key, { iv: iv });
    return encrypted.toString();
  };

=======
>>>>>>> c4e9d788d097ba711fb7eab178a6cffbf1ef2c34
  //functionLogin
  const tanLogin = useMutation({
    mutationFn: () =>
      globalAPI().post(`Login/login`, {
        username: username,
        password: password,
      }),
    onSuccess: (res) => {
      try {
<<<<<<< HEAD
        const encryptedText = encryptAES(JSON.stringify(res.data), key, iv);
        Cookies.set("uD", encryptedText);
        router.push("/dashboard");
        setopenbar(true);
=======
        const encryptedText = encryptAES(JSON.stringify(res.data));
        Cookies.set('uD', encryptedText)
        router.push('/dashboard')
>>>>>>> c4e9d788d097ba711fb7eab178a6cffbf1ef2c34
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => {
      console.log(error.response.data);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    tanLogin.mutate();
  };

  //function for show password

  function handleShowPasword() {
    setPasswordText(!passwordText);
  }

  return (
    <>
      <div className="flex flex-col justify-center h-screen m-4 md:max-w-screen-sm md:m-auto lg:max-w-[500px] xl:flex-row xl:items-center xl:max-w-screen-2xl  ">
        <div className="xl:flex rounded-md xl:items-center xl:border xl:justify-center  ">
          <div className=" rounded-md hidden lg:flex   ">
            <img
              src="/images/loginGNB.png"
              className="w-full"
              alt="logo"
              loading="lazy"
            ></img>
          </div>
          <div className="flex flex-col gap-4 border rounded-md xl:border-none p-6 xl:p-10">
            <div className="flex flex-col gap-2 items-center">
              <h1 className="font-bold">Welcome</h1>
              <p className="text-xs">Login to access your account</p>
            </div>
            <Form.Root onSubmit={handleSubmit} className="FormRoot ">
              <div className="flex flex-col gap-4">
                <Form.Field className="grid" name="email">
                  <div className="relative">
                    <span className="px-2  text-primaryGray border-r-2 absolute top-2.5  text-pgray">
                      <User size={16} />
                    </span>
                    <Form.Control asChild>
                      <Input
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className="xl:w-[300px] pl-10 text-xs "
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
                        className="xl:w-[300px] pl-10 text-xs "
                        type={`${passwordText == false ? "text" : "password"}`}
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
                    <span
                      onClick={handleShowPasword}
                      className="px-2 text-xs cursor-pointer text-primaryGray hover:text-primary/90  absolute top-2.5 right-0 text-pgray"
                    >
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
                  {tanLogin.isPending ? (
                    <Button disabled>
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                      Loading
                    </Button>
                  ) : (
                    <Button>Login</Button>
                  )}
                </Form.Submit>
              </div>
            </Form.Root>
          </div>
        </div>
      </div>
    </>
  );
}
