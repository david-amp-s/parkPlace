import Router from "next/router";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Usuario:", user);
    console.log("Contraseña:", password);
    // Aquí puedes hacer la petición al backend (por ejemplo con fetch o axios)
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="w-[40%] h-[500px] p-4 flex flex-col justify-center items-center gap-12"
>
  <div className="w-[80%] flex flex-col gap-2 text-white items-center text-center">
    <label htmlFor="user" className="w-full text-left">Usuario</label>
    <input
      id="user"
      placeholder="Usuario"
      value={user}
      onChange={(e) => setUser(e.target.value)}
      type="text"
      className="bg-white/10 rounded-[8px] p-2 w-full"
    />
  </div>

  <div className="w-[80%] flex flex-col gap-2 text-white items-center text-center">
    <label htmlFor="password" className="w-full text-left">Contraseña</label>
    <input
      id="password"
      placeholder="Contraseña"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      className="bg-white/10 rounded-[8px] p-2 w-full"
    />
  </div>

  <button
    type="submit"
    className=" bg-[#057B75] text-white p-2 rounded w-[80%]"
    onClick={()=> Router.push('/admin')}
  >
    Iniciar sesión
  </button>
</form>

  );
};

export default Login;
