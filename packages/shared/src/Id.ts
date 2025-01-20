import { v4 as uudi } from 'uuid';

export default class Id {

    static novoHash(): string {
        return uudi()
    }
}