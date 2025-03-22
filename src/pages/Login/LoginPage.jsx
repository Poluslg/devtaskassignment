import React from "react";
import Heading from "../../components/Heading";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <main className="Box h-full p-5">
      <div className="h-full flex flex-col gap-6">
        <Heading
          title={"Signin to your PopX account"}
          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
        />
        <LoginForm />
      </div>
    </main>
  );
}
