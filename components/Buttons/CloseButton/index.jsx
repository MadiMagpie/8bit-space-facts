import {IoClose} from 'react-icons/io5';

export function CloseButton(props){
    return(
            <IoClose className = 'close' size = {25} onClick = {props.onClick} />
    );
}