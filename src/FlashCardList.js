import FlashCard from "./Card";
import {List} from "semantic-ui-react";

const FlashCardList = ({listOfCards, updateHandler, remove}) =>{
    let renderCards = () =>{
        return listOfCards.map((c) => {
            return (
                <FlashCard
                key={c.id}
                {...c}
                removeCard={remove}
                updateHandler={updateHandler}
                />
            );
        });
    };
    return(
        <div>
            <List>{renderCards()}</List>
        </div>
    )
}
export default FlashCardList;