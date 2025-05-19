"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema, RegistrationData } from "./schema/schema";
import { maskCPF } from "../../utils/cpfMask";
import { phoneMask } from "../../utils/phoneMask";
import { cepMask } from "../../utils/cepMask";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
  });

  function onSubmit(data: RegistrationData) {
    console.log("Dados enviados:", data);
    alert("Formulário enviado com sucesso!");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-4 space-y-6">
      <div>
        <label className="block font-semibold mb-1" htmlFor="fullName">
          Nome completo <span className="text-red-500">*</span>
        </label>
        <input
          defaultValue="Gabriel Troni"
          id="fullName"
          type="text"
          {...register("fullName")}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.fullName && <p className="text-red-600 mt-1">{errors.fullName.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="email">
          E-mail <span className="text-red-500">*</span>
        </label>
        <input
          defaultValue="gabriel.troni@ufpr.br"
          id="email"
          type="email"
          {...register("email")}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-600 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="cpf">
          CPF <span className="text-red-500">*</span>
        </label>
        <input
          defaultValue="118.097.209-07"
          id="cpf"
          type="text"
          placeholder="000.000.000-00"
          {...register("cpf", {
            onChange: (e) => {
              e.target.value = maskCPF(e.target.value);
            },
          })}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.cpf && <p className="text-red-600 mt-1">{errors.cpf.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="birthDate">
          Data de nascimento <span className="text-red-500">*</span>
        </label>
        <input
          defaultValue="2003-02-09"
          id="birthDate"
          type="date"
          {...register("birthDate")}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.birthDate && <p className="text-red-600 mt-1">{errors.birthDate.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="phone">
          Telefone celular <span className="text-red-500">*</span>
        </label>
        <input
          defaultValue="(69) 99218-2298"
          id="phone"
          type="text"
          placeholder="(00) 00000-0000"
          {...register("phone", {
            onChange: (e) => {
              e.target.value = phoneMask(e.target.value);
            }
          })}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.phone && <p className="text-red-600 mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="gender">
          Gênero <span className="text-red-500">*</span>
        </label>
        <select
          defaultValue="Masculino"
          id="gender"
          {...register("gender")}
          className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
          <option value="Prefiro não dizer">Prefiro não dizer</option>
        </select>
        {errors.gender && <p className="text-red-600 mt-1">{errors.gender.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="nationality">
          Nacionalidade <span className="text-red-500">*</span>
        </label>
        <input
          defaultValue="Brasileiro"
          id="nationality"
          type="text"
          {...register("nationality")}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.nationality && <p className="text-red-600 mt-1">{errors.nationality.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="cep">
          CEP <span className="text-red-500">*</span>
        </label>
        <input
          defaultValue="81540-000"
          id="cep"
          type="text"
          placeholder="00000-000"
          {...register("cep", {
            onChange: (e) => {
              e.target.value = cepMask(e.target.value);
            }
          })}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.cep && <p className="text-red-600 mt-1">{errors.cep.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="city">
          Cidade <span className="text-red-500">*</span>
        </label>
        <input
          defaultValue="Curitiba"
          disabled
          id="city"
          type="text"
          {...register("city")}
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
        {errors.city && <p className="text-red-600 mt-1">{errors.city.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="state">
          Estado <span className="text-red-500">*</span>
        </label>
        <select
          defaultValue="PR"
          disabled
          id="state"
          {...register("state")}
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        >
          <option value="">Selecione</option>
          <option value="PR">PR</option>
          <option value="SP">SP</option>
          <option value="RJ">RJ</option>
          <option value="MG">MG</option>
        </select>
        {errors.state && <p className="text-red-600 mt-1">{errors.state.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="schooling">
          Escolaridade <span className="text-red-500">*</span>
        </label>
        <select
          defaultValue="Graduação"
          id="schooling"
          {...register("schooling")}
          className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Selecione</option>
          <option value="Ensino Médio">Ensino Médio</option>
          <option value="Técnico">Técnico</option>
          <option value="Graduação">Graduação</option>
          <option value="Pós">Pós</option>
          <option value="Outro">Outro</option>
        </select>
        {errors.schooling && <p className="text-red-600 mt-1">{errors.schooling.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="institution">
          Instituição de origem <span className="text-red-500">*</span>
        </label>
        <input
          defaultValue="Universidade Federal do Paraná"
          id="institution"
          type="text"
          {...register("institution")}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.institution && <p className="text-red-600 mt-1">{errors.institution.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="password">
          Crie uma Senha{" "}
          <span className="text-red-500">*</span>{" "}
          <span className="text-sm text-gray-500">(mínimo 6 caracteres)</span>
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          placeholder="••••••"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && (
          <p className="text-red-600 mt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <input
          id="terms"
          type="checkbox"
          {...register("terms")}
          className="w-4 h-4"
        />
        <label htmlFor="terms" className="text-sm">
          Aceito os termos de uso <span className="text-red-500">*</span>
        </label>
      </div>
      {errors.terms && <p className="text-red-600 mt-1">{errors.terms.message}</p>}

      <div className="flex items-center space-x-2">
        <input
          id="newsletter"
          type="checkbox"
          {...register("newsletter")}
          className="w-4 h-4"
        />
        <label htmlFor="newsletter" className="text-sm">
          Desejo receber informações sobre novos cursos
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
