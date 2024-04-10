import SignUp from "@components/login-signup/SignUp";
import LeftSlider from "@components/loginSlider/LeftSlider";
import RightSlider from "@components/loginSlider/RightSlider";

export default function LoginPage() {
  return (
    <section className="flex">
      <div className="w-1/2">
        <SignUp />
      </div>

      <div className="w-1/2 flex justify-around">
        <LeftSlider />
        <RightSlider />
      </div>
    </section>
  );
}
