import NavBar from "../components/navigation/NavBar";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      Home page
    </main>
  );
}

