import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z.string().min(3, "Nome completo é obrigatório"),
  email: z.string().email("E-mail inválido"),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF deve estar no formato XXX.XXX.XXX-XX"),
  birthDate: z.string().refine((date) => {
    return !isNaN(Date.parse(date));
  }, "Data de nascimento inválida"),
  phone: z
    .string()
    .regex(/^\(\d{2}\) \d{4,5}\-\d{4}$/, "Telefone deve estar no formato (XX) XXXXX-XXXX"),
  gender: z.enum(["Masculino", "Feminino", "Outro", "Prefiro não dizer"]),
  nationality: z.string().min(2, "Nacionalidade é obrigatória"),

  cep: z
    .string()
    .regex(/^\d{5}\-?\d{3}$/, "CEP inválido"),
  city: z.string().min(2, "Cidade é obrigatória"),
  state: z
    .string()
    .length(2, "Estado deve ser a sigla com 2 caracteres"),

  schooling: z.enum([
    "Ensino Médio",
    "Técnico",
    "Graduação",
    "Pós",
    "Outro",
  ]),
  institution: z.string().min(2, "Instituição de origem é obrigatória"),

  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    
  terms: z.literal(true, {
    errorMap: () => ({ message: "Você precisa aceitar os termos" }),
  }),
  newsletter: z.boolean().optional(),
});

export type RegistrationData = z.infer<typeof registrationSchema>;