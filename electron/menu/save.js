import { dialog, ipcMain } from "electron";
let fs = require("fs");
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
      defaultPath: '',
      message: "选择要导入的Mackdown文件",
      buttonLabel: "导出",
      title: "保存文件",
    })
    .then((res) => {
      console.log(res);
    
      fs.writeFileSync(res.filePath, content);
      // 通知渲染进程，将获取到的文件路径传给Vue组件中响应函数
      // event.sender.send('save-finished', res);
    })
    .catch((req) => {
      console.log(req);
    });
}
