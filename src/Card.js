import {useState} from 'react';
import {Button,Card, Image} from 'semantic-ui-react';
// import FlashForm from './FlashCardList';
const FlashCard = ({term, concept, id, updateHandler, removeCard}) => {
    
    const [showAnswer, setShowAnswer] = useState(false);
    const [showForm, setShowForm] = useState(false);

    return (
         <Card.Group>
        <Card>
      <Card.Content>
        <Card.Header>{concept}</Card.Header>
        {/* <Button icon="pencil" onClick={() => setShowForm(!showForm)} /> */}

        <Button icon="trash" color="red" onClick={()=> removeCard(id)} />
      </Card.Content>
      <Card.Content extra >
      {showAnswer && (<Card.Description>{term}</Card.Description>)}
      </Card.Content>
        <Button onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? "Close Answer" : "Show Answer"}</Button>
        </Card>
      </Card.Group> 
    );
};
export default FlashCard;