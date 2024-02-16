import Contacts from "@/components/Listofcontacts";
import Search from "@/components/search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black w-1/4 h-3/4 rounded-lg	">
      <Search/>
      <Contacts/>
    </main>
  );
}
