import {useState} from 'react';
import {Form, Button, TextArea} from 'semantic-ui-react';

const FlashForm = (props) =>{
    const [term, setTerm] = useState(props.term ? props.term : "");
    const [concept, setConcept] = useState(props.concept ? props.concept : "");

    // const [card, setCard] = useState({term: "", concept: ""});

    const handleSubmit = (e) =>{
        if(props.id){
            props.editCard({term, concept, id: props.id});
            props.hideEditForm();
        }else{
            props.addCard({term, concept});
            props.hideAddForm();
        }
        setTerm("");
        setConcept("");
    }

    // const handleChange = (e) =>{
    //     setCard({...card, [e.target.term]: e.target.value});
    // }


    return (
        <Form unstackable onSubmit={handleSubmit} style={{marginBottom: "10%"}}>
   <Form.Group widths={2}>
   <Form.Field>
      <Form.Input 
      size="small"
      placeholder='Apple' 
      label="Term"
      value={term}
      onChange={(e)=>{
          setTerm(e.target.value);
      }}
      />
    </Form.Field>
    <Form.Field control={TextArea} value={concept}
      placeholder='A very delicious fruit that grows on a tree, typically in New York!' 
      size="small"
      label="Concept"
      value={concept}
      onChange={(e)=>{
          setConcept(e.target.value);
      }}>
    </Form.Field>
    <Button style={{marginTop: "10%"}} color="green" type='submit'>{props.id ? "Edit Card" : "Add Card"}</Button>
   </Form.Group>
   
  </Form>
    );
};
export default FlashForm;