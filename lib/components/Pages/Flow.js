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

    const html = `
    <section>
      <header>
          <h1 id="flow-name">${name}</h1>
      </header>
    </section>
    ${ToolPanel(data)}
    <div id="flow" class="container">
      <div class="column">
        <h1>section</h1>
          <div id="sortable-sections">
            ${sections.map(SectionCard).join(' ')}
          </div>
      </div>
      <div class="column">
          <h1>asana</h1>
          <div id="sortable-asanas">
            ${songs.map(SongCard).join(' ')}
          </div>
      </div>
      <div class="column">
        <h1>music</h1>
        <div id="sortable-songs">
            ${asanas.map(AsanaCard).join(' ')}
        </div>
      </div>
    </div>
    `;
    if (!renderSelf) return html;
    document.querySelector(parentDivId).innerHTML = html;
    Sortable.create(document.getElementById('sortable-asanas'));
    Sortable.create(document.getElementById('sortable-songs'));
}
