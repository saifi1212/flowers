import * as React from "react";
import Button from "../common/Button";
import TextAnimation from "../common/TextAnimation";

function SignUp() {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [verificationCode, setVerificationCode] = React.useState("");

  const handleResendCode = () => {
    // Logic to resend the code
    console.log("Resend code clicked");
  };

  const handleJoinUs = () => {
    // Logic to handle joining
    console.log("Join us clicked");
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  return (
    <div className="leading-[120%] w-full relative overflow-hidden h-[91.4vh] flex items-center">
      <div className="flex flex-col max-h-[700px]  border mx-auto bg-white border-[#121212] justify-between flex-1 max-md:max-w-full px-[80px] py-[120px] max-w-[50%] w-full">
        <TextAnimation
          title={"Sign up"}
          titleStyles={"min-h-[70px] text-[50px]"}
          desce={
            " Become a member and enjoy personalized gift recommendations, fast checkout, and more."
          }
        />
        <div className="flex flex-col mt-6 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start w-full text-lg leading-6 whitespace-nowrap text-zinc-700 max-md:flex-wrap max-md:max-w-full">
            <input
              type="email"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="justify-center items-start px-4 py-4 text-lg bg-white border border-solid border-zinc-300 max-md:pr-5 max-md:max-w-full outline-none w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col mt-4 max-md:max-w-full">
            <div className="flex flex-col mt-3 text-zinc-500 max-md:max-w-full relative">
              <input
                type="password"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
                className="justify-center items-start px-4 py-4 text-lg bg-white border border-solid border-zinc-300 max-md:pr-5 max-md:max-w-full outline-none"
                placeholder="Enter your Password"
              />
            </div>
          </div>
          <Button
            text={"Join us"}
            varient={"primary"}
            handleClick={handleJoinUs}
            maxWidth={"mt-16"}
          />
        </div>
        <div className="flex gap-2 mt-6 text-base tracking-wide max-md:flex-wrap">
          <Button
            text={"Already have account ?"}
            varient={"normal"}
            maxWidth={"text-zinc-300"}
          />
        </div>
      </div>
      <div className="absolute z-[-1] top-[-110px] inset-x-0 w-full h-full">
        <img src="/images/auth/signup.png" alt="Sign up" className="w-full " />
      </div>
    </div>
  );
}
export default SignUp;
