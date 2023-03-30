import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { ReadPage } from "./style";
import {Viewer} from "@react-pdf-viewer/core"
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useQuery } from "react-query";

// import File from "./harry.pdf"


function Read() {
  const [filePdf, setFilePdf] = useState<Uint8Array>(new Uint8Array());


  const defaultLayoutPluginInstace = defaultLayoutPlugin(

  );

  const fetchPdf = async () =>{
    const response = await fetch("https://firebasestorage.googleapis.com/v0/b/portifolio-profissional-47614.appspot.com/o/files%2FCurriculo%20-%20Eduardo.pdf?alt=media&token=43fd71c2-6649-4841-8602-19b2d676e0fa");
    const data = await response.arrayBuffer();
    const unit8Array = new Uint8Array(data);
    console.log(unit8Array)
    setFilePdf(unit8Array);
    
  }

  const {data:file} = useQuery("pdf", ()=>fetchPdf());

  return (
    <>
    {/* <Header /> */}
    <ReadPage>
        <div className="div-viewer">
            <Viewer
             plugins={[defaultLayoutPluginInstace]} 
             fileUrl={filePdf} />
        </div>
    </ReadPage>
    </>
  )
}

export default Read;
