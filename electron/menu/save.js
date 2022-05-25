import { dialog } from "electron";
let fs = require("fs");
// let dialog = new Dialog()
export function save(content) {
  dialog
    .showSaveDialog({
      filters: [
        {
          name: "MD文件",
          extensions: ["md"],
        },
      ],
      properties: ["openFile"],
      message: "选择要导入的Mackdown文件",
      buttonLabel: "导入",
      title: "保存文件",
    })
    .then((res) => {
      console.log(res,content);
      
      fs.writeFileSync(res.filePath, content);
    })
    .catch((req) => {
      console.log(req);
    });
}
