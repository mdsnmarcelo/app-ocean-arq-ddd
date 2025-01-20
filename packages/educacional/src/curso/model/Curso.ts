import { Entidade } from "shared";
import { Nivel } from "./Nivel";
import { Aula } from "./Aula";

export interface Curso extends Entidade {
    nome: string;
    nivel: Nivel;
    instrutor: string[];
    aulas: Aula[];
}