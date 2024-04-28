import AboutMe from "@/Components/AboutMe";
import NavBar from "@/Components/NavBar";
import Profile from "@/Components/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Profile/>
      <AboutMe/>
    </>
  );
}
