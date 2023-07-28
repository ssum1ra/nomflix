import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './Router';
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import { theme } from "./theme";
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new QueryClient();

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router}/>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
