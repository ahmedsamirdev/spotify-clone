import "./Login.module.css";
import Link from "next/link";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img src="./Spotify_Logo.jpg" alt="" />

      <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
