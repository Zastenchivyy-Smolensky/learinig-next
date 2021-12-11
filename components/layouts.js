import Footer from "./Footer"
import Head from "next/head"
import Header from "./Header"
import styles from "../styles/Home.module.css"

export default function Layouts(props){
    return(
        <div>
            <Head>
                <title>{props.title}</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
                
            </Head>
            <Header header={props.header}/>
            <div className="container">
                <h3 className="my-3 text-primary text-center">
                    {props.title}
                </h3>
                {props.children}
            </div>
            <Footer footer="copyright 影山亮太"></Footer>
        </div>
    )
}