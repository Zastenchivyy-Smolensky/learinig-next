import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  let title="next.js page"
  let message="React next.js sample page."
  const h1={
    textAlign:"right",
    padding:"5px 15px",
  }

  const p={
    textAlign:"left",
    margin:"0px 5px",
    color:"#669",
    fontSize:"18pt"
  }
  const subtitle={
    textAlign:"center",
    margin:"0px 5px",
    color:"#99d",
    fontSize:"24pt",
    fontWeight:"bold"
  }
 
  return (
   <div>
     <Head>
      <title>{title}</title>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
     </Head>
     <h1 className="bg-primary text-white display-4" style={h1}>React</h1>
     <div className="container">
       <h4 className="my-3">{title}</h4>
       <div className="alert alert-primary text-center" id="subtile">
         <p className="h5" style={p}>{message}.</p>
       </div>
     </div>
   </div>
  )
}
