import Login from "@components/login-signup/Login";
import LeftSlider from "@components/loginSlider/LeftSlider";
import RightSlider from "@components/loginSlider/RightSlider";

export default function LoginPage() {
  return (
    <section className="flex">
      <div className="w-1/2">
        <Login />
      </div>

      <div className="w-1/2 flex justify-around">
        <LeftSlider />
        <RightSlider />
      </div>
    </section>
  );
}
