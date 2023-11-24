// const { Flow } = require('../components/Pages/Flow');
import { Flow } from '../components/Pages/Flow';

export const AddTool = (data) => {
    const { selectedToolVar } = data;
    return `
    <div class="tool">
        <img src="./add.svg">
    </div>
    `
}

export const DuplicateTool = (data) => {
    const { selectedToolVar } = data;
    return `
    <div class="tool">
        <img src="./copy.svg">
    </div>
    `
}

export const TrashTool = (data) => {
    const { selectedToolVar } = data;
    return `
    <div class="tool">
        <img src="./delete.svg">
    </div>
    `
}

const toolIconMap = {
    add: "./add.svg",
    copy: "./copy.svg",
    delete: "./delete.svg"
}

export const GenericTool = (data, options) => {
    const { tool } = options;
    const { selectedToolVar, currentPage } = data;
    const getToolName = () => `tool-${tool}`;
    setTimeout(() => {
        document.querySelector(`#${getToolName()}`).addEventListener("click", () => {
            selectedToolVar(tool);
            currentPage(data, { renderSelf:true });
        })
    }, 0);
    return `
    <div id="${getToolName()}" class="tool ${(tool === selectedToolVar() ? "selected" : "")}">
        <img src="${toolIconMap[tool]}">
    </div>
    `;
}

export const ToolPanel = (data) => {
    return `
    <div class="toolpanel">
        <div class="spacer"></div>
        ${Object.keys(toolIconMap).map((tool) => GenericTool(data,{tool})).join("")}
        <div class="spacer"></div>
    </div>
    `;
}
