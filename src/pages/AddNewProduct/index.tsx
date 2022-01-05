import { observer } from "mobx-react-lite";
import NavBar from "../DashBoard/NavBar";
import AddNewProductForm from "../../components/AddNewProductForm";
const AddNewProduct = () => {
  return (
    <>
      <NavBar />
      <AddNewProductForm />
    </>
  );
};

export default observer(AddNewProduct);
