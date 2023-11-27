import { createSignal, createEffect } from 'solid-js'

import addIcon from '../../assets/add.svg';
import copyIcon from '../../assets/copy.svg';
import deleteIcon from '../../assets/delete.svg';
import reorderIcon from '../../assets/reorder.svg';

const toolIconMap = {
    reorder: reorderIcon,
    add: addIcon,
    copy: copyIcon,
    delete: deleteIcon
}

export const GenericTool = (options) => {
    const { tool, selected, setSelected } = options;
    const getToolName = () => `tool-${tool}`;

    const handler = () => {
        let newSelected = '';
        if (selected() !== tool) newSelected = tool;
        setSelected(newSelected)
    }
    return (
    <div id={getToolName()} class={`tool ${selected() === tool ? 'selected' : ''}`} onClick={handler}>
        <img src={toolIconMap[tool]} />
    </div>
    );
}

export const ToolPanel = (data) => {
    const { currentTool, setCurrentTool } = data;

    return (
    <div class="toolpanel">
        <div class="spacer"></div>
        <For each={Object.keys(toolIconMap)}>
            {(tool) => <GenericTool tool={tool} selected={currentTool} setSelected={setCurrentTool} />}
        </For>
        <div class="spacer"></div>
    </div>
    );
}
