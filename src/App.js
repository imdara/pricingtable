import logo from './logo.svg';
import './App.css';
import Card from './Card';

const cardData = [
  {id:1, 
  name: "Free", 
  price: 0,
  user: "Single User",
  storage: "5GB Storage",
  domain: "Free Subdomain",
  text: ["text","text","text","text","text-muted","text-muted","text-muted","text-muted"], 
  mode:["fas fa-check","fas fa-check","fas fa-check","fas fa-check","fas fa-times","fas fa-times","fas fa-times","fas fa-times"]
  },
  {id:2, 
  name: "Plus", 
  price: 9,
  user: "5 Users",
  storage: "50GB Storage",
  domain: "Free Subdomain",
  text: ["text","text","text","text","text","text","text","text-muted"],  
  mode:["fas fa-check","fas fa-check","fas fa-check","fas fa-check","fas fa-check","fas fa-check","fas fa-check","fas fa-times"]
  },
  {id:3, 
  name: "Pro", 
  price: 49, 
  user: "Unlimited Users",
  storage: "150GB Storage",
  domain: "Unlimited Free Subdomains",
  text: ["text","text","text","text","text","text","text","text"], 
  mode:["fas fa-check","fas fa-check","fas fa-check","fas fa-check","fas fa-check","fas fa-check","fas fa-check","fas fa-check"]
  } 
  ];

function App() {
  return (
    <div className="App">
    <ul className="PlanList">
      {
        cardData.map((card) => {return <Card key={card.id} id={card.id} name={card.name} price={card.price} mode={card.mode} 
        text={card.text} user={card.user} storage={card.storage} domain={card.domain}/>})
      }
    </ul>
    </div>
  );
}

export default App;
