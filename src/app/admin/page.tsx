import { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Panel de Administración",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-gray-bg p-8">
      <Logo />
      <div className="mt-8 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue/10">
          <LayoutDashboard className="h-10 w-10 text-brand-blue" />
        </div>
        <h1 className="font-heading text-3xl font-bold text-gray-900">
          Panel de Administración
        </h1>
        <p className="mt-3 text-lg text-brand-gray">Próximamente</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-brand-gray-light">
          Aquí podrás gestionar el contenido del sitio, ver estadísticas de
          marketing, administrar SEO y mucho más.
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
