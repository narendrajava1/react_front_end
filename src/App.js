import logo from './logo.svg';
import './App.css';
import chicken_BoneLess from "./asserts/chickenBonelessPickle.jpg";
import * as RNLocalize from "react-native-localize";


const pickles=[
    {
        name:'Chicken Boneless',
        ingredients:'Chicken Boneless,Tomato,Garlic,Oil',
        photoName:chicken_BoneLess,
        qty:1000,
        soldOut:false
    },
    {
        name:'Chicken With Bone',
        ingredients:'Chicken With Bone,Tomato,Garlic,Oil',
        photoName:chicken_BoneLess,
        qty:1000,
        soldOut:false
    },
    {
        name:'Prawns Boneless',
        ingredients:'Prawns Boneless,Tomato,Garlic,Oil',
        photoName:chicken_BoneLess,
        qty:1000,
        soldOut:false
    },
    {
        name:'Prawns With Bone',
        ingredients:'Prawns With Bone,Tomato,Garlic,Oil',
        photoName:chicken_BoneLess,
        qty:1000,
        soldOut:false
    },
    {
        name:'Mutton With Bone',
        ingredients:'Mutton With Bone,Tomato,Garlic,Oil',
        photoName:chicken_BoneLess,
        qty:1000,
        soldOut:true
    }
    ]
function App() {

        const hour=new Date().getHours();
        const openHour=9;
        const closedHour=22;
        const isOpen=hour>=openHour&&hour<=closedHour ?  true:false;
  return (
    <div className="container">
        <Header/>
      <h2>OUR MENU</h2>
        {

            pickles.length>0? <ul>
                { pickles.map(pickle=>{
                    return  <Menu  pickleObj={pickle} key={pickle.name}/>})}
            </ul>:<p>We're currently working on our menu...Please come back later :)</p>
        }

        <Footer isOpen={isOpen} closedHour={closedHour}/>
    </div>
  );
}

const Menu=(props)=>{
    console.log(props);

    const qty=1000;
    const oneKGPrice= props.pickleObj.name.includes('With Bone')?1000:1200;

    const price=(props.pickleObj.qty*oneKGPrice)/qty;
    const symbol= (locale,currency)=>{
        // eslint-disable-next-line no-unused-expressions
        return new Intl.NumberFormat(locale,{style:'currency',currency})
            .formatToParts(1)
            .find(x => x.type === "currency")
            .value;
    }

    return <li style={{margin:'1px 0px 10px 0px'}} style={props.pickleObj.soldOut ?{backgroundColor:'grey',width:'280px'}: {backgroundColor:'white'}}>
        <img src={props.pickleObj.photoName} alt="this is chicken"/>
       <div>
        <h3 style={{margin:'1px'}}>{props.pickleObj.name}</h3>
        <p  style={{margin:'1px 0px 0px 0px'}}>{props.pickleObj.ingredients}</p>
        <span >{props.pickleObj.soldOut ? 'Sold Out': `Price:${price} ${symbol('rupee', 'INR')}`}</span><br/>

       </div>
    </li>
}
const Header=()=>{
    return <div>
        <h1
            // style={{color:'pink',textTransform:'uppercase'}}
            className={'header'}>Welcome to Chandrika's Multicusine Restuarant</h1>
    </div>
}


const Footer=(props)=>{
    console.log(props)
    const hour=new Date().getHours();
    const openHour=12;
    // const closedHour=18;
    // const statusOfResturant=hour>=openHour&&hour<=closedHour ?  `${hour} we're currently open`:`${hour} we're currently closed`;

        const statusOfResturant=props.isOpen?(
            <div>
            <p>We're open until {props.closedHour} come and order online</p>
                <button type="submit">Order</button>
            </div>

        ):<p>We're happy to welcome you before {props.closedHour}</p>

    return <div>
        <h3>{statusOfResturant}</h3>
    </div>
}

export default App;
