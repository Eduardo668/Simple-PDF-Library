import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./router";
import { GlobalStyle } from "./global/GlobalStyles";
import { Worker } from "@react-pdf-viewer/core";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <QueryClientProvider client={queryClient} >
        <BrowserRouter>
          <Navigation />
          <GlobalStyle />
        </BrowserRouter>
      </QueryClientProvider>
    </Worker>
  </React.StrictMode>
);
