import React, { useEffect, useState } from "react";
import {
  Layout,
  MainRecipe,
  SideBar,
  Recipe,
} from "./../../components";
import { Content } from "./styles";
import Grid from "@material-ui/core/Grid";
import api from "./../../services/api";

function Home() {
  const [values, setValues] = useState({
    main: {},
    smalls: [],
    loading: true,
  });

  useEffect(() => {
    async function getCategories() {
      const responses = await api.getMultiples();
      setValues({
        main: responses[0],
        smalls: [
          responses[1],
          responses[2],
        ],
        loading: false,
      });
    }

    getCategories();
  }, []);

  const { loading, main, smalls } = values;

  return (
    <Layout title="Home Page">
      <Content>
        {
          !loading && (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={3}>
                <SideBar loading={loading} />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <MainRecipe loading={loading} recipe={main} />
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                {
                  smalls.map((recipe, index) => (<Recipe item={recipe} key={index} />))
                }
              </Grid>
            </Grid>
          )
        }
      </Content>
    </Layout>
  );
};

export default Home;
