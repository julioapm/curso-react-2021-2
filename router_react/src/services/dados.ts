export interface Usuario {
    id: string;
    nome: string;
    email: string;
}

let usuarios: Usuario[] = [
    {  id: 'u1', nome: 'João', email: 'joao@gmail.com' },
    {  id: 'u2', nome: 'Maria', email: 'maria@gmail.com' },
    {  id: 'u3', nome: 'José', email: 'jose@gmail.com' }
];

export function getUsuarios() {
    return usuarios;
}

export function getUsuario(id: string) {
    return usuarios.find(u => u.id === id);
}

export function deleteUsuario(id: string) {
    usuarios = usuarios.filter(u => u.id !== id);
}