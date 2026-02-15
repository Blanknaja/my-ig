"use client";
import React from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Image from "next/image";

const LoginClient = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="pt-11">
          <Image src="/images/Icon.png" alt="logo" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center flex-col text-3xl md:text-4xl leading-[32px] md:leading-[54px] mt-5">
          See everyday moments from your{" "}
          <span className="bg-linear-to-r from-[#ff5c00] via-[#ff0084] to-[#7e00ff] inline-block text-transparent bg-clip-text">
            close friends.
          </span>
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
            <Image
              priority
              layout="fill"
              src="/images/Login.png"
              alt="cat login"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <div className="w-full flex flex-col justify-center items-center py-10 ">
          <p className="mb-2">Log into Instagram</p>
          <Input
            parentClassName="mb-2"
            placeholder="Username"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
            type="text"
          />
          <Input
            parentClassName="mb-2"
            placeholder="Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
          <div className="w-full mt-8">
            <Button
              round="xl"
              className="w-full bg-blue-500 text-white rounded-md p-2"
              text="Log in"
              onClick={() => {}}
            />
          </div>
          <p className="mt-6">forgot password?</p>
          <Button
            round="xl"
            theme="outline"
            icon="facebook"
            iconColor="blue"
            className="w-full mt-10"
            text="login with facebook"
            onClick={() => {}}
          />
          <Button
            round="lg"
            theme="outline"
            className="w-full mt-2"
            text="create account"
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default LoginClient;
