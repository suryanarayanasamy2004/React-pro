import Insertdemo from "./insertdemo/page";
import Selectdemo from "./selectdemo/page";

export default function Home() {
  return (
    <div className="container">
      <h1>School Public Exam Management</h1>
      <Insertdemo></Insertdemo>
      <br></br><br></br>
      <Selectdemo></Selectdemo>
    </div>
  );
}

