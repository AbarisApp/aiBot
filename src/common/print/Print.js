import { Dropdown } from "react-bootstrap";
import { PiPrinterDuotone } from "react-icons/pi";
function Print() {
  const handlePrint = () => {
    console.log("Printing...");
    window.print();
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="secondary"
        id="dropdown-basic"
        className="py-1 px-2"
      >
        <PiPrinterDuotone className="fs-3" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handlePrint}>
          <i className="fa fa-print" aria-hidden="true"></i> Print
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Print;
