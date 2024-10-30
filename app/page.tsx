import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-10 pt-2 background-gradient">
      <Header />
      <ChatSection />
    </main>
  );
}
