import ViewForm from "@/Components/Forms/ViewForm";
import Layout from "@/Components/Layout";


const View = ({ item, dates }) => {
   
    return (
      <Layout children={<ViewForm item={item} dates={dates} />}/>
    )
}

export default View;