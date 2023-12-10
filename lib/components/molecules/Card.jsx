import { verticalScale } from "../../constants/scale";

import { uniqueId } from "lodash";
const getHeight = ({duration}) => {
    return duration.float * verticalScale;
}

export const SongCard = (props) => {
    const { id } = props;

    const cardId = uniqueId(`songx${id}x`);
    const height = getHeight(props);

    return (
    <div id={cardId} data-id={id} class="song card" style={`height: ${height}em;`} onClick={props.action} >
        {props.name} - {props.artist} - {props.duration.string}
    </div>
    );
}

export const AsanaCard = (props) => {
    const height = getHeight(props);
    return (
    <div class="asana card" data-id={props.id} style={`height: ${height}em;`} onClick={props.action} >
        {props.name} - {props.duration.string}
        {props.cue ? `<br>${props.cue}` : ''} 
    </div>
    );
}

export const SectionCard = (props) => {
    const height = getHeight(props);
    return (
    <div data-id={props.id} class="section card" style={`height: ${height}em;`} onClick={props.action} >
        {props.name} 
    </div>
    );
}

