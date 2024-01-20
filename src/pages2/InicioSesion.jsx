import { Link  } from 'react-router-dom'

export const InicioSesion = () => {

  const toogleSesion = () => {
  }

  return (
    <>
        <section className="menu mnu-sesion" id="mnu-sesion">
            <div className="mnu-sesion-tit">
                <span>Iniciar sesion</span>
                <Link to=""><img src="./ico/x.svg" alt="">Cerrar</img></Link>
            </div>

            <label for="">Nombre se usuario o correo electronico <span>*</span></label>
            <input type="email"></input>
            <label for="">Password <span>*</span></label>
            <input type="password"></input>
            <button className="compras-dettot-fin">Login</button>

            <div className="mnu-sesion-chk">
                <input type="checkbox">Recuerdame</input>
                <span>Olvidaste tu ontreseña ?</span>
            </div>
            <img className="mnu-sesion-img" src="./ico/user1.svg" alt=""></img>
            <p>No te encuentras registrado ?</p>
            <h2>Create una cuenta</h2>
        </section>

        <div className="overlay" id="overlay" onClick={toogleSesion}>
        </div>                   
    </>
  )
}
