import React, { useState } from "react";
import Input from "../../../components/ui/input/Input";
import Button from "../../../components/ui/button/Button";
export default function Signupform() {
  const [formData, setFormData] = useState({
    fullname: "",
    number: "",
    email: "",
    password: "",
    companyname: "",
    isAgency: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? checked && value === "yes" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form
      className="w-full h-full flex flex-col gap-3.5 justify-between"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col gap-3.5">
        <Input
          variant="defaultinput"
          type="text"
          id="name"
          name="fullname"
          lebel={"Full Name"}
          placeholder="Enter your email"
          required
          onChange={(e) =>
            setFormData({ ...formData.fullname, name: e.target.value })
          }
        />
        <Input
          variant="defaultinput"
          type="tel"
          id="number"
          name="number"
          lebel={"Phone number"}
          placeholder="Enter your email"
          required
          onChange={handleChange}
        />
        <Input
          variant="defaultinput"
          type="email"
          id="email"
          name="email"
          lebel={"Email address"}
          placeholder="Enter your email"
          required
          onChange={handleChange}
        />
        <Input
          variant="defaultinput"
          type="password"
          id="password"
          name="password"
          lebel={"Password"}
          placeholder="Enter your email"
          required
          onChange={handleChange}
        />
        <Input
          variant="defaultinput"
          type="text"
          id="companyname"
          name="companyname"
          lebel={"Company name"}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <div className="flex flex-col items-start w-full gap-2 text-[13px] cursor-pointer">
          <label htmlFor="Agency" required>
            Are you an Agency?<span className="text-red-500"> *</span>
          </label>
          <div className="flex gap-10">
            <span className="h-full flex items-center gap-2">
              <input
                type="radio"
                name="Agency"
                id="AgencyYes"
                value="yes"
                onChange={handleChange}
                checked={formData.isAgency === true}
                className=" accent-[#6C25FF]  h-4 w-4"
              />
              <label htmlFor="AgencyYes" className="text-sm">
                Yes
              </label>
            </span>
            <span className="h-full flex items-center gap-2">
              <input
                type="radio"
                name="Agency"
                id="AgencyNo"
                value="no"
                onChange={handleChange}
                checked={formData.isAgency === false}
                className="accent-[#6C25FF] h-4 w-4"
              />
              <label htmlFor="AgencyNo" className="text-sm">
                No
              </label>
            </span>
          </div>
        </div>
      </div>
      <Button type="submit" variant="default">
        Create Account
      </Button>
    </form>
  );
}
