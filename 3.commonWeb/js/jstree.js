$(function() {

    /**  1---0 固定 ul li
     */
    $(function() {
        $('#container').jstree();
    });

    /**  1---1 动态 ul li
     */
    $('#container1').jstree({
        'core' : {
            'data' : [
                { "text" : "Root node", "children" : [
                        { "text" : "Child node 1" },
                        { "text" : "Child node 2" },
                        { "text" : "Child node 2" ,"children" : [
                                { "text" : "dosome" },
                                { "text" : "Child node 1" }
                        ]}
                    ]
                }
            ]
        }
    });

    /**
     *   id - 这个ID会在对应的‘LI’ 节点上设置html标签的ID属性. 请确保ID的唯一性，每个节点的ID都应该不一样，否则会有出现一些莫名其妙的问题.
         icon - 节点图标，可以设置表示路径、一个或者多个CSS类名、字体图标的字符串.
         data - 任何数据，设置这个属性没有任何UI上的效果，任何时候都可以读写这个数据.
         state - 对象类型，一个节点的状态有一下几种:
         selected - 节点处于被选中状态
         opened - 节点处于打开状态
         disabled - 节点不可选
         checked - 用于checkbox插件 - 勾选该checkbox(只有当 tie_selection 处于 false时有效)
         undetermined - 用于checkbox插件 - 状态待定 (只有启用懒加载并且节点没有被加载时生效).
         type - 用于types插件 - 用来定义节点类型，默认为 "default" 类型.
         li_attr -包含DOM属性的对象， 会追加到该节点对应的LI标签.
         a_attr - -包含DOM属性的对象， 会追加到该节点对应的A标签.
     */
    $('#container2').jstree({
        'core' : {
            'data' : [
                {
                    "text" : "Root node",
                    "state" : {"opened" : true },
                    "children" : [
                        {
                            "text" : "Child node 1",
                            "state" : { "selected" : true },
                            "icon" : "glyphicon glyphicon-flash"
                        },
                        {   "text" : "Child node 2",
                            "state" : { "disabled" : true }
                        }
                    ]
                }
            ]
        }
    });

    /**
     *  一个具体的AJAX DEMO
     *  jstree 自带的ajax
     *       [{
              "id":1,"text":"Root node","children":[
                {"id":2,"text":"Child node 1"},
                {"id":3,"text":"Child node 2"}
              ]
            }]
     */
    $('#container3').jstree({
        'core' : {
            'data' : {
                "url" : "//www.jstree.com/fiddle/",
                "dataType" : "json"
            }
        }
    });

    /**
     *  一个具体的AJAX DEMO
     *  jstree 自带的ajax
     */
    $('#container4').jstree({
        'core' : {
            'data' : function (node, cb) {
                if (node.id === "#") {
                    cb([{"text" : "Root", "id" : "root1", "children" : true}]);
                } else if(node.id === "root1") {
                    cb([{"text" : "child1", "id" : "child1", "children" : true},
                        {"text" : "child2", "id" : "child2", "children" : true},
                        {"text" : "child3", "id" : "child3", "children" : true}
                    ]);
                } else if(node.id === "child1") {
                    cb(["111111"]);
                } else if(node.id === "child2") {
                    cb(["222222"]);
                } else if(node.id === "child3") {
                    cb(["333333"]);
                }
            }
        }
    });


});