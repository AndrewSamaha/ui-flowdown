import { verticalScale } from "../constants/scale";
import { uniqueId } from "lodash";
const getHeight = ({duration}) => {
    return duration.float * verticalScale;
}

export const SongCard = (data, options) => {
    const { selectedToolVar, currentPage } = data;
    const { id } = options;

    const cardId = uniqueId(`songx${id}x`);
    const height = getHeight(options);
    setTimeout(() => {
        document.querySelector(`#${cardId}`).addEventListener("click", (event) => {
            console.log(`click ${cardId} with ${selectedToolVar()}`)
            console.log(event)
            //currentPage(data, { renderSelf:true });
        })
    }, 0);
    return `
    <div id="${cardId}" class="song card" style="height: ${height}em;">
        ${options.name} - ${options.artist} - ${options.duration.string}
    </div>
    `;
}

export const AsanaCard = (data, options) => {
    const height = getHeight(options);
    return `
    <div class="asana card" style="height: ${height}em;">
        ${options.name} - ${options.duration.string} ${options.cue ? `<br>${options.cue}` : ''} 
    </div>
    `;
}

export const SectionCard = (data, options) => {
    const height = getHeight(options);
    return `
    <div class="section card" style="height: ${height}em;">
        ${options.name} 
    </div>
    `;
}

