import './Register.css';

const Registro = () => {
    return (
        <form className={"FOREVER"} method="GET" target="_blank">
            Escribe tu Apellido: <input type="text" name="Apellido"/>
            Escribe tu Nombre: <input type="text" name="nombre"/>
            Password:<input type="password" name="contraseña"/>
            Teléfono: <input type="text" name="telefono"/>
            Por favor, complete su domicilio:
                Calle: <input type="text" name="calle" size="40"/>
                Nro.: <input type="text" name="nro" size="3"/>
                Piso: <input type="text" name="piso" size="2"/>
                Departamento: <input type="text" name="dto" size="2"/>
                Código Postal: <input type="text" name="cp" size="8"/>
                Ciudad: <input type="text" name="ciudad" size="20"/>
                País: <input type="text" name="pais" size="20"/>
                <input type="checkbox" name="acepto"/> Acepto los términos del contrato de suscripción
                <input type="button" value="Enviar" onClick="verificarCasilla(this.form)"/>
            <input type="reset" value="borrar"/>
            <input type="submit" value="enviar formulario"/>
        </form>
    )
}

export default Registro
