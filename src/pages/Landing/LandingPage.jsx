import { useNavigate } from "react-router";
import Button from "../../components/ui/button/Button";
import Heading from "../../components/Heading";
import "./LandingPage.css";

export default function LandingPage() {
  const navigateTo = useNavigate();
  return (
    <div className="Box">
      <div>
        <Heading
          title="Welcome to PopX"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
      <div className="btn">
        <Button
          variant="default"
          onClick={() => {
            navigateTo("/signup");
          }}
        >
          Create Account
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            navigateTo("/login");
          }}
        >
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
}
