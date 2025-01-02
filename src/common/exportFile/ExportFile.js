import { Dropdown } from "react-bootstrap";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
function ExportFile() {
  const handleExportExcel = () => {
    console.log("Exporting to Excel...");
    const data = [
      { name: "John", age: 28, city: "New York" },
      { name: "Jane", age: 22, city: "San Francisco" },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  const handleExportPDF = () => {
    console.log("Exporting to PDF...");
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("data.pdf");
  };

  const handlePrint = () => {
    console.log("Printing...");
    window.print();
  };

  const handleExportCSV = () => {
    console.log("Exporting to CSV...");
    const data = [
      { name: "John", age: 28, city: "New York" },
      { name: "Jane", age: 22, city: "San Francisco" },
    ];

    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(","));

    for (const row of data) {
      const values = headers.map((header) => row[header]);
      csvRows.push(values.join(","));
    }

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "data.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Export Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleExportExcel}>
          <i className="fa fa-file-excel-o" aria-hidden="true"></i> Excel
        </Dropdown.Item>
        <Dropdown.Item onClick={handleExportPDF}>
          <i className="fa fa-file-pdf-o" aria-hidden="true"></i> PDF
        </Dropdown.Item>
        {/* <Dropdown.Item onClick={handlePrint}>
          <i className="fa fa-print" aria-hidden="true"></i> Print
        </Dropdown.Item> */}
        {/* <Dropdown.Item onClick={handleExportCSV}>
          <i className="fa fa-file-text-o" aria-hidden="true"></i> CSV
        </Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ExportFile;
