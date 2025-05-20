// 加载SageCell脚本
(function() {
    // 创建script元素加载SageCell
    var script = document.createElement('script');
    script.src = 'https://sagecell.sagemath.org/static/embedded_sagecell.js';
    script.onload = function() {
        // 脚本加载完成后初始化SageCell
        // 使任何带有'sage'类的div成为SageCell
        sagecell.makeSagecell({
            inputLocation: '.sage',
            evalButtonText: '运行',
            autoeval: true,
            linked: true,
            linkKey: "key1"
        });
        
        // 使任何带有'sage-interact'类的div成为交互式SageCell
        sagecell.makeSagecell({
            inputLocation: '.sage-interact',
            evalButtonText: '运行交互',
            //mode: "debug",
            //template: sagecell.templates.minimal
        });
    };
    document.head.appendChild(script);
})();
