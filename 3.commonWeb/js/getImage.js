//所有的图片
var imgs = document.querySelectorAll('.lazy-img');
//首屏图片加载
lazyLoad(imgs)
//剩余图片加载---监听滚动事件
window.addEventListener('scroll',function(){
    //滚动事件触发太频繁了，所以加上节流
    throttle(lazyLoad(imgs),200,500)
})
function lazyLoad(imgs,offset){
    offset = offset || 100;
    if (!imgs || imgs.length < 1) {
        console.log('imgs为空');
        return ;
    }
    [].slice.call(imgs).forEach(function(element,index){
        //元素的DomRect
        var rect = element.getBoundingClientRect()
        //出现在视窗中
        if (rect.top <= window.innerHeight + offset && rect.right > 0) {
            element.setAttribute('src',element.getAttribute('data-src'))
        }
    })
}
function throttle (fn, delay, atleast) {
    let timer = null
    let startTime = new Date()

    return function () {
        let context = this
        let args = arguments
        let curTime = new Date()

        clearTimeout(timer)
        if (curTime - startTime >= atleast) {
            fn.apply(context, args)   // apply 指定函数指向的 上下文(this) 和 参数列表
            startTime = curTime
        } else {
            timer = setTimeout(function () {
                fn.apply(context, args)
                startTime = curTime
            }, delay)
        }
    }
}