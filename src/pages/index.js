import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed"

export default function Home({products}) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* Header */}
      <Header/>
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner/>
        {/* ProductFeed */}
        <ProductFeed products={products}/> 
        
      </main>
    </div>
  );
}

export const getServerSideProps = async(context) => {
  //please calculate somthing on the server first to rednder out the page and then deliver it to user rather then sending full site
  const products = await fetch('https://fakestoreapi.com/products')// >>get 
  .then(
    res=>res.json()
  )
  return {
    props:{
      products,
    }
    }
console.log(products)
}

