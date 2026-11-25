---
title: 文件与文件夹 | OpenTYUT
titleTemplate: false
description: 面向电脑新手的文件管理入门。用 Windows 文件资源管理器或 macOS 访达查看路径和文件扩展名，练习解压 ZIP，并把课程资料和作业分开放好。
---

# 1.3 文件与文件夹

老师在课程群里发了一个压缩包。你下载后能点开它，关掉窗口却不知道去哪找；作业改了三版，提交时又分不清哪个是最终版。这一节就用这两个场景练习：找到文件、弄清它的类型，再把它放到容易找回的位置。

下面以 Windows 11 和 macOS 为例，不需要安装额外的软件。

## 先知道文件放在哪

笔记、照片、作业都是文件。文件夹可以放文件，也可以再放文件夹。比如，`文档` 里有个 `课程作业` 文件夹，`课程作业` 里面再按课程分。两个文件即使都叫 `第01次作业.pdf`，放在不同的文件夹里，也能用路径区分。

**路径就是文件在电脑上的地址。** 比如把 `lecture-01.pdf` 放在 `course-work` 文件夹里，下面是同一个练习结构在两种系统上的路径示例：

- Windows：`C:\Users\student\Documents\course-work\lecture-01.pdf`
- macOS：`/Users/student/Documents/course-work/lecture-01.pdf`

从盘符或根目录写起的是**绝对路径**。如果约定从 `course-work` 出发，只写 `lecture-01.pdf` 也能说明位置，这就是**相对路径**。上面的 `student` 只是示例用户名，你电脑上的实际位置可能不同。

| 要做什么 | Windows 11 | macOS |
| --- | --- | --- |
| 找浏览器刚下载的文件 | 按 `Win + E` 打开文件资源管理器，先看「下载」 | 打开「访达」，先看侧边栏里的「下载」 |
| 确认目前在哪个文件夹 | 看窗口顶部的地址栏，点地址栏空白处可以看到路径 | 在菜单栏选「显示 → 显示路径栏」，位置会出现在窗口底部 |

如果「下载」里没有，用浏览器的下载记录找到那一项，再点「在文件夹中显示」或类似选项。别只凭文件名猜位置。

## 看懂文件扩展名

文件名结尾的 `.pdf`、`.txt`、`.zip` 是**扩展名**，通常用来识别文件格式：`.pdf` 常见于讲义和作业，`.txt` 是纯文本，`.zip` 可以把多个文件打包在一起。

- **Windows 11**：在文件资源管理器选「查看 → 显示 → 文件扩展名」。
- **macOS**：在菜单栏选「访达 → 设置 → 高级」，勾选「显示所有文件扩展名」。

改扩展名不会改变文件格式。把 `作业.docx` 改名成 `作业.pdf`，它仍然不是 PDF；应在原应用里导出 PDF。打开扩展名显示后，也更容易发现 `讲义.pdf.exe` 这样的文件：它最后的扩展名是 `.exe`，不是 `.pdf`。来源不明的文件先别打开。

## 先解压，再编辑

能在 ZIP 里预览一份讲义，不等于已经把整套资料解压了。尤其是课程示例里有多个相互引用的文件时，建议先全部解压，再打开里面的文件。

- **Windows 11**：右键单击 `.zip`，选择「全部提取」，确认目标文件夹。
- **macOS**：在访达中双击 `.zip`，解压后的内容会出现在压缩包所在的文件夹。

解压完后从新生成的内容里打开文件。若一时分不清哪个是原包，先看扩展名，再看地址栏或路径栏。

## 动手练习：整理一次课程作业

选一份不含个人信息的 PDF 或文本文件做练习，不用下载陌生压缩包。

1. 在「文档」里建立 `课程作业`，在里面新建 `程序设计`，再建 `课件` 和 `作业` 两个文件夹。
2. 把练习文件**复制**到 `课件`，保留原文件。在文件管理器里检查副本的路径和扩展名。
3. 在「下载」里新建 `打包练习`，把练习文件的另一份副本放进去。右键单击这份副本，在 Windows 选压缩为 ZIP 的选项，在 macOS 选「压缩」。
4. 在「下载」里另建一个空的 `解压练习`，把生成的 ZIP 移进去，再按上一节的步骤解压。试着打开解压后的文件，并指出它与 ZIP 包的区别。
5. 把解压后的副本移到 `作业`，按实际格式命名，比如 `第01次作业-v1.pdf`。关闭窗口，从「文档」重新找到它。正式提交时，文件名以老师要求为准。

整理完可以是下面这样（示例用 PDF，实际扩展名按你的文件保留）：

```text
文档/
└── 课程作业/
    └── 程序设计/
        ├── 课件/
        │   └── lecture-01.pdf
        └── 作业/
            └── 第01次作业-v1.pdf
```

这个练习最重要的不是文件夹名字，而是你知道**原文件在哪、编辑的是哪一份、最终提交的是哪一份**。

## 参考资料

- Microsoft：[Windows 中的文件资源管理器](https://support.microsoft.com/zh-cn/windows/experience/fileexplorer/file-explorer-in-windows)、[常见文件扩展名](https://support.microsoft.com/zh-cn/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows)、[压缩和解压缩文件](https://support.microsoft.com/zh-cn/windows/experience/storage-filemanagement/zip-and-unzip-files)
- Apple：[查看文件路径](https://support.apple.com/zh-cn/guide/mac-help/mchlp1774/mac)、[显示或隐藏文件扩展名](https://support.apple.com/zh-cn/guide/mac-help/mchlp2304/mac)、[压缩和解压缩文件](https://support.apple.com/zh-cn/guide/mac-help/mchlp2528/mac)
