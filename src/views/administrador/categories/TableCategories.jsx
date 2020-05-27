import React from "react";
import { Table, Button, ButtonGroup } from "reactstrap";
// Importando ICONOS FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class TableCategories extends React.Component {
   handleNewCategory = () => {
      this.props.history.push("/admin/categories/newCategory");
   };
   render() {
      const { handleNewCategory } = this;
      const { categories } = this.props;
      return (
         <Table striped size="sm" responsive>
            <thead className="text-primary">
               <tr>
                  <th>Nombre</th>
                  <th width="120px" className="text-center">
                     <Button
                        type="button"
                        size="sm"
                        onClick={handleNewCategory}
                     >
                        Nuevo <FontAwesomeIcon icon={faPlus} />
                     </Button>
                  </th>
               </tr>
            </thead>
            <tbody>
               {categories.map((d) => (
                  <tr key={d._id}>
                     <td>{d.name}</td>
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

export default TableCategories;
