import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import '../footer/Footer.css'
const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white mt-10 text-center"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        {/* // 1st grid */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Jobs
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Investers
            </Button>
          </div>
        </Grid>

        {/* 2 nd grid */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              supports
            </Button>
          </div>
        </Grid>

        {/* // 3rd grid */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              api status
            </Button>
          </div>
        </Grid>

        {/* 4thr grid */}

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              term
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with ❤️ by Rajesh Kumar (Me)
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
