import Layout from '../components/layouts'
import useSWR from "swr"
import {useState} from "react"
export default function Home() {
  const [pref,setPref]=useState({id:0,item:"name"})
  const [address,setAddress] = useState('/api/hello'
        +pref.id+"/"+pref.item)
  const {data,err} = useSWR(address)
  const onChange=(e)=>{
    pref.id=e.target.value
    setPref(pref)
    setAddress("/api/hello/" + pref.id+"/" + pref.item)
  }
  const onSelect = (e)=>{
    pref.item=e.target.value
    setPref(pref)
    setAddress("api/hello"+pref.id+"/"+pref.item)
  }
  
  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">
            {JSON.stringify(data)}
          </h5>
          <input type="number" onChange={onChange} className="form-control" />
          <select onChange={onSelect} className="form-control form-control-sm">
            <option value="name">Name</option>
            <option value="mail">Mail</option>
            <option value="age">Age</option>
          </select>
        </div>
      </Layout>
    </div>
  )
}
