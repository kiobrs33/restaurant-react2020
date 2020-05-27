import React from "react";
import { Link } from "react-router-dom";
import { Table, Button, ButtonGroup } from "reactstrap";

// Importando ICONOS FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// Importando Imagenes
import img123 from "../../../assets/img/faces/ayo-ogunseinde-1.jpg";

class TableCustomers extends React.Component {
   handleShowCustomer = (id_customer) => {
      this.props.history.push(`/admin/customers/showCustomer/${id_customer}`);
   };
   render() {
      const { customers } = this.props;
      return (
         <Table striped size="sm" responsive>
            <thead className="text-primary">
               <tr>
                  <th width="120px">Imagen</th>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Dni</th>
                  <th width="120px" className="text-center">
                     Acciones
                  </th>
               </tr>
            </thead>
            <tbody>
               {customers.map((c) => (
                  <tr key={c._id}>
                     <td>
                        <img alt="..." src={img123} />
                     </td>
                     <td>{c.info.name}</td>
                     <td>{c.info.lastname}</td>
                     <td>{c.info.DNI}</td>
                     <td className="text-center">
                        <ButtonGroup size="sm" className="mb-2">
                           <Button
                              color="info"
                              onClick={() => this.handleShowCustomer(c._id)}
                           >
                              <FontAwesomeIcon icon={faEdit} />
                           </Button>
                           <Button color="danger">
                              <FontAwesomeIcon icon={faTrashAlt} />
                           </Button>
                        </ButtonGroup>
                     </td>
                  </tr>
               ))}
            </tbody>
         </Table>
      );
   }
}

export default TableCustomers;
