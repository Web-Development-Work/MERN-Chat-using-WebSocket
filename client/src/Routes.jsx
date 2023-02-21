import RegisterAndLoginForm from "./RegisterAndLoginForm.jsx";
import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";
import Chat from "./Chat";
import Footer from "./Footer.jsx";

export default function Routes() {
  const {username, id} = useContext(UserContext);

  if (username) {
    return(
      <>
        <Chat />
        <Footer />
      </>
    )
  }

  return (
    <RegisterAndLoginForm />
  );
}