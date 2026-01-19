import { Sidebar } from "./Features/Layout/Dashboard";
import { ReportTable } from "./Features/ShowReports/Components/Table";
import "./stylesDash.css";

export const App = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <div className="main-container">
        <header className="top-bar">
          <h1 className="top-bar-title">Gestión de Reportes</h1>
          <span className="top-bar-subtitle">Bienvenido de nuevo, David Enrique.</span>
        </header>

        <main className="content-body">
          <ReportTable />
        </main>
      </div>
    </div>
  );
};