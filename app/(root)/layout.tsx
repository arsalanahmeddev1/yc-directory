import Navbar from "../components/Navbar";

export default function layout({children} : {children: Readonly<React.ReactNode>}) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}