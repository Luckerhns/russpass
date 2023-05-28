import React, { FC, useState } from "react";
import RegForm from "../../components/Auth/Registration/RegForm";

const LoginPage: FC = () => {
  return (
      <div className="main__form__container">
        <RegForm />
      </div>
  );
};

export default LoginPage;
