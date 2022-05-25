const { app } = require("electron");
const isMac = process.platform === "darwin";
import { save } from "./save.js";
export const template = [
  // { role: 'appMenu' }
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            { role: "about" },
            { type: "separator" },
            { role: "services" },
            { type: "separator" },
            { role: "hide" },
            { role: "hideOthers" },
            { role: "unhide" },
            { type: "separator" },
            { role: "quit" },
          ],
        },
      ]
    : []),
  // { role: 'fileMenu' }
  {
    label: "文件",
    submenu: [
      isMac ? { role: "close" } : { role: "quit", label: "关闭" },
      {
        role: "save",
        label: "保存",
        click: () => {
          save(JSON.stringify(app));
        },
      },
    ],
  },
  // { role: 'editMenu' }
  {
    label: "编辑",
    submenu: [
      { role: "undo", label: "撤销" },
      { role: "redo", label: "重做" },
      { role: "cut", label: "剪切" },
      { role: "copy", label: "复制" },
      { role: "paste", label: "粘贴" },
    ],
  },

  // { role: 'viewMenu' }
  {
    label: "查看",
    submenu: [
      { role: "reload", label: "重新加载" },
      { role: "forceReload", label: "强制重新加载" },
      { role: "toggleDevTools", label: "打开开发者工具" },
    ],
  },

  {
    role: "关于",
    submenu: [
      {
        label: "关于",
        click: async () => {
          const { shell } = require("electron");
          await shell.openExternal("https://github.com/andyqier88/omd");
        },
      },
    ],
  },
];
