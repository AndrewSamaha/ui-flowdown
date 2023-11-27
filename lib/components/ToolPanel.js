const toolIconMap = {
    reorder: "./reorder.svg",
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
            data.SortableAsanas.option("disabled", true);
            data.SortableSongs.option("disabled", true);
            console.log(`tool: [${tool}]`)
            if (tool === selectedToolVar()) {
                selectedToolVar('')
            } else {
                selectedToolVar(tool);
                if (tool === "reorder") {
                    data.SortableAsanas.option("disabled", false);
                    data.SortableSongs.option("disabled", false);
                }
            }
            console.log(`sortable status: ${data.SortableAsanas.option("disabled")} `)
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
