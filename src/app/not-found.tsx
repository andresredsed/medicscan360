import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-gray-bg p-8">
      <Logo />
      <div className="mt-8 text-center">
        <h1 className="font-heading text-7xl font-bold text-brand-blue">404</h1>
        <h2 className="mt-4 font-heading text-2xl font-semibold text-gray-900">
          Página no encontrada
        </h2>
        <p className="mt-2 text-brand-gray">
          La página que buscas no existe o fue movida.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
