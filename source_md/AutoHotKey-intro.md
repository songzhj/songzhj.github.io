##Windows小插件 - AutoHotKey
> 平时用PokerⅡ用习惯了，很多键位都设定的不一样，用笔记本键盘的时候很不习惯。最近朋友给我推荐了一款Windows下的插件 --- [AutoHotKey](http://www.ahkscript.org/)，感觉很好用，这个插件可以自定义键盘热键，随便定义，你能想到的它就能做到。很棒~

####我自定义的脚本文件 - [anyKey.ahk](https://github.com/songzhj/songzhj.github.io/blob/master/others/anyKey.ahk)
其中定义了几个我常用的键位,包括方向键的重定义(JKLI), 退格和删除键的定义(U/O),关闭(C)等.

####开机自启动
这么炫酷的插件,当然开机自启动才开心.只要把脚本文件的快捷方式放到Windows的启动目录下

	C:\Users\[用户名]\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup

Windows开机时就会将它自启动.