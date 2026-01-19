import { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useReports, Report } from "../Hooks/useReport";
import { ReportModal } from "./ModalReport";
import "./ReportForm.css";

export const ReportTable = () => {
  const { reports, loading } = useReports();
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const formatDescription = (text: string): string => {
    const words = text.split(" ");
    return words.length > 15 ? words.slice(0, 15).join(" ") + "..." : text;
  };

  const columns: TableColumn<Report>[] = [
    {
      name: "Descripción",
      cell: (row) => (
        <div style={{ cursor: 'pointer', fontWeight: 500 }}>
          {formatDescription(row.Description)}
        </div>
      ),
      grow: 2,
    },
    {
      name: "Prioridad",
      cell: (row) => (
        <span className={`priority-badge priority-${row.Priority.toLowerCase()}`}>
          {row.Priority}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => {
        const date = new Date(row.createdAt._seconds * 1000);
        return date.toLocaleDateString();
      },
      sortable: true,
    },
    {
      name: "Ubicación",
      cell: (row) => (
        <span className="location-text">
          {row.Localitation.latitude.toFixed(3)}, {row.Localitation.longitude.toFixed(3)}
        </span>
      ),
    },
  ];

  return (
    <div className="table-container">
      <div className="table-card">
        <DataTable
          columns={columns}
          data={reports}
          progressPending={loading}
          onRowClicked={(row) => setSelectedReport(row)}
          pointerOnHover
          highlightOnHover
          pagination
          noHeader
        />
      </div>

      <ReportModal 
        report={selectedReport} 
        onClose={() => setSelectedReport(null)} 
      />
    </div>
  );
};