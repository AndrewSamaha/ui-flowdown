import { verticalScale } from "../constants/scale";

const getHeight = ({duration}) => {
    return duration.float * verticalScale;
}

export const SongCard = (data) => {
    const height = getHeight(data);
    return `
    <div class="song card" style="height: ${height}em;">
        ${data.name} - ${data.artist} - ${data.duration.string}
    </div>
    `;
}

export const AsanaCard = (data) => {
    const height = getHeight(data);
    return `
    <div class="asana card" style="height: ${height}em;">
        ${data.name} - ${data.duration.string} ${data.cue ? `<br>${data.cue}` : ''} 
    </div>
    `;
}

export const SectionCard = (data) => {
    const height = getHeight(data);
    return `
    <div class="section card" style="height: ${height}em;">
        ${data.name} 
    </div>
    `;
}

