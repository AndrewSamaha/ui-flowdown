import { createEffect, createSignal, onMount } from "solid-js";
import { createStore } from 'solid-js/store';
import Sortable from 'sortablejs';
import { ToolPanel } from "../molecules/ToolPanel";
import { AsanaCard, SongCard, SectionCard } from "../molecules/Card";

export const FlowEditor = ({queryResult}) => {
    const data = queryResult;
    if (!data) return (<>Loading... data undefined</>);
    const { getAllFlows: flows } = data;
    if (!flows) return (<>Loading... flows undefined</>);
    const flow = flows[1];
    
    if (!flow) return (<>Loading... flow undefined</>);
    const { name='Default name', asanas, sections, songs } = flow;
    const [currentTool, setCurrentTool] = createSignal("");
    const [flowStore, setFlowStore] = createStore(flow);

    onMount(() => {
        Sortable.create(document.getElementById('sortable-asanas'), {
            animation: 250,
            disabled: false,
            store: {
                set: (sortable) => {console.log('sortable-asanas');console.log(sortable.toArray())}
            }
        });
        Sortable.create(document.getElementById('sortable-songs'), {
            animation: 250,
            disabled: false,
            onEnd: (evt) => {
                console.log(`index change: ${evt.oldIndex} => ${evt.newIndex}`)
                // console.log(evt.to)
            },
            store: {
                set: (sortable) => {console.log('sortable-songs:'); console.log(sortable.toArray())}
            }
        });
    })

    const actionGenerator = (list, id, index, action) => (event) => {
        const listContents = flowStore[list];
        console.log(`performing action ${action()} on ${list} id=${id} at index=${index}`)
        console.log(listContents)
    }
    
    return (
        <>
            <section>
                <header>
                    <div class="container">
                        <div class="spacer"></div>
                        <h1 id="flow-name">{name}</h1>
                        <div class="spacer"></div>
                    </div>
                </header>
            </section>
            <ToolPanel
                currentTool={currentTool}
                setCurrentTool={setCurrentTool}
                setFlowStore={setFlowStore}
                flowStore={flowStore}
            />
            <div id="flow" class="container">
                <div class="spacer"></div>
                <div class="column">
                    <h1>section</h1>
                    <div id="sortable-sections">
                        <For each={sections}>
                            {(section, i) => <SectionCard 
                                {...section}
                                action={actionGenerator('sections', section.id, i(), currentTool)} ></SectionCard>}
                        </For>
                    </div>
                </div>
                <div class="column">
                    <h1>asana</h1>
                    <div id="sortable-asanas">
                        <For each={asanas}>
                            {(asana, i) => <AsanaCard
                                {...asana}
                                action={actionGenerator('asanas', asana.id, i(), currentTool)} ></AsanaCard>}
                        </For>
                    </div>
                </div>
                <div class="column">
                    <h1>music</h1>
                    <div id="sortable-songs">
                        <For each={songs}>
                            {(song, i) => <SongCard
                                {...song}
                                action={actionGenerator('songs', song.id, i(), currentTool)} ></SongCard>}
                        </For>
                    </div>
                </div>
                <div class="spacer"></div>
            </div>
        </>
        
    );
}
