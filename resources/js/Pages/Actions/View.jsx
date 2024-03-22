import ViewForm from "@/Components/Forms/ViewForm";
import Layout from "@/Components/Layout";


const View = ({ item, dates, unit }) => {
   
    return (
      <Layout children={<ViewForm item={item} dates={dates} unit={unit} />}/>
    )
}

export default View;