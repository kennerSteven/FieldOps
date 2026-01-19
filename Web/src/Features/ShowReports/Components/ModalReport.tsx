import React from 'react';
import { Report } from "../Hooks/useReport";
import "./ModalReport.css";

interface ReportModalProps {
  report: Report | null;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ report, onClose }) => {
  if (!report) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>&times;</button>
        
        <div className="image-grid">
          {report.img && report.img.length > 0 ? (
            report.img.map((image, index) => (
              <div key={index} className="image-container">
                <img 
                  src={image.uri} 
                  className="report-img" 
                  alt={`Reporte evidencia ${index}`} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Error+Imagen';
                  }}
                />
              </div>
            ))
          ) : (
            <div className="no-image-placeholder">Sin imágenes disponibles</div>
          )}
        </div>

        <div className="modal-info-container">
          <h3 className="section-label" style={{ color: '#007bff', marginTop: '0' }}>Detalles del Reporte</h3>
          
          <div className="modal-description-box">
            <p>{report.Description}</p>
          </div>

          <div className="modal-footer">
            <div className="location-badge" >
              <strong>Lat:</strong> {report.Localitation.latitude.toFixed(5)} 
              <br />
              <strong>Long:</strong> {report.Localitation.longitude.toFixed(5)}
            </div>
            
            {report.requires_supervisor && (
              <button 
                className="btn-establish"
                onClick={() => alert(`Asignando supervisor al reporte: ${report.id}`)}
              >
                Establecer supervisor
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};