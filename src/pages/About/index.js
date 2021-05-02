import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Layout } from "./../../components";
import { plugins } from "./../../utils/constants";
import {
  Content,
  Thumbnail,
  Info,
} from "./styles";

function About(){
  return (
    <Layout title="About page">
      <Content>
        <Paper>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Thumbnail src="assets/images/recipe.png" alt="About" />
            </Grid>
            <Grid item xs={12} md={8}>
              <Info>
                <Typography variant="h3">
                  Recipe App
                </Typography>

                <Typography variant="subtitle1">
                  Project developed using <a href="https://reactjs.org/" target="_blank" title="ReactJS">ReactJS</a> using the following plugins:
                  <ul>
                    {
                      plugins.map((plugin, index) => (
                        <li key={index}>
                          <a href={plugin.url} target="_blank" title={plugin.title}>
                            {plugin.title}
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                </Typography>

                <Typography variant="body2" paragraph component="p">
                  Developed by: <a href="https://github.com/lucassenarj" target="_blank">Lucas Sena</a>
                </Typography>
              </Info>
            </Grid>
          </Grid>
        </Paper>
      </Content>
    </Layout>
  );
};

export default About;
