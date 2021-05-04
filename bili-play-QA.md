# B站缓存内无法播放
若你不是大会员，导入大会员专享视频后请**断网**打开B站，此时打开缓存，视频无异常。  
若视频下出现类似**大会员专享**的文字或弹窗禁止播放，请打开缓存文件夹(默认`/storage/emulated/0/Android/data/B站包名(tv.danmaku.bili)/download/`)寻找`entry.json`,删除末尾的  
```
,"no_access_uids":[]
```
例如：  
```
,"no_access_uids":[313724072]
```
其中，中括号内有UID。  
删除后即可播放。  