import styled from "styled-components";

const ItemListaEstilizada = styled.li`

`

const ItemNavegacion = ({ children, iconoActivo, iconoInactivo, activo = false }) => {
    return (
        <ItemListaEstilizada>
            <img src={activo ? iconoActivo : iconoInactivo} alt="Icono" />
            {children}
        </ItemListaEstilizada>
    );
}

export default ItemNavegacion