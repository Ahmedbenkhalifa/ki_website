import React from "react";
import { Box, Container, Divider, Grid, Typography, useTheme } from "@mui/material";

const Publication = ({ publishPosts }) => {
  const theme = useTheme();
  return (
    <Box sx={{ my: 4, pt: 4, pb: 5, backgroundColor: "#EEE" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" color="secondary" sx={{textTransform:'uppercase', fontWeight: "600" }}>
          Publications
        </Typography>
        <Grid container sx={{ pt: 4 }} spacing={4}>
          {publishPosts?.map((post, key) => (
            <Grid
              key={key}
              item
              md={publishPosts.length===1?12:4}
              xs={12}
              sx={{
                display: "flex",
                [theme.breakpoints.down("md")]: {
                  flexDirection: "column",
                },
              }}
            >
              <Item
                impact={post.impact}
                title={post.title}
                description={post.description}
              />
              {!((key + 1) % 3 === 0) && (
                <Divider
                  variant="middle"
                  orientation="vertical"
                  flexItem
                  sx={{
                    mx: 2,
                    [theme.breakpoints.down("md")]: {
                      display: "none",
                    },
                  }}
                />
              )}
              {/* Divider mobile */}
              <Divider
                flexItem
                variant="middle"
                sx={{
                  mt: 2,
                  [theme.breakpoints.up("md")]: {
                    display: "none",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const Item = ({ impact, title, description }) => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "... " : str;
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* <Typography variant="h6" color="secondary" sx={{ mb: 1 }}>
        {impact}
      </Typography> */}
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1" align="center">
        {truncate(description, 180)}
      </Typography>
    </Box>
  );
};
export default Publication;
