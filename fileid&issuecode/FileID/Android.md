#### 第一次使用
1. 安装Termux。
2. 打开Termux。
3. 授予所有权限。
4. (**非必选**,美化终端)输入
```bash
sh -c "$(curl -fsSL https://gitee.com/idkzr/termux-ohmyzsh/raw/master/install.sh)"
```

#### 后续步骤
5. 复制资源码，如`22187534`，  
复制命令,修改`资源码`3个字为复制的资源码。  

````bash 
curl -X POST https://e.coding.net/open-api \
-d '{"Action": "DescribeIssueFileUrl","ProjectName": "xrz-video","FileId": 资源码,"Authorization": "3d81637cf09027ffa006d707419a899e2f3f4cca"}' \
-H "Content-Type:application/json"
````

6. 在Termux里输入**修改后的命令**，回车。  
Demo：  

````bash
curl -X POST https://e.coding.net/open-api \
-d '{"Action": "DescribeIssueFileUrl","ProjectName": "xrz-video","FileId": 22187534,"Authorization": "3d81637cf09027ffa006d707419a899e2f3f4cca"}' \
-H "Content-Type:application/json"
````

7. 得到类似以下字段  
(Tips:第一个框为 格式化前，第二个框为格式化后。)
```json
{"Response":{"RequestId":"bcf22e03-1f35-9e9e-fb4e-0724fb07876d","Url":"http://coding-net-production-file-1257242599.cos.ap-shanghai.myqcloud.com/5e7ad2c0-271b-11eb-bcc2-256bb590ce3f.zip?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDay83lFmaS6Y4LTdzMVO1SdZOyJSNOYpr%26q-sign-time%3D1605870050%3B1605873650%26q-key-time%3D1605870050%3B1605873650%26q-header-list%3D%26q-url-param-list%3Dresponse-content-disposition%3Bresponse-expires%26q-signature%3D3b817c4a35f02aa281fbe7a8d13b1691ed92324d&response-content-disposition=attachment%3Bfilename%3DAndroidCarrierClassTools_v2.0_20170109-20201115162006.zip&response-expires=Sun%2C%2022%20Nov%202020%2023%3A00%3A50%20GMT"}}
```
```json
{
    "Response": {
        "RequestId": "bcf22e03-1f35-9e9e-fb4e-0724fb07876d",
        "Url": "http://coding-net-production-file-1257242599.cos.ap-shanghai.myqcloud.com/5e7ad2c0-271b-11eb-bcc2-256bb590ce3f.zip?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDay83lFmaS6Y4LTdzMVO1SdZOyJSNOYpr%26q-sign-time%3D1605870050%3B1605873650%26q-key-time%3D1605870050%3B1605873650%26q-header-list%3D%26q-url-param-list%3Dresponse-content-disposition%3Bresponse-expires%26q-signature%3D3b817c4a35f02aa281fbe7a8d13b1691ed92324d&response-content-disposition=attachment%3Bfilename%3DAndroidCarrierClassTools_v2.0_20170109-20201115162006.zip&response-expires=Sun%2C%2022%20Nov%202020%2023%3A00%3A50%20GMT"
    }
}
```
复制`"Url": "`到`"`中间的链接，即`"Url": "<链接>"`。  
则这段链接就是下载链接。  
**Tips:**每次获得的链接有效期为1小时。