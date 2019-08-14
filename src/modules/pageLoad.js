import "../css/styles.css";
import { header } from "./header";


const pageLoad = () => {
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(header);
  

 
};

export { pageLoad };