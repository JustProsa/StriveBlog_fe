import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { useSearchParams, useNavigate } from "react-router-dom";

const Success = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(token);
    localStorage.setItem("token", JSON.stringify(token));
    navigate("/home"); // Effettua la redirezione alla pagina Home dopo aver ottenuto il token
  }, [token, navigate]); // Aggiungi token come dipendenza per far eseguire useEffect quando token cambia

  return (
    <MainLayout>
      <div>
        <h1>DAJEEEE</h1>
        <p>{token}</p>
      </div>
    </MainLayout>
  );
};

export default Success;
