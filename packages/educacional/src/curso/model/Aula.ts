
import { Entidade, EntidadeProps } from "shared";

export interface AulaProps extends EntidadeProps {
    nome?: string,
    videoURL?: string,
    duracao?: number,
    visivel?: boolean,
    ordem?: number,
}

export default class Aula extends Entidade<Aula, AulaProps> {
    constructor(props: AulaProps) {
        super(props);
    }

    static nova(props: Partial<AulaProps>): Aula {
        return new Aula({
            ...props,
            visivel: props.visivel ?? true,
            duracao: props.duracao ?? 0,
            ordem: props.ordem ?? 1,

        } as AulaProps)
    }

    get Id() { return (this.Id) };
    get nome() { return (this.nome) };
    get videoUrl() { return (this.videoUrl) };
    get duracao() { return (this.duracao) };
    get visivel() { return (this.visivel) };

}