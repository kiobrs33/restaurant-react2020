import React from "react";
import { Table, Button, ButtonGroup } from "reactstrap";
// Importando ICONOS FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class TableDishes extends React.Component {
   handleReceiveOrder = () => {
      this.props.history.push("/admin/dishes/newDish");
   };
   render() {
      const { handleReceiveOrder } = this;
      const { dishes } = this.props;
      return (
         <Table striped size="sm" responsive>
            <thead className="text-primary">
               <tr>
                  <th width="120px">Imagen</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Categoria</th>
                  <th width="120px" className="text-center">
                     <Button
                        type="button"
                        size="sm"
                        onClick={handleReceiveOrder}
                     >
                        Nuevo <FontAwesomeIcon icon={faPlus} />
                     </Button>
                  </th>
               </tr>
            </thead>
            <tbody>
               {dishes.map((d) => (
                  <tr key={d._id}>
                     <td>
                        <img
                           alt="..."
                           src={`https://rest-back-end.herokuapp.com/api/dishes/showImage/${d._id}`}
                        />
                     </td>
                     <td>{d.name}</td>
                     <td>S/{d.price}</td>
                     <td>{d.id_category.name}</td>
                     <td className="text-center">
                        <ButtonGroup size="sm" className="mb-2">
                           <Button color="info">
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

export default TableDishes;
