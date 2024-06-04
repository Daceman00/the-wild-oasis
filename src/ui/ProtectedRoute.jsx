import React, { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var() (--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load autenticated user
  const { isLoading, isAuthenticated } = useUser();

  //2.If there is NO authencited user, redirect to /login
  useEffect(
    function () {
      if (isAuthenticated && !isLoading) {
        navigate("/login");
      }
    },
    [navigate, isAuthenticated, isLoading]
  );

  //3. While loading, show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //4.If there is a User, render app
  if (!isAuthenticated) return children;
}

export default ProtectedRoute;
