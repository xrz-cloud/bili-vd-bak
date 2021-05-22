## OneDrive API
此API访问OneDrive的基础目录为`/share`,获取文件目录请参考[bili-vd-bak 首页](https://bili-vd-bak.xrzyun.top/#/?id=%e4%b8%8b%e8%bd%bd%e7%bd%91%e7%9b%98) 下载网盘中的`OneDrive-E5-xrzyun.ml` 。  

基础URL: `https://od-api.xrzyun.top/`  
### 访问文件并跳转
`?path=/dir/to/file.txt`  
### 访问文件并返回相关数据(json)
`/json?path=/dir/to/file.txt`  
可选参数：`prefix`前缀，即返回 msg.url 中链接前缀 ，默认为空时为 `//xrzcloud-my.sharepoint.com/...`。  
返回示例：  
```json
{
  "status": 200,
  "msg": {
    "en": "",
    "zh-cn": "",
    "url": "${prefix}//xrzcloud-my.sharepoint.com/..."
  }
}
```
### 其它
番剧`/share/bangumi`仅需输入`https://od-api.xrzyun.top/?path=/bangumi/...`  