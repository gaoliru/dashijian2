var BASEURL = "http://localhost:8000";
// 接口基地址 
var APILIST = {
    user_login: BASEURL + "/admin/login",

    user_logout: BASEURL + "/admin/logout",
    user_getInfo: BASEURL + "admin/getuser",
    // 获取文章分类
    category_get: BASEURL + '/admin/category_search',
    // 添加文章分类
    category_add: BASEURL + '/admin/category_add',
    // 删除文章分类
    category_del: BASEURL + '/admin/category_delete',

}