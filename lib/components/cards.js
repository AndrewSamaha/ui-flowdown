import { verticalScale } from "../constants/scale";

const getHeight = (data) => {
    const min = Number(data.duration.split(":")[0]);
    const sec = Number(data.duration.split(":")[1])/60;
    const durationFloat = min + sec;
    const height = durationFloat * verticalScale;
    return height;
}

export const SongCard = (data) => {
    const height = getHeight(data);
    return `
    <div class="song card" style="height: ${height}em;">
        ${data.name} - ${data.artist} - ${data.duration}
    </div>
    `;
}

export const AsanaCard = (data) => {
    const height = getHeight(data);
    return `
    <div class="asana card" style="height: ${height}em;">
        ${data.name} - ${data.duration} ${data.cue ? `<br>${data.cue}` : ''} 
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

