import React from 'react'
import img2 from "./image/img2.png";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function Corporation() {
    return (
        <>
        <Grid Container sx={{ height:{lg:"100vh",md:"110vh",sm:"160vh"},display:{md:"flex",sm:"block"},background: "linear-gradient(to bottom, #141212 0%, #141212 100%)" }}>
          <Grid mt={15} >
            <Typography
              sx={{ color: "#fff", fontFamily: "Poppins SemiBold ",display:{md:"flex"},ml:{lg:"7rem",sm:"17rem",xs:"80px"},fontSize:{sm:"4rem",md:"4rem"} }}
              variant="h1"
            >
              Welcome!! <br />
              Partnerships{" "}
            </Typography>
            <Typography
              sx={{ color: "#fff", fontFamily: "Poppins SemiBold ",display:{md:"flex"},ml:{lg:"7rem",sm:"17rem",xs:"80px"} }}
              variant="h6"
              mt={7}
              ml={1}
            >
              Learn how to future-proof your business from <br />
              disruption with the most promising in your field.<br />
              The combination of Techstars #Givefirst ethos, worldwide network, and two-way mentorship <br />
              approach combine to make our accelerator experience truly transformative.
            </Typography>
            <Button size='large' sx={{marginLeft:"12rem",marginTop:"2rem"}} variant='contained'>Contact</Button>
          </Grid>
          <Grid mt={7} sx={{ml:{sm:"11rem",xs:"2rem"}}}>
            <img width="80%" src={img2} alt="img" />
          </Grid>
        </Grid>
        </>
    );
}

export default Corporation
