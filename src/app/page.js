import PromotionCode from "@/components/PromotionCode";
import Header from "../components/Header";
import style from "./globals.css";
import RecieveBonus from "@/components/RecieveBonus";

export default function Home() {
  return (
    <>
      <Header />
      <PromotionCode />
      <RecieveBonus />
    </>
  );
}
