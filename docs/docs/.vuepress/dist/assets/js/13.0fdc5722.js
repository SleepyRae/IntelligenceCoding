(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{358:function(s,a,t){"use strict";t.r(a);var n=t(41),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nacos部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nacos部署"}},[s._v("#")]),s._v(" Nacos部署")]),s._v(" "),t("h2",{attrs:{id:"docker部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker部署"}},[s._v("#")]),s._v(" docker部署")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker run -d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JVM_XMS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("384m "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JVM_XMX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("384m "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JVM_XMN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("192m "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MODE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("standalone "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SPRING_DATASOURCE_PLATFORM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_SERVICE_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql_host "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_SERVICE_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql_port "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_SERVICE_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_SERVICE_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql_root_password"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_SERVICE_DB_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nacos "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--env "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NACOS_AUTH_ENABLE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v(":8848 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name nacos "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nnacos/nacos-server:1.4.2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h2",{attrs:{id:"常规部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常规部署"}},[s._v("#")]),s._v(" 常规部署")]),s._v(" "),t("p",[s._v("请自行百度下载修改配置")])])}),[],!1,null,null,null);a.default=e.exports}}]);