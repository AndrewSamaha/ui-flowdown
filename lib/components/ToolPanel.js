export const AddTool = (props) => {
    return `
    <div class="tool">
        <img src="./add.svg">
    </div>
    `
}

export const DuplicateTool = (props) => {
    return `
    <div class="tool">
        <img src="./copy.svg">
    </div>
    `
}

export const TrashTool = (props) => {
    return `
    <div class="tool">
        <img src="./delete.svg">
    </div>
    `
}

export const ToolPanel = (data) => {
    return `
    <div class="toolpanel">
        <div class="tool-panel-spacer"></div>
        ${AddTool(data)}
        ${DuplicateTool(data)}
        ${TrashTool(data)}
        <div class="tool-panel-spacer"></div>
    </div>
    `;
}
