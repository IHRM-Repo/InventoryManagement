import EditForm from "@/Components/Forms/EditForm";
import Layout from "@/Components/Layout";


const Edit = ({ item, units, unit }) => {
    
    return (
      <Layout children={<EditForm item={item} units={units} selectedUnit={unit}/>}/>
    )
}

export default Edit;