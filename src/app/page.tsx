import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDescription from "./components/ProductDescription";
import ProductList from "./components/ProductList";
import ProductList2 from "./components/ProductList2";
import ProductPage from "./components/ProductPage";
import SubscribeSection from "./components/SubscribeSection";
import {description} from "./data";
import { array } from './data';
import {nav}  from './data'
import { features } from "./data";
import { subscribeDesc } from "./data";


export default function Home() {
  return (
    <div>
   <Header nav ={nav} array={array}/>
   <ProductPage/>
    <ProductDescription description={description} />
    <ProductList/>
    <ProductList2/>
   <FeatureSection features ={features}/>
   <SubscribeSection description={subscribeDesc}/>
    <Footer/>
    </div>
  );
}
