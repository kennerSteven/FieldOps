import { View,Text } from "react-native"
import Report from "../Src/Features/ListReport/Components/Report"
import { titles } from "@/Styles/Titles.style"
import Navbar from "@/Layouts/NavBar"
import Layout from "@/Layouts/Layout"
import AllReports from "@/app/AllReports"


export default function Page() {
  return (
   <Layout>
       <Text style={[titles,{fontSize:25}]}>Reportes</Text>
     <AllReports/>
     
   </Layout>
  )
}
