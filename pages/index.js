import { useAuth } from "../providers/AuthProvider"
import { Button } from "@mui/material";

export default function Home() {
    const { logout } = useAuth();
  return(
  <>
  Hello World!
<Button variant="contained" onClick={() => logout()}>Sign out</Button>
  </>)
}
