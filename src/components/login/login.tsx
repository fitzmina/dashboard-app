import Button from "@mui/material/Button";
import { useSession, signIn, signOut } from "next-auth/react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export default function Login() {
  const { data: session } = useSession();

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 300,
    height: 300,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
  }));

  if (!session)
    return (
      // <div
      //   style={{
      //     display: "flex",
      //     flexDirection: "column",
      //     alignItems: "center",
      //     justifyContent: "center",
      //   }}
      // >
      //   <Paper>

      //   </Paper>
      // </div>

      <Stack
        direction="row"
        spacing={2}
        style={{
          display: "grid",
          // flexDirection: "column",
          // alignItems: "center",
          // justifyContent: "center",
          minHeight: "90vh",
          placeContent: "center",
        }}
      >
        <DemoPaper
          square={false}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Please Log In</h2>
          <Button variant="contained" color="success" onClick={() => signIn()}>
            Log in with Google
          </Button>
        </DemoPaper>
        {/* <DemoPaper square>square corners</DemoPaper> */}
      </Stack>
    );
}
