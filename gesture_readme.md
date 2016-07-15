#  主要功能 [源码](https://github.com/pinglikethinking/jsComponents_works/blob/master/demo/gesturework.html)
touchSwipe主要用来判断滑动方向，至于想怎么显示就是自己的事了
* 如果首页内容不是太多，直接将每块内容放在合适位置，通过$(".容器类名").animate({"移动方向":GuesTure.offset * -100 + "%"},该方向总的高宽);移动模块位置。
* 首页内容太多，可以后台按需加载，前台调用接口将显示的显示，删除的删除参考guster.html
* 判断设备类型：JS脚本判断，用的navigator.userAgent，如下

```javascript
function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
```
 

#### 产权声明：
touchSwipe引自...忘记了囧！
页面内的JS代码自创
