import React from 'react'
import img2 from "./image/img2.png";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
function Communities() {
  return (
    <>
      <Grid width="100%"
        Container
        sx={{
          height: { lg: "100vh", md: "110vh", sm: "160vh" },
          display: { md: "flex" },
          background: "linear-gradient(to bottom, #141212 0%, #141212 100%)",
        }}
      >
        <Grid mt={15} width="35%" sx={{textAlign:"center"}}> 
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Poppins SemiBold ",
            }}
            variant="h2"
          >
            Innovation is <br />
            everywhere
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Poppins SemiBold ",
            }}
            variant="h5"
            mt={7}
            ml={1}
          >
            We believe that while people and ideas are  <br />
            equally distributed,
            <br />
            opportunities and resources are not.    That's <br />
            why we are committed to <br />increasing access to entrepreneurship
            <br />All over the world.
          </Typography>
        </Grid>
        <Grid mt={15} width="20%">
            <Grid sx={{color:"#fff",textAlign:"center"}}>
                <Typography variant='h6'>7K+</Typography>
                <Typography variant='h6'>Program Held</Typography>
            </Grid>
            <Grid sx={{color:"#fff",textAlign:"center",mt:"2rem"}}>
                <Typography variant='h6'>150+</Typography>
                <Typography variant='h6'>Countries</Typography>
            </Grid>
            <Grid sx={{color:"#fff",textAlign:"center",mt:"2rem"}}>
                <Typography variant='h6'>19K+</Typography>
                <Typography variant='h6'>Community</Typography>
                <Typography variant='h6'>Leaders</Typography>
            </Grid>
            <Grid sx={{color:"#fff",textAlign:"center",mt:"2rem"}}>
                <Typography variant='h6'>448K+</Typography>
                <Typography variant='h6'>Total</Typography>
                <Typography variant='h6'>Participants</Typography>
            </Grid>
        </Grid>
        <Grid mt={7} width="45%">
          <img width="80%" src={img2} alt="img" />
        </Grid>
      </Grid>
    </>
  );
}

export default Communities;
