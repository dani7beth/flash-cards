import {useState} from 'react';
// import FlashForm from './FlashForm';
import {Button,Card, Grid, Image} from 'semantic-ui-react';
import FlashForm from './FlashForm';
const FlashCard = ({term, concept, id, updateHandler, removeCard}) => {
    
    const [showAnswer, setShowAnswer] = useState(false);
    const [showForm, setShowForm] = useState(false);

    return (
            <Card.Group>
                <Card raised>
                    <Card.Content>
                        <Card.Header>{concept}</Card.Header>
                        <Button icon="pencil" onClick={() => setShowForm(!showForm)} />
                        <Button icon="trash" color="red" onClick={()=> removeCard(id)} />
                    </Card.Content>
                    <Card.Content extra >
                    {showAnswer && (<Card.Description>{term}</Card.Description>)}
                    </Card.Content>
                    <Button basic color="blue" onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? "Close Answer" : "Show Answer"}</Button>
                </Card>
                {showForm && (
                    <FlashForm 
                        editCard={updateHandler} 
                        id={id}
                        term={term}
                        concept={concept}
                        hideEditForm={() => setShowForm(false)}
                    />
                )}
            </Card.Group>
    );
};
export default FlashCard;