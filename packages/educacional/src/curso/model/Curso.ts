import { Entidade, EntidadeProps } from "shared";
import { Nivel } from "./Nivel";
import Aula, { AulaProps } from "./Aula";


export interface CursoProps extends EntidadeProps {
    nome: string;
    nivel: Nivel;
    instrutor: string[];
    aulas: AulaProps[];
}

export default class Curso extends Entidade<Curso, CursoProps> {
    constructor(readonly props: CursoProps) {
        super(props);
    }
    static novo(props: Partial<CursoProps>): Curso {
        return new Curso({
            ...props,
            nivel: props.nivel ?? Nivel.BASICO,
        } as CursoProps)
    }

    get nome() {
        return this.props.nome
    }

    get nivel() {
        return this.props.nivel
    }

    get aulas() {
        return this.props.aulas
    }
}




