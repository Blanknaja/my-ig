import LoginClient from "./LoginClient";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <LoginClient />
    </div>
  );
}
