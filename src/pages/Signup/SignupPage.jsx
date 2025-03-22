import Heading from "../../components/Heading";
import Signupform from "./components/Signupform";

export default function SignupPage() {
  return (
    <main className="Box p-5">
      <div className="pb-5">
        <Heading title="Create your PopX account" />
      </div>
      <Signupform />
    </main>
  );
}
