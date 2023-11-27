import Sortable from 'sortablejs';
import { ToolPanel } from '../ToolPanel';
import { AsanaCard, SongCard, SectionCard } from "../cards";

export const Flow = (data, options) => {
    const {
        renderSelf = false,
        parentDivId = '#app'
    } = options;
    const { flow } = data;
    const { name, asanas, sections, songs } = flow;
    console.log(data)
    const html = `
    <section>
      <header>
            <div class="container">
                <div class="spacer"></div>
                <h1 id="flow-name">${name}</h1>
                <div class="spacer"></div>
            </div>
      </header>
    </section>
    ${ToolPanel(data)}
    <div id="flow" class="container">
        <div class="spacer"></div>
        <div class="column">
            <h1>section</h1>
            <div id="sortable-sections">
                ${sections.map((section) => SectionCard(data, section)).join(' ')}
            </div>
        </div>
        <div class="column">
            <h1>asana</h1>
            <div id="sortable-asanas">
                ${songs.map((song) => SongCard(data, song)).join(' ')}
            </div>
        </div>
        <div class="column">
            <h1>music</h1>
            <div id="sortable-songs">
                ${asanas.map((asana) => AsanaCard(data, asana)).join(' ')}
            </div>
        </div>
        <div class="spacer"></div>
    </div>
    `;
    if (!renderSelf) return html;
    document.querySelector(parentDivId).innerHTML = html;
    if (!data.SortableAsanas) data.SortableAsanas = Sortable.create(document.getElementById('sortable-asanas'), {
        animation: 250,
        disabled: true
    });
    if (!data.SortableSongs) data.SortableSongs = Sortable.create(document.getElementById('sortable-songs'), {
        animation: 250,
        disabled: true
    });

}
