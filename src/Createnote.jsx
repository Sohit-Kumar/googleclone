import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ReplayIcon from '@material-ui/icons/Replay';

const Createnote = (props) => {

    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    const inputEvent = (event) =>{

        // const value = event.target.value;
        // const name = event.target.name;

        const {name,value}=event.target;

        setNote((prevdata) =>{
            return{
                    ...prevdata,
                    [name]:value,
            };
        
        });
        
    };

    const addEvent = () =>{
            props.passNote(note);
            setNote({
                title: '',
                content: '',
            });
    }

    return (
        <>
            <div className='main_note'>
                <form>
                    <input type='text' name='title' value={note.title} onChange={inputEvent} placeholder='Title' autoComplete='off' />
                    <textarea rows='' column='' name='content' value={note.content} onChange={inputEvent} placeholder='Write a note...' >
                    </textarea>
                    <ReplayIcon className='replayicon' />
                    <Button className='Mui-Button' onClick={addEvent}>
                        <AddIcon className='plus_sign' />

                    </Button>
                </form>
            </div>
        </>
    );
}

export default Createnote;