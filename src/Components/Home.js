import React from 'react'
import img1 from "./image/start-up.png";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
function Home() {
    return (
        <>
        <Grid Container sx={{ height:{lg:"100vh",md:"110vh",sm:"160vh"},display:{md:"flex",sm:"block"},justifyContent:"space-around",background: "linear-gradient(to bottom, #141212 0%, #141212 100%)" }}>
          <Grid mt={15} >
            <Typography
              sx={{ color: "#fff", fontFamily: "Poppins SemiBold ",display:{md:"flex"},ml:{lg:"7rem",sm:"17rem",xs:"80px"},fontSize:{sm:"4rem",md:"4rem"} }}
              variant="h1"
            >
              Grow your <br />
              Startup.{" "}
            </Typography>
            <Typography
              sx={{ color: "#fff", fontFamily: "Poppins SemiBold ",display:{md:"flex"},ml:{lg:"7rem",sm:"17rem",xs:"80px"} }}
              variant="h6"
              mt={7}
              ml={1}
            >
              From aspiring founders to early stage <br />
              entrepreneurs, Techstars can scale your vision into <br />a
              thriving business.
            </Typography>
          </Grid>
          <Grid mt={7} sx={{ml:{sm:"11rem",xs:"2rem"}}}>
            <img src={img1} alt="img" />
          </Grid>
        </Grid>
        </>
    )
}

export default Home
