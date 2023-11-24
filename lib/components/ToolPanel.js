export const AddTool = (data) => {
    return `
    <div class="tool">
        <img src="./add.svg">
    </div>
    `
}

export const DuplicateTool = (data) => {
    return `
    <div class="tool">
        <img src="./copy.svg">
    </div>
    `
}

export const TrashTool = (data) => {
    return `
    <div class="tool">
        <img src="./delete.svg">
    </div>
    `
}

export const ToolPanel = (data) => {
    return `
    <div class="toolpanel">
        <div class="spacer"></div>
        ${AddTool(data)}
        ${DuplicateTool(data)}
        ${TrashTool(data)}
        <div class="spacer"></div>
    </div>
    `;
}
