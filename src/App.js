import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Header, Button, Icon} from 'semantic-ui-react';
import FlashCardList from './FlashCardList';
import FlashForm from './FlashForm';

class App extends React.Component {

  state = {
    cards: [
      {id: 1, term: "Content Model", concept: "The [...] refers to a set of rules that define what content elements are allowed to wrap."},
      {id: 2, term: "It needs to start with let or var", concept: `What is incorrect about this variable definition: message = "hi";`},
      {id: 3, term: "Nested tags have to be closed before the outer tag is closed", concept: `Why would an error be shown for this line of code? <p>I love learning! With <span>all</p> my heart. </span>`},
    ],
    showAnswer: false,
    // showForm: false,
  };
  
  addCard = (cardObj) =>{
    let newCard = {
      id: Math.random(),
      term: cardObj.term,
      concept: cardObj.concept,
    };
    let cards = [...this.state.cards, newCard];
    this.setState({cards: cards});
  }
  // toggleForm = () =>{
  //   this.setState({showForm: !this.state.showForm});
  // }
  updateCard = (updateCard) =>{
    let cards = this.state.cards.map((c)=>
      c.id === updateCard.id ? updateCard : c
    );

    console.log({cards});
    this.setState({cards});
  };

  toggleAnswer = () =>{
    this.setState({showAnswer: !this.state.showAnswer});
  };

  deleteCard = (id) => {
    let cards = this.state.cards.filter((c) => c.id !== id);
    this.setState({cards});
  };

  render (){
    const {cards, showAnswer} = this.state;
    return (
      <Container style={{marginTop: "7%"}}>
          <Header class="h1" as="h1" style={{textAlign: "center"}}>Flash Cards</Header>
           {showAnswer && 
           <FlashForm addCard={this.addCard} hideAddForm={this.toggleAnswer} />
           }
          <Button 
          style={{marginBottom: "5%"}} 
          onClick={this.toggleAnswer}>
          {showAnswer ? "Close" : "Add Card"}
            </Button>

           <FlashCardList 
           remove={this.deleteCard}
           listOfCards={cards}
           updateHandler={this.updateCard}
           />
      </Container>
    );
  }
  
}

export default App;
