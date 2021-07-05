import React from "react";

interface Props {
  onSubmit: (e: React.MouseEvent) => void;
}
const SignUp: React.FC<Props> = ({ onSubmit }) => {
  return (
    <div>
      this is sign up page
      <input type="text" placeholder="id" />
      <input type="password" placeholder="password" />
      <button type="submit" onClick={onSubmit}>
        submit
      </button>
    </div>
  );
};

export default SignUp;
