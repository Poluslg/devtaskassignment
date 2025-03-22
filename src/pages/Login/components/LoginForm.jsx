import React from "react";
import Input from "../../../components/ui/input/Input";
import Button from "../../../components/ui/button/Button";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigateTo = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigateTo("/profile");
  };
  return (
    <form
      className="w-full flex flex-col gap-3.5 justify-center"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col gap-3.5">
        <Input
          variant="defaultinput"
          type="email"
          id="email"
          name="email"
          lebel={"Email Address "}
          placeholder="Enter your email"
          required={true}
        />
        <Input
          variant="defaultinput"
          type="password"
          id="password"
          name="password"
          lebel={"Password"}
          placeholder="Enter your password"
          required={true}
        />
      </div>
      <Button type="submit" variant="third">
        Login
      </Button>
    </form>
  );
}
