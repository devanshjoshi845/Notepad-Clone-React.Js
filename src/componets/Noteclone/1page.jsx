import Header from "./header";
import Footer from "./Footer";
import Create from "./create";
import Show from "./show";
import { useState } from "react";

function Note() {
  let [alldata, setalldata] = useState([]);
  return (
    <div>
      <Header />
      <Create alldata={alldata} setalldata={setalldata} />
      <Show alldata={alldata} setalldata={setalldata} />
      <Footer />
    </div>
  );
}
export default Note;
