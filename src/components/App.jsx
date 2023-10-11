import Header from "./Header";
import Card from "./Card";
import emojipedia from "../emoji";

function emojiTerm(details){
  return (
    <Card 
      key= {details.id}
      emoji= {details.emoji}
      name= {details.name}
      meaning= {details.meaning}
    />
  )


}
function App() {
  return (
    <div>
    <Header />

    <dl className="dictionary">

    {emojipedia.map(emojiTerm)}
    
    </dl>
    

      
    </div>
  );
}

export default App;
