import ViewForm from "@/Components/Forms/ViewForm";
import Layout from "@/Components/Layout";


const View = ({ item, dates }) => {
  console.log(item)
   
    return (     
      <Layout children={<ViewForm item={item} dates={dates} />}/>
    )
}

export default View;