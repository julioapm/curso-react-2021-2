import React from "react";
import { getUsuarios } from "../services/dados";
import { Link, Outlet } from 'react-router-dom';

export default function PaginaUsuarios() {
    return (
        <>
            <h1>Página de Usuários</h1>
            <Link to="/usuarios/u1">Usuário Fulano de Tal</Link>
            <Outlet />
        </>
    );
}