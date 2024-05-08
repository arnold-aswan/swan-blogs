import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Featured />
      <CategoryList />
    </main>
  );
}
