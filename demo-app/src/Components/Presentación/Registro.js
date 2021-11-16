import './Register.css';

const Registro = () => {
    return (
        <form className={"FOREVER"} method="GET" target="_blank">
            Escribe tu Apellido y Nombre: <input type="text" name="NombreCompleto" placeholder={"Nombre Completo"}/>
            Crea una Contraseña:<input type="password" name="contraseña" placeholder={"**********"}/>
            Fecha de Nacimiento:<input type="date" name="fecha" min="1900-01-01" max="2021-11-19" step="1" />
            Teléfono: <input type="tel" name="telefono" placeholder="+XX XXX XXXXXXX" />
            Email: <input type="email" name="correo" placeholder="nombre@dominio.com" />
            Página Web: <input type="url" name="web" placeholder="https://pagina.com/" />
            Por favor, complete su domicilio:
                Calle: <input type="text" name="calle" size="40"/>
                Nro.: <input type="text" name="nro" size="3"/>
                Piso: <input type="text" name="piso" size="2"/>
                Departamento: <input type="text" name="dto" size="2"/>
                Código Postal: <input type="text" name="cp" size="8"/>
                Ciudad: <input type="text" name="ciudad" size="20"/>
                País: <input type="text" name="pais" size="20"/>
            Color del Alma: <input type="color" name="color" />
            Trabajos (opcional):<input type="file" name="adjunto" accept=".pdf,.jpg,.png" multiple />
              <div className={"DECO"}>
                  <input type="checkbox"  name="acepto"/> Acepto los términos del contrato de suscripción
                </div>
            <div className={"Btts"}>
                <input type="reset" value="Borrar" className="btn btn-outline-danger btn-lg"/>
                <input type="button" value="Enviar" onClick="verificarCasilla(this.form)" class="btn btn-outline-success btn-lg"/>
            </div>
        </form>
    )
}

export default Registro
