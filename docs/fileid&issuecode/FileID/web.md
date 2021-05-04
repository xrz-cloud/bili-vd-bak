#### 新方法
1. 打开[此网页](https://www.xrzyun.top/api/html/coding-fileid.html)。  
2. 在第一个框中输入FileID(资源码),点击生成,再点击下方**点击跳转**打开生成的网址。  
3. 在打开的网站中点击**提交**键。  
4. 查看下方**格式化Response**,找到Url,后方即为下载链接。  
5. 若无Url,并出现Error,请检查FileID是否错误。  

图示：  
![图片](https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/7273b8fe5cc0555be954052c22a0022073f9160d.png)

#### 旧方法
1. 打开
> http://tool.chinaz.com/tools/httptest.aspx

#### 后续步骤
2. 如图
![图片](//images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/e95920a604527a03548675a0831444fc87849183.png )  
> 1. 将标 1 的地方从左到右，从上到下，依次改为`https://` | `e.coding.net/open-api` | `POST` | `application/json;charset=utf-8`。  
> 2. 点击标 2 的地方。  
> 3. 标 2 处下面，即 JSON参数设置 ，改为（修改`资源码`三字为资源码数字）  
```
{"Action": "DescribeIssueFileUrl","ProjectName": "xrz-video","FileId": 资源码,"Authorization": "3d81637cf09027ffa006d707419a899e2f3f4cca"}
```
示例:
```
{"Action": "DescribeIssueFileUrl","ProjectName": "xrz-video","FileId": 22187534,"Authorization": "3d81637cf09027ffa006d707419a899e2f3f4cca"}
```
> 4. 点击 模拟请求 。
3. 如图2
![图片](https://xrzyun.coding.net/p/blog/d/cdn/git/raw/web/img/wiki_2.png)
> 点击 2-1 ，下载链接为`S`与`E`中间的，图上的为
```
http://coding-net-production-file-1257242599.cos.ap-shanghai.myqcloud.com/5e7ad2c0-271b-11eb-bcc2-256bb590ce3f.zip?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDay83lFmaS6Y4LTdzMVO1SdZOyJSNOYpr%26q-sign-time%3D1605877207%3B1605880807%26q-key-time%3D1605877207%3B1605880807%26q-header-list%3D%26q-url-param-list%3Dresponse-content-disposition%3Bresponse-expires%26q-signature%3D33d77d4e74ef164898a7c9d8fc86cbf99d19e4bb&response-content-disposition=attachment%3Bfilename%3DAndroidCarrierClassTools_v2.0_20170109-20201115162006.zip&response-expires=Mon%2C%2023%20Nov%202020%2001%3A00%3A07%20GMT
```