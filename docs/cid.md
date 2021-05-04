# cid查找弹幕(转载自B站评论区)
## 简易版
一次性提取目前为止的弹幕，历史弹幕及刷新掉的弹幕可能会被顶掉  
使用方法：  
在浏览器输入`https://api.bilibili.com/x/v1/dm/list.so?oid=xxxxxx（xxxxxx为cid）`  
或输入`http://comment.bilibili.com/xxxxx.xml（xxxxx为cid）`
## 进阶版
可找到番剧上架后具体日期的历史弹幕  
使用方法：  
在浏览器输入`https://api.bilibili.com/x/v2/dm/history?type=1&date=20XX-XX-XX&oid=XXXXX`  
（前面20xx-xx-xx为日期，按照年月日排列，例如2011-12-24或2015-04-01；后面的xxxxx为cid）​