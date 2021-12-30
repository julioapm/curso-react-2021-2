import React from "react";
import { getUsuario } from "../services/dados";
import { useParams } from 'react-router-dom';

export default function PaginaDetalheUsuario() {
    const parametros = useParams();
    const usuarioId = parametros.usuarioId; 
    return (
        <h2>Página de Detalhe de {usuarioId}</h2>
    );
}