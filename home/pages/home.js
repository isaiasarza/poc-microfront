import MyAccountComponent from "@/components/my-account";
import { NextUIProvider } from "@nextui-org/react";

const HomePage = () => {
  const state = globalStore((state) => state);

  useEffect(() => {
    console.log("Home Microfrontend - global state:", state);
  }, []);
  return (
    <div className="flex flex-1 justify-center justify-items-center w-100 h-100 items-center">
      <MyAccountComponent></MyAccountComponent>
    </div>
  );
};

export default HomePage;
