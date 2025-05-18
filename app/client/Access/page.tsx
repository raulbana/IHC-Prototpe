import RegistrationForm from "./RegistrationForm";

export default function AccessPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-semibold mb-4 text-default-blue text-center">
        Criação de Usuário
      </h1>
      <RegistrationForm />
    </main>
  );
}
