import React from "react";
import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import Heading from "../../components/Heading";

export default function LoginPage() {
  return (
    <main className="Box h-full p-5">
      <div className="h-full flex flex-col gap-6">
        <Heading
          title={"Signin to your PopX account"}
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
        />
        <form className="w-full flex flex-col gap-3.5 justify-center">
          <div className="w-full flex flex-col gap-3.5">
            <Input
              variant="defaultinput"
              type="email"
              id="email"
              name="email"
              lebel={"Email Address "}
              placeholder="Enter your email"
            />
            <Input
              variant="defaultinput"
              type="password"
              id="password"
              name="password"
              lebel={"Password"}
              placeholder="Enter your password"
            />
          </div>
          <Button type="submit" variant="third">
            Login
          </Button>
        </form>
      </div>
    </main>
  );
}
