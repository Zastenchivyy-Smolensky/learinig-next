import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Header(props){
    return(
        <Head>
            <title>{props.title}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>

        </Head>        
    )
}