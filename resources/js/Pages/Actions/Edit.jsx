import EditForm from "@/Components/Forms/EditForm";
import Layout from "@/Components/Layout";


const Edit = ({ item, units, unit }) => {
    
    return (
      <Layout children={<EditForm item={item[0]} units={units} />}/>
    )
}

export default Edit;