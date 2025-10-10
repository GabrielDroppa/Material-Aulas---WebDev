import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-purple-500 text-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">GitHub Explorer</h1>
      <nav className="space-x-4">
        <Link to="/" className="text-white hover:underline">Página Inicial</Link>
        <Link to="/about" className="text-white hover:underline">Sobre</Link>
        <Link to="/contact" className="text-white hover:underline">Contato</Link>
      </nav>
    </header>
  );
}
