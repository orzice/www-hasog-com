/ *！
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 *包括Sizzle.js
 * https://sizzlejs.com/
 *
 *版权所有JS基金会和其他贡献者
 *根据MIT许可证发布
 * https://jquery.org/license
 *
 *日期：2019-05-01T21：04Z
 * /
（功能（全球，工厂）{

	“严格使用”;

	if（typeof module ===“object”&& typeof module.exports ===“object”）{

		//适用于CommonJS和类似CommonJS的环境，其中有一个正确的“窗口”
		//存在，执行工厂并获取jQuery。
		//对于没有带“文档”的“窗口”的环境
		//（例如Node.js），将工厂公开为module.exports。
		//这突出了创建一个真正的“窗口”的需要。
		//例如var jQuery = require（“jquery”）（window）;
		//有关详细信息，请参阅＃14549票。
		module.exports = global.document？
			工厂（全球，真实）：
			function（w）{
				if（！w.document）{
					抛出新错误（“jQuery需要一个带文档的窗口”）;
				}
				返厂（w）;
			};
	} else {
		工厂（全球）;
	}

//如果尚未定义窗口，请传递此项
}）（typeof window！==“undefined”？window：this，function（window，noGlobal）{

// Edge <= 12  -  13 +，Firefox <= 18  -  45 +，IE 10  -  11，Safari 5.1  -  9 +，iOS 6  -  9.1
//当非严格代码（例如，ASP.NET 4.5）访问严格模式时抛出异常
// arguments.callee.caller（trac-13335）。但是从jQuery 3.0（2016）开始，严格模式应该是常见的
//足以让所有这些尝试都在try块中得到保护。
“严格使用”;

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call（Object）;

var support = {};

var isFunction = function isFunction（obj）{

      //支持：Chrome <= 57，Firefox <= 52
      //在某些浏览器中，typeof为HTML <object>元素返回“function”
      //（即`typeof document.createElement（“object”）===“function”`）。
      //我们不想将* any * DOM节点归类为函数。
      return typeof obj ===“function”&& typeof obj.nodeType！==“number”;
  };


var isWindow = function isWindow（obj）{
		return obj！= null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		类型：true，
		src：是的，
		nonce：是的，
		noModule：是的
	};

	function DOMEval（code，node，doc）{
		doc = doc || 文献;

		var i，val，
			script = doc.createElement（“script”）;

		script.text = code;
		if（node）{
			for（i in preservedScriptAttributes）{

				//支持：Firefox 64 +，Edge 18+
				//某些浏览器不支持脚本上的“nonce”属性。
				//另一方面，仅使用`getAttribute`是不够的
				//每当`nonce`属性重置为空字符串
				//变为浏览上下文连接。
				//请参阅https://github.com/whatwg/html/issues/2369
				//请参阅https://html.spec.whatwg.org/#nonce-attributes
				//添加了`node.getAttribute`检查
				//`jQuery.globalEval`，以便伪造一个包含nonce的节点
				//通过一个对象。
				val = node [i] || node.getAttribute && node.getAttribute（i）;
				if（val）{
					script.setAttribute（i，val）;
				}
			}
		}
		doc.head.appendChild（script）.parentNode.removeChild（script）;
	}


function toType（obj）{
	if（obj == null）{
		return obj +“”;
	}

	//支持：Android <= 2.3（功能RegExp）
	return typeof obj ===“object”|| typeof obj ===“功能”？
		class2type [toString.call（obj）] || “对象”：
		对象类型;
}
/ *全球符号* /
//在.eslintrc.json中定义此全局会产生使用全局的危险
//在另一个地方无人看守，为这个模块定义全局似乎更安全



VAR
	version =“3.4.1”，

	//定义jQuery的本地副本
	jQuery = function（selector，context）{

		// jQuery对象实际上只是init构造函数'enhanced'
		//如果调用了jQuery，则需要init（如果不包含则只允许抛出错误）
		返回新的jQuery.fn.init（selector，context）;
	}，

	//支持：Android <= 4.0
	//确保我们修剪BOM和NBSP
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

	//正在使用的jQuery的当前版本
	jquery：版本，

	构造函数：jQuery，

	// jQuery对象的默认长度为0
	长度：0，

	toArray：function（）{
		return slice.call（this）;
	}，

	//获取匹配元素集OR中的第N个元素
	//将整个匹配的元素集作为干净数组
	get：function（num）{

		//返回干净数组中的所有元素
		if（num == null）{
			return slice.call（this）;
		}

		//只返回集合中的一个元素
		返回num <0？这[num + this.length]：这个[num];
	}，

	//获取一系列元素并将其推入堆栈
	//（返回新的匹配元素集）
	pushStack：function（elems）{

		//构建一个新的jQuery匹配元素集
		var ret = jQuery.merge（this.constructor（），elems）;

		//将旧对象添加到堆栈中（作为参考）
		ret.prevObject = this;

		//返回新形成的元素集
		返回;
	}，

	//对匹配集中的每个元素执行回调。
	each：function（callback）{
		return jQuery.each（this，callback）;
	}，

	map：function（callback）{
		return this.pushStack（jQuery.map（this，function（elem，i）{
			return callback.call（elem，i，elem）;
		}）;;
	}，

	slice：function（）{
		return this.pushStack（slice.apply（this，arguments））;
	}，

	第一名：function（）{
		return this.eq（0）;
	}，

	last：function（）{
		return this.eq（-1）;
	}，

	eq：function（i）{
		var len = this.length，
			j = + i +（i <0？len：0）;
		return this.pushStack（j> = 0 && j <len？[this [j]]：[]）;
	}，

	结束：function（）{
		返回this.prevObject || this.constructor（）;
	}，

	// 仅限内部使用。
	//表现得像一个Array的方法，而不是像jQuery方法。
	推推，
	sort：arr.sort，
	拼接：arr.splice
};

jQuery.extend = jQuery.fn.extend = function（）{
	var options，name，src，copy，copyIsArray，clone，
		target = arguments [0] || {}，
		i = 1，
		length = arguments.length，
		deep = false;

	//处理深层复制情况
	if（typeof target ===“boolean”）{
		deep = target;

		//跳过布尔值和目标
		target = arguments [i] || {};
		我++;
	}

	//当目标是字符串或其他东西时处理大小写（可能在深层副本中）
	if（typeof target！==“object”&&！isFunction（target））{
		target = {};
	}

	//如果只传递一个参数，则扩展jQuery本身
	if（i === length）{
		target = this;
		一世 - ;
	}

	for（; i <length; i ++）{

		//仅处理非null /未定义的值
		if（（options = arguments [i]）！= null）{

			//扩展基础对象
			for（选项中的名称）{
				copy = options [name];

				//防止Object.prototype污染
				//防止永无止境的循环
				if（name ===“__ proto__”|| target === copy）{
					继续;
				}

				//如果我们要合并普通对象或数组，请递归
				if（deep && copy &&（jQuery.isPlainObject（copy）||
					（copyIsArray = Array.isArray（copy））））{
					src = target [name];

					//确保源值的正确类型
					if（copyIsArray &&！Array.isArray（src））{
						clone = [];
					} else if（！copyIsArray &&！jQuery.isPlainObject（src））{
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					//永远不要移动原始对象，克隆它们
					target [name] = jQuery.extend（deep，clone，copy）;

				//不要引入未定义的值
				} else if（copy！== undefined）{
					target [name] = copy;
				}
			}
		}
	}

	//返回修改后的对象
	回归目标;
};

jQuery.extend（{

	//对于页面上的每个jQuery副本都是唯一的
	expando：“jQuery”+（version + Math.random（））.replace（/ \ D / g，“”），

	//假设jQuery没有就绪模块就准备好了
	isReady：是的，

	错误：function（msg）{
		抛出新错误（msg）;
	}，

	noop：function（）{}，

	isPlainObject：function（obj）{
		var proto，Ctor;

		//检测明显的否定
		//使用toString而不是jQuery.type来捕获宿主对象
		if（！obj || toString.call（obj）！==“[object Object]”）{
			返回false;
		}

		proto = getProto（obj）;

		//没有原型的对象（例如，`Object.create（null）`）是普通的
		if（！proto）{
			返回true;
		}

		//具有原型的对象是纯粹的，如果它们是由全局Object函数构造的
		Ctor = hasOwn.call（proto，“constructor”）&& proto.constructor;
		返回typeof Ctor ===“function”&& fnToString.call（Ctor）=== ObjectFunctionString;
	}，

	isEmptyObject：function（obj）{
		var name;

		for（obj中的名字）{
			返回false;
		}
		返回true;
	}，

	//在全局上下文中评估脚本
	globalEval：function（code，options）{
		DOMEval（代码，{nonce：options && options.nonce}）;
	}，

	each：function（obj，callback）{
		var length，i = 0;

		if（isArrayLike（obj））{
			length = obj.length;
			for（; i <length; i ++）{
				if（callback.call（obj [i]，i，obj [i]）=== false）{
					打破;
				}
			}
		} else {
			for（i in obj）{
				if（callback.call（obj [i]，i，obj [i]）=== false）{
					打破;
				}
			}
		}

		返回obj;
	}，

	//支持：Android <= 4.0
	trim：function（text）{
		return text == null？
			“”：
			（text +“”）。replace（rtrim，“”）;
	}，

	//结果仅供内部使用
	makeArray：function（arr，results）{
		var ret = results || [];

		if（arr！= null）{
			if（isArrayLike（Object（arr）））{
				jQuery.merge（ret，
					typeof arr ===“string”？
					[arr]：arr
				）;
			} else {
				push.call（ret，arr）;
			}
		}

		返回;
	}，

	inArray：function（elem，arr，i）{
		return arr == null？-1：indexOf.call（arr，elem，i）;
	}，

	//支持：仅限Android <= 4.0，仅限PhantomJS 1
	// push.apply（_，arraylike）抛出古老的WebKit
	合并：功能（第一，第二）{
		var len = + second.length，
			j = 0，
			i = first.length;

		for（; j <len; j ++）{
			first [i ++] = second [j];
		}

		first.length = i;

		先回来;
	}，

	grep：function（elems，callback，invert）{
		var callbackInverse，
			matches = []，
			i = 0，
			length = elems.length，
			callbackExpect =！invert;

		//浏览数组，只保存项目
		//传递验证器函数
		for（; i <length; i ++）{
			callbackInverse =！callback（elems [i]，i）;
			if（callbackInverse！== callbackExpect）{
				matches.push（elems [i]）;
			}
		}

		回归比赛;
	}，

	// arg仅供内部使用
	map：function（elems，callback，arg）{
		var length，value，
			i = 0，
			ret = [];

		//浏览数组，将每个项目转换为新值
		if（isArrayLike（elems））{
			length = elems.length;
			for（; i <length; i ++）{
				value = callback（elems [i]，i，arg）;

				if（value！= null）{
					ret.push（value）;
				}
			}

		//浏览对象上的每个键，
		} else {
			for（i in elems）{
				value = callback（elems [i]，i，arg）;

				if（value！= null）{
					ret.push（value）;
				}
			}
		}

		//展平任何嵌套数组
		return concat.apply（[]，ret）;
	}，

	//对象的全局GUID计数器
	guid：1，

	// jQuery.support未在Core中使用，但其他项目附加了它们
	//它的属性所以它需要存在。
	支持：支持
}）;

if（typeof Symbol ===“function”）{
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

//填充class2type映射
jQuery.each（“布尔值数字字符串函数数组日期RegExp对象错误符号”.split（“”），
function（i，name）{
	class2type [“[object”+ name +“]”] = name.toLowerCase（）;
}）;

function isArrayLike（obj）{

	//支持：仅限真正的iOS 8.2（在模拟器中不可重现）
	//`in`检查用于防止JIT错误（gh-2145）
	//由于漏报，因此不使用hasOwn
	//关于IE中的Nodelist长度
	在obj && obj.length中，var length = !! obj &&“length”，
		type = toType（obj）;

	if（isFunction（obj）|| isWindow（obj））{
		返回false;
	}

	返回类型===“数组”|| 长度=== 0 ||
		typeof length ===“number”&& length> 0 &&（length  -  1）in obj;
}
var Sizzle =
/ *！
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 *版权所有JS基金会和其他贡献者
 *根据MIT许可证发布
 * https://js.foundation/
 *
 *日期：2019-04-08
 * /
（功能（窗口）{

var i，
	支持，
	EXPR，
	gettext的，
	isXML，
	记号化，
	编译，
	选择，
	outermostContext，
	sortInput，
	hasDuplicate，

	//本地文档变量
	setDocument，
	文献，
	docElem，
	documentIsHTML，
	rbuggyQSA，
	rbuggyMatches，
	火柴，
	包含，

	//特定于实例的数据
	expando =“sizzle”+ 1 * new Date（），
	preferredDoc = window.document，
	dirruns = 0，
	完成= 0，
	classCache = createCache（），
	tokenCache = createCache（），
	compilerCache = createCache（），
	nonnativeSelectorCache = createCache（），
	sortOrder = function（a，b）{
		if（a === b）{
			hasDuplicate = true;
		}
		返回0;
	}，

	//实例方法
	hasOwn =（{}）。hasOwnProperty，
	arr = []，
	pop = arr.pop，
	push_native = arr.push，
	push = arr.push，
	slice = arr.slice，
	//使用精简的indexOf，因为它比本机更快
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function（list，elem）{
		var i = 0，
			len = list.length;
		for（; i <len; i ++）{
			if（list [i] === elem）{
				回归我;
			}
		}
		返回-1;
	}，

	booleans =“checked | selected | async | autofocus | autoplay | controls | defer | disabled | hidden | ismap | loop | multiple | open | readonly | required | scoped”，

	// 常用表达

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace =“[\\ x20 \\ t \\ r \\ n \\ f]”，

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier =“（？：\\\\。| [\\ w-] | [^ \ 0  -  \\ xa0]）+”，

	//属性选择器：http：//www.w3.org/TR/selectors/#attribute-selectors
	attributes =“\\ [”+ whitespace +“*（”+ identifier +“）（？：”+ whitespace +
		//运算符（捕获2）
		“*（[* ^ $ |！〜]？=）”+空白+
		//“属性值必须是CSS标识符[capture 5]或字符串[capture 3或capture 4]”
		“*（？： '（（？：\\\\ | [^ \\\\']）*）'| \ “（（？：\\\\ | [^ \\\\\”] ）*）\“|（”+标识符+“））|）”+空白+
		“* \\]”，

	pseudos =“:(”+ identifier +“）（？：\\（（”+
		//要减少preFilter中需要tokenize的选择器数量，请更喜欢参数：
		// 1.引用（捕获3;捕获4或捕获5）
		“（ '（（？：\\\\ | [^ \\\\']）*）'| \ “（（？：\\\\ | [^ \\\\\”]）*） \“）|”+
		// 2.简单（捕获6）
		“（（？：\\\\。| [^ \\\\（）[\\]] |”+属性+“）*）|” +
		// 3.其他任何东西（捕获2）
		“。*”+
		“）\\）|）”，

	//前导和非转义尾随空格，捕获后者之前的一些非空白字符
	rwhitespace = new RegExp（空格+“+”，“g”），
	rtrim = new RegExp（“^”+ whitespace +“+ |（（？：^ | [^ \\\\]）（？：\\\\。）*）”+ whitespace +“+ $”，“g “），

	rcomma = new RegExp（“^”+ whitespace +“*，”+ whitespace +“*”），
	rcombinators = new RegExp（“^”+ whitespace +“*（[> +〜] |”+ whitespace +“）”+ whitespace +“*”），
	rdescend = new RegExp（空格+“|>”），

	rpseudo =新的RegExp（伪），
	ridentifier = new RegExp（“^”+ identifier +“$”），

	matchExpr = {
		“ID”：新的RegExp（“^＃（”+ + identifier +“）”），
		“CLASS”：新的RegExp（“^ \\。（”+ identifier +“）”），
		“TAG”：新的RegExp（“^（”+ identifier +“| [*]）”），
		“ATTR”：新的RegExp（“^”+属性），
		“PSEUDO”：新的RegExp（“^”+ pseudos），
		“CHILD”：新的RegExp（“^ :(仅|第一|最后|第n |第n  - 最后） - （子类型）（？：\\（”+ + whitespace +
			“*（偶数|奇数|（（[+  - ] |）（\\ d *）n |）”+空格+“*（？:( [+  - ] |）”+空白+
			“*（\\ d +）|））”+ whitespace +“* \\）|）”，“i”），
		“bool”：新的RegExp（“^（？：”+ booleans +“）$”，“i”），
		//用于实现.is（）的库
		//我们在`select`中使用它进行POS匹配
		“needsContext”：新的RegExp（“^”+空格+“* [> +〜] | :(偶数|奇数| eq | gt | lt | nth | first | last）（？：\\（”+
			空格+“*（（？： -  \\ d）？\\ d *）”+空格+“* \\）|）（？= [^  - ] | $）”，“i”）
	}，

	rhtml = / HTML $ / i，
	rinputs = / ^（？：input | select | textarea | button）$ / i，
	rheader = / ^ h \ d $ / i，

	rnative = / ^ [^ {] + \ {\ s * \ [native \ w /，

	//易于解析/可检索的ID或TAG或CLASS选择器
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\ .( [.w-]+))$/,

	rsibling = / [+〜] /，

	// CSS逃脱
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp（“\\\\（[\\ da-f] {1,6}”+空格+“？（|”+空格+“）|。）”，“ig”），
	funescape = function（_，escaped，escapedWhitespace）{
		var high =“0x”+转义 -  0x10000;
		// NaN表示非代码点
		//支持：Firefox <24
		//解决错误的数字解释+“0x”
		返回高！==高|| 逃过白天？
			逃脱：
			高<0？
				// BMP代码点
				String.fromCharCode（high + 0x10000）：
				//补充平面代码点（代理对）
				String.fromCharCode（high >> 10 | 0xD800，high＆0x3FF | 0xDC00）;
	}，

	// CSS字符串/标识符序列化
	// https://drafts.c​​sswg.org/cssom/#common-serializing-idioms
	rcssescape = /（[\ 0- \ x1f \ x7f] | ^  - ？\ d）| ^  -  $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w  - ] / g，
	fcssescape = function（ch，asCodePoint）{
		if（asCodePoint）{

			// U + 0000 NULL变为U + FFFD REPLACEMENT CHARACTER
			if（ch ===“\ 0”）{
				返回“\ uFFFD”;
			}

			//控制字符和（取决于位置）数字作为代码点转义
			return ch.slice（0，-1）+“\\”+ ch.charCodeAt（ch.length  -  1）.toString（16）+“”;
		}

		//其他可能特殊的ASCII字符获得反斜杠转义
		返回“\\”+ ch;
	}，

	//用于iframe
	//请参阅setDocument（）
	//删除函数包装导致“权限被拒绝”
	// IE中的错误
	unloadHandler = function（）{
		setDocument（）;
	}，

	inDisabledFieldset = addCombinator（
		function（elem）{
			return elem.disabled === true && elem.nodeName.toLowerCase（）===“fieldset”;
		}，
		{dir：“parentNode”，下一个：“legend”}
	）;

//优化push.apply（_，NodeList）
尝试{
	push.apply（
		（arr = slice.call（preferredDoc.childNodes）），
		preferredDoc.childNodes
	）;
	//支持：Android <4.0
	//无声地检测到push.apply失败
	arr [preferredDoc.childNodes.length] .nodeType;
} catch（e）{
	push = {apply：arr.length？

		//如果可能，利用切片
		function（target，els）{
			push_native.apply（target，slice.call（els））;
		}：

		//支持：IE <9
		//否则直接附加
		function（target，els）{
			var j = target.length，
				i = 0;
			//不能信任NodeList.length
			while（（target [j ++] = els [i ++]））{}
			target.length = j  -  1;
		}
	};
}

function Sizzle（选择器，上下文，结果，种子）{
	var m，i，elem，nid，match，groups，newSelector，
		newContext = context && context.ownerDocument，

		// nodeType默认为9，因为上下文默认为document
		nodeType = context？context.nodeType：9;

	结果=结果|| [];

	//从无效选择器或上下文的调用中提前返回
	if（typeof selector！==“string”||！selector ||
		nodeType！== 1 && nodeType！== 9 && nodeType！== 11）{

		返回结果;
	}

	//尝试在HTML文档中快捷查找操作（而不是过滤器）
	if（！seed）{

		if（（context？context.ownerDocument || context：preferredDoc）！== document）{
			setDocument（context）;
		}
		context = context || 文献;

		if（documentIsHTML）{

			//如果选择器足够简单，请尝试使用“get * By *”DOM方法
			//（除了DocumentFragment上下文，其中方法不存在）
			if（nodeType！== 11 &&（match = rquickExpr.exec（selector）））{

				// ID选择器
				if（（m = match [1]））{

					//文档上下文
					if（nodeType === 9）{
						if（（elem = context.getElementById（m）））{

							//支持：IE，Opera，Webkit
							// TODO：识别版本
							// getElementById可以按名称而不是ID匹配元素
							if（elem.id === m）{
								results.push（elem）;
								返回结果;
							}
						} else {
							返回结果;
						}

					//元素上下文
					} else {

						//支持：IE，Opera，Webkit
						// TODO：识别版本
						// getElementById可以按名称而不是ID匹配元素
						if（newContext &&（elem = newContext.getElementById（m））&&
							包含（context，elem）&&
							elem.id === m）{

							results.push（elem）;
							返回结果;
						}
					}

				//类型选择器
				} else if（match [2]）{
					push.apply（results，context.getElementsByTagName（selector））;
					返回结果;

				//类选择器
				} else if（（m = match [3]）&& support.getElementsByClassName &&
					context.getElementsByClassName）{

					push.apply（results，context.getElementsByClassName（m））;
					返回结果;
				}
			}

			//利用querySelectorAll
			if（support.qsa &&
				！nonnativeSelectorCache [selector +“”] &&
				（！rbuggyQSA ||！rbuggyQSA.test（selector））&&

				//支持：仅限IE 8
				//排除对象元素
				（nodeType！== 1 || context.nodeName.toLowerCase（）！==“object”））{

				newSelector = selector;
				newContext = context;

				// qSA在评估child或者时考虑范围根之外的元素
				//后代组合子，这不是我们想要的。
				//在这种情况下，我们通过为每个选择器添加前缀来解决行为问题
				//列出一个引用范围上下文的ID选择器。
				//感谢Andrew Dupont的这项技术。
				if（nodeType === 1 && rdescend.test（selector））{

					//捕获上下文ID，必要时先设置它
					if（（nid = context.getAttribute（“id”）））{
						nid = nid.replace（rcssescape，fcssescape）;
					} else {
						context.setAttribute（“id”，（nid = expando））;
					}

					//在列表中添加每个选择器的前缀
					groups = tokenize（selector）;
					i = groups.length;
					当我 -  ） {
						groups [i] =“＃”+ nid +“”+ toSelector（groups [i]）;
					}
					newSelector = groups.join（“，”）;

					//展开兄弟选择器的上下文
					newContext = rsibling.test（selector）&& testContext（context.parentNode）||
						上下文;
				}

				尝试{
					push.apply（结果，
						newContext.querySelectorAll（newSelector）
					）;
					返回结果;
				} catch（qsaError）{
					nonnativeSelectorCache（selector，true）;
				} finally {
					if（nid === expando）{
						context.removeAttribute（“id”）;
					}
				}
			}
		}
	}

	// 所有其他人
	return select（selector.replace（rtrim，“$ 1”），context，results，seed）;
}

/ **
 *创建有限大小的键值缓存
 * @returns {function（string，object）}将对象数据存储在自身后，返回它
 *属性名称（带空格的）字符串和（如果缓存大于Expr.cacheLength）
 *删除最旧的条目
 * /
function createCache（）{
	var keys = [];

	function cache（key，value）{
		//使用（键+“”）避免与本机原型属性冲突（请参阅问题＃157）
		if（keys.push（key +“”）> Expr.cacheLength）{
			//仅保留最新的条目
			delete cache [keys.shift（）];
		}
		return（cache [key +“”] = value）;
	}
	返回缓存;
}

/ **
 *标记Sizzle特殊用途的功能
 * @param {Function} fn标记的功能
 * /
function markFunction（fn）{
	fn [expando] = true;
	返回fn;
}

/ **
 *支持使用元素进行测试
 * @param {Function} fn传递创建的元素并返回布尔结果
 * /
function assert（fn）{
	var el = document.createElement（“fieldset”）;

	尝试{
		return !! fn（el）;
	} catch（e）{
		返回false;
	} finally {
		//默认情况下从其父项中删除
		if（el.parentNode）{
			el.parentNode.removeChild（el）;
		}
		//在IE中释放内存
		el = null;
	}
}

/ **
 *为所有指定的attrs添加相同的处理程序
 * @param {String} attrs以管道分隔的属性列表
 * @param {Function} handler将应用的方法
 * /
function addHandle（attrs，handler）{
	var arr = attrs.split（“|”），
		i = arr.length;

	当我 -  ） {
		Expr.attrHandle [arr [i]] =处理程序;
	}
}

/ **
 *检查两个兄弟姐妹的文件顺序
 * @param {Element} a
 * @param {Element} b
 * @returns {Number}如果a在b之前，则返回小于0，如果a跟随b，则返回大于0
 * /
function siblingCheck（a，b）{
	var cur = b && a，
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex  -  b.sourceIndex;

	//如果在两个节点上都可用，则使用IE sourceIndex
	if（diff）{
		返回差异;
	}

	//检查b是否跟随a
	if（cur）{
		while（（cur = cur.nextSibling））{
			if（cur === b）{
				返回-1;
			}
		}
	}

	回来了？1：-1;
}

/ **
 *返回在伪输入中用于输入类型的函数
 * @param {String}类型
 * /
function createInputPseudo（type）{
	return函数（elem）{
		var name = elem.nodeName.toLowerCase（）;
		返回名称===“输入”&& elem.type === type;
	};
}

/ **
 *返回一个用于按钮的伪函数
 * @param {String}类型
 * /
function createButtonPseudo（type）{
	return函数（elem）{
		var name = elem.nodeName.toLowerCase（）;
		return（name ===“input”|| name ===“button”）&& elem.type === type;
	};
}

/ **
 *返回在伪中使用的函数：enabled /：disabled
 * @param {Boolean}禁用true表示：已禁用; false for：启用
 * /
function createDisabledPseudo（disabled）{

	//已知：禁用误报：fieldset [disabled]> legend：nth-​​of-type（n + 2）：can-disable
	return函数（elem）{

		//只有某些元素可以匹配：启用或：禁用
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if（elem中的“form”）{

			//检查相关非禁用元素的继承禁用：
			// *在禁用的字段集中列出与表单相关的元素
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// *禁用的optgroup中的选项元素
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			//所有这些元素都有一个“form”属性。
			if（elem.parentNode && elem.disabled === false）{

				//选项元素如果存在，则推迟到父选择组
				if（elem中的“label”）{
					if（elem.parentNode中的“label”）{
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				//支持：IE 6  -  11
				//使用isDisabled快捷方式属性检查禁用的字段集祖先
				return elem.isDisabled === disabled ||

					//如果没有isDisabled，请手动检查
					/ * jshint -W018 * /
					elem.isDisabled！==！禁用&&
						inDisabledFieldset（elem）===禁用;
			}

			return elem.disabled === disabled;

		//在信任disabled属性之前，尝试清除无法禁用的元素。
		//有些受害者被我们的网络（标签，图例，菜单，曲目）抓住了，但不应该
		//甚至存在于它们上面，更不用说有一个布尔值。
		} else if（elem中的“label”）{
			return elem.disabled === disabled;
		}

		//剩余的元素既不是：enabled也不是：disabled
		返回false;
	};
}

/ **
 *返回一个在pseudos中用于定位的函数
 * @param {Function} fn
 * /
function createPositionalPseudo（fn）{
	return markFunction（function（argument）{
		argument = + argument;
		return markFunction（function（seed，matches）{
			var j，
				matchIndexes = fn（[]，seed.length，argument），
				i = matchIndexes.length;

			//匹配在指定索引处找到的元素
			当我 -  ） {
				if（seed [（j = matchIndexes [i]）]）{
					seed [j] =！（匹配[j] = seed [j]）;
				}
			}
		}）;
	}）;
}

/ **
 *检查节点的有效性作为Sizzle上下文
 * @param {Element | Object =}上下文
 * @returns {Element | Object | Boolean}输入节点（如果可接受），否则为假值
 * /
function testContext（context）{
	return context && typeof context.getElementsByTagName！==“undefined”&& context;
}

//为方便起见，公开支持变量
support = Sizzle.support = {};

/ **
 *检测XML节点
 * @param {Element | Object} elem元素或文档
 * @returns {Boolean}如果iff elem是非HTML XML节点，则为true
 * /
isXML = Sizzle.isXML = function（elem）{
	var namespace = elem.namespaceURI，
		docElem =（elem.ownerDocument || elem）.documentElement;

	//支持：IE <= 8
	//当documentElement尚不存在时假设HTML，例如加载内部iframe
	// https://bugs.jquery.com/ticket/4833
	return！rhtml.test（namespace || docElem && docElem.nodeName ||“HTML”）;
};

/ **
 *根据当前文档设置一次与文档相关的变量
 * @param {Element | Object} [doc]用于设置文档的元素或文档对象
 * @returns {Object}返回当前文档
 * /
setDocument = Sizzle.setDocument = function（node）{
	var hasCompare，subWindow，
		doc = node？node.ownerDocument || node：preferredDoc;

	//如果doc无效或已经选中，则提前返回
	if（doc === document || doc.nodeType！== 9 ||！doc.documentElement）{
		退货文件;
	}

	//更新全局变量
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =！isXML（document）;

	//支持：IE 9-11，Edge
	//卸载后访问iframe文档会抛出“权限被拒绝”错误（jQuery＃13936）
	if（preferredDoc！== document &&
		（subWindow = document.defaultView）&& subWindow.top！== subWindow）{

		//支持：IE 11，Edge
		if（subWindow.addEventListener）{
			subWindow.addEventListener（“unload”，unloadHandler，false）;

		//支持：仅限IE 9  -  10
		} else if（subWindow.attachEvent）{
			subWindow.attachEvent（“onunload”，unloadHandler）;
		}
	}

	/ *属性
	-------------------------------------------------- -------------------- * /

	//支持：IE <8
	//确认getAttribute确实返回属性而不是属性
	//（IE8布尔除外）
	support.attributes = assert（function（el）{
		el.className =“i”;
		return！el.getAttribute（“className”）;
	}）;

	/ * getElement（s）By *
	-------------------------------------------------- -------------------- * /

	//检查getElementsByTagName（“*”）是否仅返回元素
	support.getElementsByTagName = assert（function（el）{
		el.appendChild（document.createComment（“”））;
		return！el.getElementsByTagName（“*”）。length;
	}）;

	//支持：IE <9
	support.getElementsByClassName = rnative.test（document.getElementsByClassName）;

	//支持：IE <10
	//检查getElementById是否按名称返回元素
	//破坏的getElementById方法不会以编程方式设置名称，
	//所以使用环形交叉口getElementsByName测试
	support.getById = assert（function（el）{
		docElem.appendChild（el）.id = expando;
		return！document.getElementsByName || ！document.getElementsByName（expando）.length;
	}）;

	// ID过滤并查找
	if（support.getById）{
		Expr.filter [“ID”] =函数（id）{
			var attrId = id.replace（runescape，funescape）;
			return函数（elem）{
				return elem.getAttribute（“id”）=== attrId;
			};
		};
		Expr.find [“ID”] = function（id，context）{
			if（typeof context.getElementById！==“undefined”&& documentIsHTML）{
				var elem = context.getElementById（id）;
				返回元素？[elem]：[];
			}
		};
	} else {
		Expr.filter [“ID”] =函数（id）{
			var attrId = id.replace（runescape，funescape）;
			return函数（elem）{
				var node = typeof elem.getAttributeNode！==“undefined”&&
					elem.getAttributeNode（ “ID”）;
				return node && node.value === attrId;
			};
		};

		//支持：仅限IE 6  -  7
		// getElementById作为查找快捷方式不可靠
		Expr.find [“ID”] = function（id，context）{
			if（typeof context.getElementById！==“undefined”&& documentIsHTML）{
				var node，i，elems，
					elem = context.getElementById（id）;

				if（elem）{

					//验证id属性
					node = elem.getAttributeNode（“id”）;
					if（node && node.value === id）{
						返回[elem];
					}

					//回到getElementsByName
					elems = context.getElementsByName（id）;
					i = 0;
					while（（elem = elems [i ++]））{
						node = elem.getAttributeNode（“id”）;
						if（node && node.value === id）{
							返回[elem];
						}
					}
				}

				return [];
			}
		};
	}

	// 标签
	Expr.find [“TAG”] = support.getElementsByTagName？
		function（tag，context）{
			if（typeof context.getElementsByTagName！==“undefined”）{
				return context.getElementsByTagName（tag）;

			// DocumentFragment节点没有gEBTN
			} else if（support.qsa）{
				return context.querySelectorAll（tag）;
			}
		}：

		function（tag，context）{
			var elem，
				tmp = []，
				i = 0，
				//幸运的是巧合，一个（破碎的）gEBTN也出现在DocumentFragment节点上
				results = context.getElementsByTagName（tag）;

			//过滤掉可能的评论
			if（tag ===“*”）{
				while（（elem = results [i ++]））{
					if（elem.nodeType === 1）{
						tmp.push（elem）;
					}
				}

				返回tmp;
			}
			返回结果;
		};

	//类
	Expr.find [“CLASS”] = support.getElementsByClassName && function（className，context）{
		if（typeof context.getElementsByClassName！==“undefined”&& documentIsHTML）{
			return context.getElementsByClassName（className）;
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// QSA和matchesSelector支持

	// matchesSelector（：active）在为true时报告为false（IE9 / Opera 11.5）
	rbuggyMatches = [];

	// qSa（：focus）在为true时报告为false（Chrome 21）
	//我们允许这样做，因为IE8 / 9中的错误会引发错误
	//每当在iframe上访问`document.activeElement`时
	//所以，我们允许：焦点一直通过QSA来避免IE错误
	//请参阅https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if（（support.qsa = rnative.test（document.querySelectorAll）））{
		//构建QSA正则表达式
		//来自Diego Perini的正则表达式策略
		断言（function（el）{
			// Select有意设置为空字符串
			//这是为了测试IE的未明确处理
			//设置布尔内容属性，
			//因为它的存在应该足够了
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild（el）.innerHTML =“<a id ='" + expando +”'> </a>“+
				“<select id ='”+ expando +“ -  \ r \\'msallowcapture =''>”+
				“<option selected =''> </ option> </ select>”;

			//支持：IE8，Opera 11-12.16
			//当空字符串跟随^ =或$ =或* =时，不应选择任何内容
			//测试属性在Opera中必须是未知的，但对WinRT来说是“安全的”
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if（el.querySelectorAll（“[msallowcapture ^ ='']”）。length）{
				rbuggyQSA.push（“[* ^ $] =”+ whitespace +“*（？：''| \”\“）”）;
			}

			//支持：IE8
			//布尔属性和“值”未得到正确处理
			if（！el.querySelectorAll（“[selected]”）。length）{
				rbuggyQSA.push（“\\ [”+ whitespace +“*（?: value |”+ booleans +“）”）;
			}

			//支持：Chrome <29，Android <4.4，Safari <7.0 +，iOS <7.0+，PhantomJS <1.9.8+
			if（！el.querySelectorAll（“[id~ =”+ expando +“ - ]”）。length）{
				rbuggyQSA.push（ “〜=”）;
			}

			// Webkit / Opera  - ：checked应返回选定的选项元素
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8在这里抛出错误，不会看到以后的测试
			if（！el.querySelectorAll（“：checked”）。length）{
				rbuggyQSA.push（ “：检查”）;
			}

			//支持：Safari 8 +，iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			//页内`selector #id兄弟组合选择器'失败
			if（！el.querySelectorAll（“a＃”+ expando +“+ *”）。length）{
				rbuggyQSA.push（ “＃+ [+〜]。”）;
			}
		}）;

		断言（function（el）{
			el.innerHTML =“<a href=''disable='disabled'> </a>”+
				“<select disabled ='disabled'> <option /> </ select>”;

			//支持：Windows 8 Native Apps
			//在.innerHTML赋值期间，类型和名称属性受到限制
			var input = document.createElement（“input”）;
			input.setAttribute（“type”，“hidden”）;
			el.appendChild（input）.setAttribute（“name”，“D”）;

			//支持：IE8
			//强制使用name属性区分大小写
			if（el.querySelectorAll（“[name = d]”）。length）{
				rbuggyQSA.push（“name”+ whitespace +“* [* ^ $ |！〜]？=”）;
			}

			// FF 3.5  - ：启用/：禁用和隐藏元素（隐藏元素仍然启用）
			// IE8在这里抛出错误，不会看到以后的测试
			if（el.querySelectorAll（“：enabled”）。length！== 2）{
				rbuggyQSA.push（“：enabled”，“：disabled”）;
			}

			//支持：IE9-11 +
			// IE：禁用的选择器不会拾取禁用的字段集的子节点
			docElem.appendChild（el）.disabled = true;
			if（el.querySelectorAll（“：disabled”）。length！== 2）{
				rbuggyQSA.push（“：enabled”，“：disabled”）;
			}

			// Opera 10-11不会抛出逗号后的无效伪
			el.querySelectorAll（ “* ,: X”）;
			rbuggyQSA.push（ “*：”）;
		}）;
	}

	if（（support.matchesSelector = rnative.test（（matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector））））{

		断言（function（el）{
			//检查是否可以执行matchesSelector
			//在断开连接的节点上（IE 9）
			support.disconnectedMatch = matches.call（el，“*”）;

			//这应该失败并出现异常
			// Gecko没有错误，而是返回false
			matches.call（el，“[s！='']：x”）;
			rbuggyMatches.push（“！=”，pseudos）;
		}）;
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp（rbuggyQSA.join（“|”））;
	rbuggyMatches = rbuggyMatches.length && new RegExp（rbuggyMatches.join（“|”））;

	/ *包含
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test（docElem.compareDocumentPosition）;

	//元素包含另一个
	//有目的地自我排斥
	//在中，元素不包含自身
	contains = hasCompare || rnative.test（docElem.contains）？
		function（a，b）{
			var adown = a.nodeType === 9？a.documentElement：a，
				bup = b && b.parentNode;
			返回=== bup || !!（bup && bup.nodeType === 1 &&（
				adown.contains？
					adown.contains（bup）：
					a.compareDocumentPosition && a.compareDocumentPosition（bup）＆16
			））;
		}：
		function（a，b）{
			if（b）{
				while（（b = b.parentNode））{
					if（b === a）{
						返回true;
					}
				}
			}
			返回false;
		};

	/ *排序
	-------------------------------------------------- -------------------- * /

	//文档订单排序
	sortOrder = hasCompare？
	function（a，b）{

		//重复删除标记
		if（a === b）{
			hasDuplicate = true;
			返回0;
		}

		//如果只有一个输入具有compareDocumentPosition，则排序方法存在
		var compare =！a.compareDocumentPosition  - ！b.compareDocumentPosition;
		if（compare）{
			回报比较;
		}

		//如果两个输入都属于同一文档，则计算位置
		compare =（a.ownerDocument || a）===（b.ownerDocument || b）？
			a.compareDocumentPosition（b）：

			//否则我们知道他们已断开连接
			1;

		//已断开连接的节点
		if（比较＆1 ||
			（！support.sortDetached && b.compareDocumentPosition（a）=== compare））{

			//选择与我们首选文档相关的第一个元素
			if（a === document || a.ownerDocument === preferredDoc && contains（preferredDoc，a））{
				返回-1;
			}
			if（b === document || b.ownerDocument === preferredDoc && contains（preferredDoc，b））{
				返回1;
			}

			//保持原始订单
			返回sortInput？
				（indexOf（sortInput，a） -  indexOf（sortInput，b））：
				0;
		}

		返回比较＆4？-1：1;
	}：
	function（a，b）{
		//如果节点相同，则提前退出
		if（a === b）{
			hasDuplicate = true;
			返回0;
		}

		var cur，
			i = 0，
			aup = a.parentNode，
			bup = b.parentNode，
			ap = [a]，
			bp = [b];

		//无父节点是文档或断开连接
		if（！aup ||！bup）{
			返回一个===文件？-1：
				b ===文件？1：
				哎？-1：
				bup？1：
				sortInput？
				（indexOf（sortInput，a） -  indexOf（sortInput，b））：
				0;

		//如果节点是兄弟节点，我们可以快速检查
		} else if（aup === bup）{
			return siblingCheck（a，b）;
		}

		//否则我们需要他们的祖先的完整列表进行比较
		cur = a;
		while（（cur = cur.parentNode））{
			ap.unshift（cur）;
		}
		cur = b;
		while（（cur = cur.parentNode））{
			bp.unshift（cur）;
		}

		//走下树寻找差异
		while（ap [i] === bp [i]）{
			我++;
		}

		回来我？
			//做兄弟检查节点是否有共同的祖先
			siblingCheck（ap [i]，bp [i]）：

			//否则我们文档中的节点首先排序
			ap [i] === preferredDoc？-1：
			bp [i] === preferredDoc？1：
			0;
	};

	退货文件;
};

Sizzle.matches = function（expr，elements）{
	return Sizzle（expr，null，null，elements）;
};

Sizzle.matchesSelector = function（elem，expr）{
	//如果需要，设置文档变量
	if（（elem.ownerDocument || elem）！== document）{
		setDocument（elem）;
	}

	if（support.matchesSelector && documentIsHTML &&
		！nonnativeSelectorCache [expr +“”] &&
		（！rbuggyMatches ||！rbuggyMatches.test（expr））&&
		（！rbuggyQSA ||！rbuggyQSA.test（expr）））{

		尝试{
			var ret = matches.call（elem，expr）;

			// IE 9的matchesSelector在断开连接的节点上返回false
			if（ret || support.disconnectedMatch ||
					//同样，断开连接的节点也被称为文档
					// IE 9中的片段
					elem.document && elem.document.nodeType！== 11）{
				返回;
			}
		} catch（e）{
			nonnativeSelectorCache（expr，true）;
		}
	}

	return Sizzle（expr，document，null，[elem]）。length> 0;
};

Sizzle.contains = function（context，elem）{
	//如果需要，设置文档变量
	if（（context.ownerDocument || context）！== document）{
		setDocument（context）;
	}
	return contains（context，elem）;
};

Sizzle.attr = function（elem，name）{
	//如果需要，设置文档变量
	if（（elem.ownerDocument || elem）！== document）{
		setDocument（elem）;
	}

	var fn = Expr.attrHandle [name.toLowerCase（）]，
		//不要被Object.prototype属性愚弄（jQuery＃13807）
		val = fn && hasOwn.call（Expr.attrHandle，name.toLowerCase（））？
			fn（elem，name，！documentIsHTML）：
			不确定的;

	return val！== undefined？
		val：
		support.attributes || ！documentIsHTML？
			elem.getAttribute（name）：
			（val = elem.getAttributeNode（name））&& val.specified？
				val.value：
				空值;
};

Sizzle.escape = function（sel）{
	return（sel +“”）.replace（rcssescape，fcssescape）;
};

Sizzle.error = function（msg）{
	抛出新错误（“语法错误，无法识别的表达式：”+ msg）;
};

/ **
 *文件分类和删除重复
 * @param {ArrayLike}结果
 * /
Sizzle.uniqueSort = function（results）{
	var elem，
		duplicates = []，
		j = 0，
		i = 0;

	//除非我们*知道*我们可以检测到重复，否则请假设它们存在
	hasDuplicate =！support.detectDuplicates;
	sortInput =！support.sortStable && results.slice（0）;
	results.sort（sortOrder）;

	if（hasDuplicate）{
		while（（elem = results [i ++]））{
			if（elem === results [i]）{
				j = duplicates.push（i）;
			}
		}
		while（j--）{
			results.splice（duplicates [j]，1）;
		}
	}

	//排序后清除输入以释放对象
	//请参阅https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	返回结果;
};

/ **
 *实用程序函数，用于检索DOM节点数组的文本值
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function（elem）{
	var节点，
		ret =“”，
		i = 0，
		nodeType = elem.nodeType;

	if（！nodeType）{
		//如果没有nodeType，那么这应该是一个数组
		while（（node = elem [i ++]））{
			//不要遍历评论节点
			ret + = getText（node）;
		}
	} else if（nodeType === 1 || nodeType === 9 || nodeType === 11）{
		//对元素使用textContent
		//删除了innerText用法以保证新行的一致性（jQuery＃11153）
		if（typeof elem.textContent ===“string”）{
			return elem.textContent;
		} else {
			//穿越它的孩子
			for（elem = elem.firstChild; elem; elem = elem.nextSibling）{
				ret + = getText（elem）;
			}
		}
	} else if（nodeType === 3 || nodeType === 4）{
		return elem.nodeValue;
	}
	//不包括注释或处理指令节点

	返回;
};

Expr = Sizzle.selectors = {

	//可以由用户调整
	cacheLength：50，

	createPseudo：markFunction，

	匹配：matchExpr，

	attrHandle：{}，

	找： {}，

	亲戚：{
		“>”：{dir：“parentNode”，first：true}，
		“”：{dir：“parentNode”}，
		“+”：{dir：“previousSibling”，first：true}，
		“〜”：{dir：“previousSibling”}
	}，

	preFilter：{
		“ATTR”：function（match）{
			match [1] = match [1] .replace（runescape，funescape）;

			//移动给定值以匹配[3]是引用还是不引用
			match [3] =（match [3] || match [4] || match [5] ||“”）.replace（runescape，funescape）;

			if（match [2] ===“〜=”）{
				match [3] =“”+ match [3] +“”;
			}

			return match.slice（0,4）;
		}，

		“CHILD”：function（match）{
			/ *匹配来自matchExpr [“CHILD”]
				1种类型（仅| nth | ...）
				2什么（孩子的类型）
				3个参数（偶数|奇数| \ d * | \ d * n（[+  - ] \ d +）？| ...）
				xn + y参数的4 xn分量（[+  - ]？\ d * n |）
				5个xn分量的符号
				6 x xn-component
				y分量的7个符号
				y元素8 y
			* /
			match [1] = match [1] .toLowerCase（）;

			if（match [1] .slice（0,3）===“nth”）{
				// nth- *需要参数
				if（！match [3]）{
					Sizzle.error（匹配[0]）;
				}

				// Expr.filter.CHILD的数字x和y参数
				//记住false / true分别为0/1
				match [4] = +（match [4]？match [5] +（match [6] || 1）：2 *（match [3] ===“even”|| match [3] ===“奇怪的“））;
				match [5] = +（（match [7] + match [8]）|| match [3] ===“odd”）;

			//其他类型禁止参数
			} else if（match [3]）{
				Sizzle.error（匹配[0]）;
			}

			回归比赛;
		}，

		“PSEUDO”：function（match）{
			var过剩，
				unquoted =！match [6] && match [2];

			if（matchExpr [“CHILD”]。test（match [0]））{
				return null;
			}

			//按原样接受引用的参数
			if（匹配[3]）{
				匹配[2] =匹配[4] || 匹配[5] || “”;

			//从不带引号的参数中删除多余的字符
			} else if（unquoted && rpseudo.test（unquoted）&&
				//从tokenize中获取多余（递归）
				（excess = tokenize（unquoted，true））&&
				//前进到下一个右括号
				（excess = unquoted.indexOf（“）”，unquoted.length  -  excess） -  unquoted.length））{

				//多余是负指数
				match [0] = match [0] .slice（0，excess）;
				match [2] = unquoted.slice（0，excess）;
			}

			//仅返回伪过滤器方法所需的捕获（类型和参数）
			return match.slice（0,3）;
		}
	}，

	过滤器：{

		“TAG”：function（nodeNameSelector）{
			var nodeName = nodeNameSelector.replace（runescape，funescape）.toLowerCase（）;
			return nodeNameSelector ===“*”？
				function（）{return true; }：
				function（elem）{
					return elem.nodeName && elem.nodeName.toLowerCase（）=== nodeName;
				};
		}，

		“CLASS”：function（className）{
			var pattern = classCache [className +“”];

			返回模式||
				（pattern = new RegExp（“（^ |”+ whitespace +“）”+ className +“（”+ whitespace +“| $）”））&&
				classCache（className，function（elem）{
					return pattern.test（typeof elem.className ===“string”&& elem.className || typeof elem.getAttribute！==“undefined”&& elem.getAttribute（“class”）||“”）;
				}）;
		}，

		“ATTR”：函数（名称，运算符，检查）{
			return函数（elem）{
				var result = Sizzle.attr（elem，name）;

				if（result == null）{
					return operator ===“！=”;
				}
				if（！operator）{
					返回true;
				}

				结果+ =“”;

				return operator ===“=”？结果===检查：
					operator ===“！=”？结果！==检查：
					operator ===“^ =”？check && result.indexOf（check）=== 0：
					operator ===“* =”？check && result.indexOf（check）> -1：
					operator ===“$ =”？check && result.slice（-check.length）=== check：
					operator ===“〜=”？（“”+ result.replace（rwhitespace，“”）+“”）。indexOf（check）> -1：
					operator ===“| =”？结果===检查|| result.slice（0，check.length + 1）=== check +“ - ”：
					假;
			};
		}，

		“CHILD”：函数（类型，内容，参数，第一个，最后一个）{
			var simple = type.slice（0,3）！==“nth”，
				forward = type.slice（-4）！==“last”，
				ofType = what ===“of-type”;

			先退回=== 1 && last === 0？

				//快捷方式：第n  -  *（n）
				function（elem）{
					return !! elem.parentNode;
				}：

				function（elem，context，xml）{
					var cache，uniqueCache，outerCache，node，nodeIndex，start，
						dir =简单！==转发？“nextSibling”：“previousSibling”，
						parent = elem.parentNode，
						name = ofType && elem.nodeName.toLowerCase（），
						useCache =！xml &&！ofType，
						diff = false;

					if（parent）{

						// :( first | last | only） - （child | of-type）
						if（simple）{
							while（dir）{
								node = elem;
								while（（node = node [dir]））{
									if（ofType？
										node.nodeName.toLowerCase（）=== name：
										node.nodeType === 1）{

										返回false;
									}
								}
								//反向：仅 -  *（如果我们还没有这样做）
								start = dir = type ===“only”&&！start &&“nextSibling”;
							}
							返回true;
						}

						开始= [前进？parent.firstChild：parent.lastChild];

						// non-xml：nth-​​child（...）将缓存数据存储在`parent`上
						if（forward && useCache）{

							//从先前缓存的索引中搜索`elem`

							// ...以gzip友好的方式
							node = parent;
							outerCache = node [expando] || （node [expando] = {}）;

							//支持：IE <9
							//抵御克隆的attroperties（jQuery gh-1709）
							uniqueCache = outerCache [node.uniqueID] ||
								（outerCache [node.uniqueID] = {}）;

							cache = uniqueCache [type] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while（（node = ++ nodeIndex && node && node [dir] ||

								//从一开始就回到寻求“elem”
								（diff = nodeIndex = 0）|| start.pop（）））{

								//找到后，在`parent`上缓存索引并中断
								if（node.nodeType === 1 && ++ diff && node === elem）{
									uniqueCache [type] = [dirruns，nodeIndex，diff];
									打破;
								}
							}

						} else {
							//使用先前缓存的元素索引（如果可用）
							if（useCache）{
								// ...以gzip友好的方式
								node = elem;
								outerCache = node [expando] || （node [expando] = {}）;

								//支持：IE <9
								//抵御克隆的attroperties（jQuery gh-1709）
								uniqueCache = outerCache [node.uniqueID] ||
									（outerCache [node.uniqueID] = {}）;

								cache = uniqueCache [type] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml：nth-​​child（...）
							//或：nth-​​last-child（...）或：nth（-last）？ -  of-type（...）
							if（diff === false）{
								//使用与上面相同的循环从头开始寻找“elem”
								while（（node = ++ nodeIndex && node && node [dir] ||
									（diff = nodeIndex = 0）|| start.pop（）））{

									if（（ofType？
										node.nodeName.toLowerCase（）=== name：
										node.nodeType === 1）&&
										++ diff）{

										//缓存每个遇到元素的索引
										if（useCache）{
											outerCache = node [expando] || （node [expando] = {}）;

											//支持：IE <9
											//抵御克隆的attroperties（jQuery gh-1709）
											uniqueCache = outerCache [node.uniqueID] ||
												（outerCache [node.uniqueID] = {}）;

											uniqueCache [type] = [dirruns，diff];
										}

										if（node === elem）{
											打破;
										}
									}
								}
							}
						}

						//合并偏移量，然后检查循环大小
						diff  -  = last;
						return diff === first || （diff％first === 0 && diff / first> = 0）;
					}
				};
		}，

		“PSEUDO”：function（伪，参数）{
			//伪类名称不区分大小写
			// http://www.w3.org/TR/selectors/#pseudo-classes
			//如果使用大写字母添加自定义伪，则按大小写区分优先级
			//记住setFilters继承自pseudos
			var args，
				fn = Expr.pseudos [伪] || Expr.setFilters [pseudo.toLowerCase（）] ||
					Sizzle.error（“unsupported pseudo：”+ pseudo）;

			//用户可以使用createPseudo来指示
			//创建过滤函数需要参数
			//正如Sizzle所做的那样
			if（fn [expando]）{
				return fn（argument）;
			}

			//但保持对旧签名的支持
			if（fn.length> 1）{
				args = [伪，伪，“”，参数];
				返回Expr.setFilters.hasOwnProperty（pseudo.toLowerCase（））？
					markFunction（function（seed，matches）{
						var idx，
							匹配= fn（种子，参数），
							i = matched.length;
						当我 -  ） {
							idx = indexOf（seed，matched [i]）;
							seed [idx] =！（匹配[idx] = matched [i]）;
						}
					}）：
					function（elem）{
						return fn（elem，0，args）;
					};
			}

			返回fn;
		}
	}，

	伪：{
		//可能是复杂的伪
		“not”：markFunction（function（selector）{
			//修剪传递给编译器的选择器
			//避免处理前导和尾随
			//作为组合器的空格
			var input = []，
				results = []，
				matcher = compile（selector.replace（rtrim，“$ 1”））;

			返回匹配器[expando]？
				markFunction（function（seed，matches，context，xml）{
					var elem，
						unmatched = matcher（seed，null，xml，[]），
						i = seed.length;

					//匹配`matcher`无法匹配的元素
					当我 -  ） {
						if（（elem = unmatched [i]））{
							seed [i] =！（匹配[i] = elem）;
						}
					}
				}）：
				function（elem，context，xml）{
					input [0] = elem;
					matcher（输入，null，xml，结果）;
					//不要保留元素（问题＃299）
					input [0] = null;
					return！results.pop（）;
				};
		}），

		“has”：markFunction（function（selector）{
			return函数（elem）{
				return Sizzle（selector，elem）.length> 0;
			};
		}），

		“contains”：markFunction（function（text）{
			text = text.replace（runescape，funescape）;
			return函数（elem）{
				return（elem.textContent || getText（elem））。indexOf（text）> -1;
			};
		}），

		//“元素是否由：lang（）选择器表示
		//仅基于元素的语言值
		//等于标识符C，
		//或者以标识符C开头，后面紧跟“ - ”。
		//不区分大小写地执行C与元素语言值的匹配。
		//标识符C不必是有效的语言名称。“
		// http://www.w3.org/TR/selectors/#lang-pseudo
		“lang”：markFunction（function（lang）{
			// lang值必须是有效的标识符
			if（！ridentifier.test（lang ||“”））{
				Sizzle.error（“不支持lang：”+ lang）;
			}
			lang = lang.replace（runescape，funescape）.toLowerCase（）;
			return函数（elem）{
				var elemLang;
				做{
					if（（elemLang = documentIsHTML？
						elem.lang：
						elem.getAttribute（“xml：lang”）|| elem.getAttribute（“lang”）））{

						elemLang = elemLang.toLowerCase（）;
						返回elemLang === lang || elemLang.indexOf（lang +“ - ”）=== 0;
					}
				}（（elem = elem.parentNode）&& elem.nodeType === 1）;
				返回false;
			};
		}），

		//杂项
		“target”：function（elem）{
			var hash = window.location && window.location.hash;
			return hash && hash.slice（1）=== elem.id;
		}，

		“root”：function（elem）{
			return elem === docElem;
		}，

		“focus”：function（elem）{
			return elem === document.activeElement &&（！document.hasFocus || document.hasFocus（））&& !!（elem.type || elem.href || ~elem.tabIndex）;
		}，

		//布尔属性
		“enabled”：createDisabledPseudo（false），
		“disabled”：createDisabledPseudo（true），

		“checked”：function（elem）{
			//在CSS3中，：checked应返回已选中和已选中的元素
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase（）;
			return（nodeName ===“input”&& !! elem.checked）|| （nodeName ===“option”&& !! elem.selected）;
		}，

		“selected”：function（elem）{
			//访问此属性会默认选中
			// Safari中的选项正常工作
			if（elem.parentNode）{
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		}，

		//内容
		“empty”：function（elem）{
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//：empty由element（1）或内容节点（text：3; cdata：4; entity ref：5）取消，
			//但不是其他人（评论：8;处理指令：7;等）
			// nodeType <6有效，因为attributes（2）不显示为子项
			for（elem = elem.firstChild; elem; elem = elem.nextSibling）{
				if（elem.nodeType <6）{
					返回false;
				}
			}
			返回true;
		}，

		“parent”：function（elem）{
			返回！Expr.pseudos [“empty”]（elem）;
		}，

		//元素/输入类型
		“header”：function（elem）{
			return rheader.test（elem.nodeName）;
		}，

		“input”：function（elem）{
			return rinputs.test（elem.nodeName）;
		}，

		“button”：function（elem）{
			var name = elem.nodeName.toLowerCase（）;
			返回名称===“输入”&& elem.type ===“按钮”|| name ===“button”;
		}，

		“text”：function（elem）{
			var attr;
			return elem.nodeName.toLowerCase（）===“input”&&
				elem.type ===“text”&&

				//支持：IE <8
				//新的HTML5属性值（例如“搜索”）与elem.type ===“text”一起出现
				（（attr = elem.getAttribute（“type”））== null || attr.toLowerCase（）===“text”）;
		}，

		//收集位置
		“first”：createPositionalPseudo（function（）{
			return [0];
		}），

		“last”：createPositionalPseudo（function（matchIndexes，length）{
			return [length  -  1];
		}），

		“eq”：createPositionalPseudo（function（matchIndexes，length，argument）{
			return [参数<0？argument + length：argument];
		}），

		“even”：createPositionalPseudo（function（matchIndexes，length）{
			var i = 0;
			for（; i <length; i + = 2）{
				matchIndexes.push（i）;
			}
			return matchIndexes;
		}），

		“odd”：createPositionalPseudo（function（matchIndexes，length）{
			var i = 1;
			for（; i <length; i + = 2）{
				matchIndexes.push（i）;
			}
			return matchIndexes;
		}），

		“lt”：createPositionalPseudo（function（matchIndexes，length，argument）{
			var i =参数<0？
				参数+长度：
				参数>长度？
					长度 ：
					参数;
			for（; --i> = 0;）{
				matchIndexes.push（i）;
			}
			return matchIndexes;
		}），

		“gt”：createPositionalPseudo（function（matchIndexes，length，argument）{
			var i =参数<0？参数+长度：参数;
			for（; ++ i <length;）{
				matchIndexes.push（i）;
			}
			return matchIndexes;
		}）
	}
};

Expr.pseudos [“nth”] = Expr.pseudos [“eq”];

//添加按钮/输入类型伪
for（i in {radio：true，checkbox：true，file：true，password：true，image：true}）{
	Expr.pseudos [i] = createInputPseudo（i）;
}
for（i in {submit：true，reset：true}）{
	Expr.pseudos [i] = createButtonPseudo（i）;
}

//用于创建新setFilters的Easy API
function setFilters（）{}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters（）;

tokenize = Sizzle.tokenize = function（selector，parseOnly）{
	var匹配，匹配，令牌，类型，
		soFar，groups，preFilters，
		cached = tokenCache [selector +“”];

	if（缓存）{
		返回parseOnly？0：cached.slice（0）;
	}

	soFar =选择器;
	groups = [];
	preFilters = Expr.preFilter;

	while（soFar）{

		//逗号和第一次运行
		if（！matched ||（match = rcomma.exec（soFar）））{
			if（match）{
				//不要将尾随逗号视为有效
				soFar = soFar.slice（match [0] .length）|| 至今;
			}
			groups.push（（tokens = []））;
		}

		匹配=假;

		//组合
		if（（match = rcombinators.exec（soFar）））{
			matched = match.shift（）;
			tokens.push（{
				价值：匹配，
				//将后代组合子投射到空间
				type：match [0] .replace（rtrim，“”）
			}）;
			soFar = soFar.slice（matched.length）;
		}

		//过滤器
		for（在Expr.filter中输入）{
			if（（match = matchExpr [type] .exec（soFar））&&（！preFilters [type] ||
				（match = preFilters [type]（match））））{
				matched = match.shift（）;
				tokens.push（{
					价值：匹配，
					类型：类型，
					匹配：匹配
				}）;
				soFar = soFar.slice（matched.length）;
			}
		}

		if（！matched）{
			打破;
		}
	}

	//返回无效多余的长度
	//如果我们只是解析
	//否则，抛出错误或返回令牌
	返回parseOnly？
		soFar.length：
		至今 ？
			Sizzle.error（选择器）：
			//缓存令牌
			tokenCache（selector，groups）.slice（0）;
};

function toSelector（tokens）{
	var i = 0，
		len = tokens.length，
		selector =“”;
	for（; i <len; i ++）{
		selector + = tokens [i] .value;
	}
	返回选择器;
}

function addCombinator（matcher，combinator，base）{
	var dir = combinator.dir，
		skip = combinator.next，
		key = skip || DIR，
		checkNonElements = base && key ===“parentNode”，
		doneName = done ++;

	返回combinator.first？
		//检查最近的祖先/前一个元素
		function（elem，context，xml）{
			while（（elem = elem [dir]））{
				if（elem.nodeType === 1 || checkNonElements）{
					return matcher（elem，context，xml）;
				}
			}
			返回false;
		}：

		//检查所有祖先/前面的元素
		function（elem，context，xml）{
			var oldCache，uniqueCache，outerCache，
				newCache = [dirruns，doneName];

			//我们无法在XML节点上设置任意数据，因此它们无法从组合缓存中受益
			if（xml）{
				while（（elem = elem [dir]））{
					if（elem.nodeType === 1 || checkNonElements）{
						if（matcher（elem，context，xml））{
							返回true;
						}
					}
				}
			} else {
				while（（elem = elem [dir]））{
					if（elem.nodeType === 1 || checkNonElements）{
						outerCache = elem [expando] || （elem [expando] = {}）;

						//支持：IE <9
						//抵御克隆的attroperties（jQuery gh-1709）
						uniqueCache = outerCache [elem.uniqueID] || （outerCache [elem.uniqueID] = {}）;

						if（skip && skip === elem.nodeName.toLowerCase（））{
							elem = elem [dir] || ELEM;
						} else if（（oldCache = uniqueCache [key]）&&
							oldCache [0] === dirruns && oldCache [1] === doneName）{

							//分配给newCache，以便结果反向传播到以前的元素
							return（newCache [2] = oldCache [2]）;
						} else {
							//重用newcache，使结果反向传播到前面的元素
							uniqueCache [key] = newCache;

							//一场比赛意味着我们已经完成了; 失败意味着我们必须继续检查
							if（（newCache [2] = matcher（elem，context，xml）））{
								返回true;
							}
						}
					}
				}
			}
			返回false;
		};
}

function elementMatcher（matchers）{
	return matchers.length> 1？
		function（elem，context，xml）{
			var i = matchers.length;
			当我 -  ） {
				if（！matchers [i]（elem，context，xml））{
					返回false;
				}
			}
			返回true;
		}：
		匹配器[0];
}

function multipleContexts（selector，contexts，results）{
	var i = 0，
		len = contexts.length;
	for（; i <len; i ++）{
		Sizzle（选择器，contexts [i]，结果）;
	}
	返回结果;
}

function condense（unmatched，map，filter，context，xml）{
	var elem，
		newUnmatched = []，
		i = 0，
		len = unmatched.length，
		mapped = map！= null;

	for（; i <len; i ++）{
		if（（elem = unmatched [i]））{
			if（！filter || filter（elem，context，xml））{
				newUnmatched.push（elem）;
				if（mapped）{
					map.push（i）;
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher（preFilter，selector，matcher，postFilter，postFinder，postSelector）{
	if（postFilter &&！postFilter [expando]）{
		postFilter = setMatcher（postFilter）;
	}
	if（postFinder &&！postFinder [expando]）{
		postFinder = setMatcher（postFinder，postSelector）;
	}
	return markFunction（function（seed，results，context，xml）{
		var temp，i，elem，
			preMap = []，
			postMap = []，
			preexisting = results.length，

			//从种子或上下文中获取初始元素
			elems =种子|| multipleContexts（selector ||“*”，context.nodeType？[context]：context，[]），

			// Prefilter获取匹配器输入，保留种子结果同步的映射
			matcherIn = preFilter &&（seed ||！selector）？
				压缩（elems，preMap，preFilter，context，xml）：
				elems的，

			matcherOut = matcher？
				//如果我们有postFinder，或过滤的种子，或非种子postFilter或预先存在的结果，
				postFinder || （种子？preFilter：preexisting || postFilter）？

					// ...中间处理是必要的
					[]：

					// ...否则直接使用结果
					结果：
				matcherIn;

		//查找主要匹配项
		if（matcher）{
			matcher（matcherIn，matcherOut，context，xml）;
		}

		//应用postFilter
		if（postFilter）{
			temp = condense（matcherOut，postMap）;
			postFilter（temp，[]，context，xml）;

			//通过将失败的元素移回matcherIn来使其失败
			i = temp.length;
			当我 -  ） {
				if（（elem = temp [i]））{
					matcherOut [postMap [i]] =！（matcherIn [postMap [i]] = elem）;
				}
			}
		}

		if（seed）{
			if（postFinder || preFilter）{
				if（postFinder）{
					//通过将此中间项压缩到postFinder上下文中来获取最终的matcherOut
					temp = [];
					i = matcherOut.length;
					当我 -  ） {
						if（（elem = matcherOut [i]））{
							//恢复matcherIn因为elem还不是最终匹配
							temp.push（（matcherIn [i] = elem））;
						}
					}
					postFinder（null，（matcherOut = []），temp，xml）;
				}

				//将匹配的元素从种子移动到结果以使它们保持同步
				i = matcherOut.length;
				当我 -  ） {
					if（（elem = matcherOut [i]）&&
						（temp = postFinder？indexOf（seed，elem）：preMap [i]）> -1）{

						seed [temp] =！（results [temp] = elem）;
					}
				}
			}

		//如果已定义，则通过postFinder向结果中添加元素
		} else {
			matcherOut =浓缩（
				matcherOut ===结果？
					matcherOut.splice（preexisting，matcherOut.length）：
					matcherOut
			）;
			if（postFinder）{
				postFinder（null，results，matcherOut，xml）;
			} else {
				push.apply（results，matcherOut）;
			}
		}
	}）;
}

function matcherFromTokens（tokens）{
	var checkContext，matcher，j，
		len = tokens.length，
		leadingRelative = Expr.relative [tokens [0] .type]，
		implicitRelative = leadingRelative || Expr.relative [“”]，
		我=领先相对？1：0，

		//基础匹配器确保元素可从顶层上下文访问
		matchContext = addCombinator（function（elem）{
			return elem === checkContext;
		}，implicitRelative，true），
		matchAnyContext = addCombinator（function（elem）{
			return indexOf（checkContext，elem）> -1;
		}，implicitRelative，true），
		matchers = [function（elem，context，xml）{
			var ret =（！leadingRelative &&（xml || context！== outermostContext））|| （
				（checkContext = context）.nodeType？
					matchContext（elem，context，xml）：
					matchAnyContext（elem，context，xml））;
			//避免挂在元素上（问题＃299）
			checkContext = null;
			返回;
		}];

	for（; i <len; i ++）{
		if（（matcher = Expr.relative [tokens [i] .type]））{
			matchers = [addCombinator（elementMatcher（matchers），matcher）];
		} else {
			matcher = Expr.filter [tokens [i] .type] .apply（null，tokens [i] .matches）;

			//在看到位置匹配器后返回特殊情况
			if（matcher [expando]）{
				//找到下一个相对运算符（如果有）以便正确处理
				j = ++ i;
				for（; j <len; j ++）{
					if（Expr.relative [tokens [j] .type]）{
						打破;
					}
				}
				return setMatcher（
					i> 1 && elementMatcher（matchers），
					i> 1 && toSelector（
						//如果前面的标记是后代组合子，则插入一个隐式的任意元素`*`
						tokens.slice（0，i  -  1）.concat（{value：tokens [i  -  2] .type ===“”？“*”：“”}）
					）.replace（rtrim，“$ 1”），
					匹配，
					我<j && matcherFromTokens（tokens.slice（i，j）），
					j <len && matcherFromTokens（（tokens = tokens.slice（j））），
					j <len && toSelector（令牌）
				）;
			}
			matchers.push（matcher）;
		}
	}

	return elementMatcher（matchers）;
}

function matcherFromGroupMatchers（elementMatchers，setMatchers）{
	var bySet = setMatchers.length> 0，
		byElement = elementMatchers.length> 0，
		superMatcher = function（seed，context，xml，results，outermost）{
			var elem，j，matcher，
				matchedCount = 0，
				i =“0”，
				unmatched = seed && []，
				setMatched = []，
				contextBackup = outermostContext，
				//我们必须始终拥有种子元素或最外层的上下文
				elems =种子|| byElement && Expr.find [“TAG”]（“*”，最外层），
				//使用整数dirruns iff这是最外层的匹配器
				dirrunsUnique =（dirruns + = contextBackup == null？1：Math.random（）|| 0.1），
				len = elems.length;

			if（outermost）{
				outermostContext = context === document || 上下文|| 最外层;
			}

			//添加将elementMatchers直接传递给结果的元素
			//支持：IE <9，Safari
			//通过id容忍NodeList属性（IE：“length”; Safari：<number>）匹配元素
			for（; i！== len &&（elem = elems [i]）！= null; i ++）{
				if（byElement && elem）{
					j = 0;
					if（！context && elem.ownerDocument！== document）{
						setDocument（elem）;
						xml =！documentIsHTML;
					}
					while（（matcher = elementMatchers [j ++]））{
						if（matcher（elem，context || document，xml））{
							results.push（elem）;
							打破;
						}
					}
					if（outermost）{
						dirruns = dirrunsUnique;
					}
				}

				//跟踪设置过滤器的不匹配元素
				if（bySet）{
					//他们将经历所有可能的匹配
					if（（elem =！matcher && elem））{
						matchedCount--;
					}

					//为每个元素延长数组，匹配与否
					if（seed）{
						unmatched.push（elem）;
					}
				}
			}

			//`i`现在是上面访问过的元素的数量，并将它添加到`matchedCount`
			//使后者为非负数。
			matchedCount + = i;

			//将集合过滤器应用于不匹配的元素
			//注意：如果没有不匹配的元素（即`matchedCount`），可以跳过这个
			//等于`i`），除非我们没有访问上面循环中的_any_元素，因为我们有
			//没有元素匹配，没有种子。
			//增加一个初始字符串“0”`i`允许`i`只保留一个字符串
			// case，这将导致“00”`matchedCount`与`i`不同，但也是
			//数字为零
			if（bySet && i！== matchedCount）{
				j = 0;
				while（（matcher = setMatchers [j ++]））{
					matcher（不匹配，setMatched，context，xml）;
				}

				if（seed）{
					//重新整合元素匹配以消除排序的需要
					if（matchedCount> 0）{
						当我 -  ） {
							if（！（unmatched [i] || setMatched [i]））{
								setMatched [i] = pop.call（results）;
							}
						}
					}

					//丢弃索引占位符值以仅获取实际匹配
					setMatched = condense（setMatched）;
				}

				//为结果添加匹配项
				push.apply（results，setMatched）;

				//无核集匹配成功匹配多个成功的匹配器规定排序
				if（outermost &&！seed && setMatched.length> 0 &&
					（matchedCount + setMatchers.length）> 1）{

					Sizzle.uniqueSort（结果）;
				}
			}

			//通过嵌套匹配器覆盖全局变量的操作
			if（outermost）{
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			回归无与伦比;
		};

	返回bySet？
		markFunction（superMatcher）：
		superMatcher;
}

compile = Sizzle.compile = function（选择器，匹配/ *仅供内部使用* /）{
	var i，
		setMatchers = []，
		elementMatchers = []，
		cached = compilerCache [selector +“”];

	if（！cached）{
		//生成递归函数的函数，可用于检查每个元素
		if（！match）{
			match = tokenize（selector）;
		}
		i = match.length;
		当我 -  ） {
			cached = matcherFromTokens（match [i]）;
			if（cached [expando]）{
				setMatchers.push（cached）;
			} else {
				elementMatchers.push（cached）;
			}
		}

		//缓存已编译的函数
		cached = compilerCache（selector，matcherFromGroupMatchers（elementMatchers，setMatchers））;

		//保存选择器和标记化
		cached.selector = selector;
	}
	返回缓存;
};

/ **
 *低级选择功能，适用于Sizzle的编译
 *选择器功能
 * @param {String | Function}选择器选择器或预编译器
 *使用Sizzle.compile构建的选择器功能
 * @param {Element}上下文
 * @param {数组} [结果]
 * @param {Array} [seed]要匹配的一组元素
 * /
select = Sizzle.select = function（选择器，上下文，结果，种子）{
	var i，tokens，token，type，find，
		compiled = typeof selector ===“function”&& selector，
		match =！seed && tokenize（（selector = compiled.selector || selector））;

	结果=结果|| [];

	//如果列表中只有一个选择器且没有种子，请尝试最小化操作
	//（后者保证我们的背景）
	if（match.length === 1）{

		//如果前导复合选择器是ID，则减少上下文
		tokens = match [0] = match [0] .slice（0）;
		if（tokens.length> 2 &&（token = tokens [0]）。type ===“ID”&&
				context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]）{

			context =（Expr.find [“ID”]（token.matches [0] .replace（runescape，funescape），context）|| []）[0];
			if（！context）{
				返回结果;

			//预编译的匹配器仍将验证祖先，因此升级一个级别
			} else if（compiled）{
				context = context.parentNode;
			}

			selector = selector.slice（tokens.shift（）。value.length）;
		}

		//获取从右到左匹配的种子集
		i = matchExpr [“needsContext”]。test（selector）？0：tokens.length;
		当我 -  ） {
			token = tokens [i];

			//如果我们击中组合器就中止
			if（Expr.relative [（type = token.type）]）{
				打破;
			}
			if（（find = Expr.find [type]））{
				//搜索，扩展主要兄弟组合子的上下文
				if（（seed = find（
					token.matches [0] .replace（runescape，funescape），
					rsibling.test（tokens [0] .type）&& testContext（context.parentNode）|| 上下文
				）））{

					//如果种子是空的或没有令牌，我们可以提前返回
					tokens.splice（i，1）;
					selector = seed.length && toSelector（tokens）;
					if（！selector）{
						push.apply（结果，种子）;
						返回结果;
					}

					打破;
				}
			}
		}
	}

	//如果未提供过滤功能，请编译并执行过滤功能
	//如果我们修改了上面的选择器，请提供`match`以避免重新识别
	（编译|| compile（选择器，匹配））（
		种子，
		背景下，
		！documentIsHTML，
		结果，
		！context || rsibling.test（selector）&& testContext（context.parentNode）|| 上下文
	）;
	返回结果;
};

//一次性作业

//排序稳定性
support.sortStable = expando.split（“”）。sort（sortOrder）.join（“”）=== expando;

//支持：Chrome 14-35 +
//如果没有传递给比较函数，则始终假设重复
support.detectDuplicates = !! hasDuplicate;

//针对默认文档初始化
setDocument（）;

//支持：Webkit <537.32  -  Safari 6.0.3 / Chrome 25（在Chrome 27中修复）
//分离的节点混淆地跟随*彼此*
support.sortDetached = assert（function（el）{
	//应返回1，但返回4（以下）
	return el.compareDocumentPosition（document.createElement（“fieldset”））＆1;
}）;

//支持：IE <8
//防止属性/属性“插值”
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if（！assert（function（el）{
	el.innerHTML =“<a href='#'> </a>”;
	return el.firstChild.getAttribute（“href”）===“＃”;
}））{
	addHandle（“type | href | height | width”，function（elem，name，isXML）{
		if（！isXML）{
			return elem.getAttribute（name，name.toLowerCase（）===“type”？1：2）;
		}
	}）;
}

//支持：IE <9
//使用defaultValue代替getAttribute（“value”）
if（！support.attributes ||！assert（function（el）{
	el.innerHTML =“<input />”;
	el.firstChild.setAttribute（“value”，“”）;
	return el.firstChild.getAttribute（“value”）===“”;
}））{
	addHandle（“value”，function（elem，name，isXML）{
		if（！isXML && elem.nodeName.toLowerCase（）===“input”）{
			return elem.defaultValue;
		}
	}）;
}

//支持：IE <9
//当getAttribute所在时，使用getAttributeNode获取布尔值
if（！assert（function（el）{
	return el.getAttribute（“disabled”）== null;
}））{
	addHandle（布尔值，函数（elem，name，isXML）{
		var val;
		if（！isXML）{
			return elem [name] === true？name.toLowerCase（）：
					（val = elem.getAttributeNode（name））&& val.specified？
					val.value：
				空值;
		}
	}）;
}

返回Sizzle;

}）（窗口）;



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

//已弃用
jQuery.expr [“：”] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function（elem，dir，until）{
	var matched = []，
		truncate = until！== undefined;

	while（（elem = elem [dir]）&& elem.nodeType！== 9）{
		if（elem.nodeType === 1）{
			if（truncate && jQuery（elem）.is（until））{
				打破;
			}
			matched.push（elem）;
		}
	}
	返回匹配;
};


var siblings = function（n，elem）{
	var matched = [];

	for（; n; n = n.nextSibling）{
		if（n.nodeType === 1 && n！== elem）{
			matched.push（n）;
		}
	}

	返回匹配;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName（elem，name）{

  return elem.nodeName && elem.nodeName.toLowerCase（）=== name.toLowerCase（）;

};
var rsingleTag =（/ ^ <（[az] [^ \ / \ 0>：\ x20 \ t \ r \ n \ f] *）[\ x20 \ t \ r \ n \ f] * \ /？>（ ？：<\ / \ 1> |）$ / i）;



//为过滤器实现相同的功能而不是
function winnow（elements，qualifier，not）{
	if（isFunction（qualifier））{
		return jQuery.grep（elements，function（elem，i）{
			return !! qualifier.call（elem，i，elem）！== not;
		}）;
	}

	//单个元素
	if（qualifier.nodeType）{
		return jQuery.grep（elements，function（elem）{
			return（elem === qualifier）！== not;
		}）;
	}

	//元素的Arraylike（jQuery，arguments，Array）
	if（typeof qualifier！==“string”）{
		return jQuery.grep（elements，function（elem）{
			return（indexOf.call（qualifier，elem）> -1）！== not;
		}）;
	}

	//直接过滤简单和复杂的选择器
	return jQuery.filter（限定符，元素，不是）;
}

jQuery.filter = function（expr，elems，not）{
	var elem = elems [0];

	如果不 ） {
		expr =“：not（”+ expr +“）”;
	}

	if（elems.length === 1 && elem.nodeType === 1）{
		返回jQuery.find.matchesSelector（elem，expr）？[elem]：[];
	}

	return jQuery.find.matches（expr，jQuery.grep（elems，function（elem）{
		return elem.nodeType === 1;
	}）;;
};

jQuery.fn.extend（{
	find：function（selector）{
		var i，ret，
			len = this.length，
			self = this;

		if（typeof selector！==“string”）{
			return this.pushStack（jQuery（selector）.filter（function（）{
				for（i = 0; i <len; i ++）{
					if（jQuery.contains（self [i]，this））{
						返回true;
					}
				}
			}）;;
		}

		ret = this.pushStack（[]）;

		for（i = 0; i <len; i ++）{
			jQuery.find（selector，self [i]，ret）;
		}

		返回len> 1？jQuery.uniqueSort（ret）：ret;
	}，
	filter：function（selector）{
		return this.pushStack（winnow（this，selector || []，false））;
	}，
	not：function（selector）{
		return this.pushStack（winnow（this，selector || []，true））;
	}，
	是：function（selector）{
		返回!! winnow（
			这个，

			//如果这是位置/相对选择器，请检查返回集合中的成员资格
			// so $（“p：first”）。is（“p：last”）对于带有两个“p”的doc不会返回true。
			typeof selector ===“string”&& rneedsContext.test（selector）？
				jQuery（选择器）：
				选择器|| []，
			假
		）。长度;
	}
}）;


//初始化一个jQuery对象


//对根jQuery（文档）的中心引用
var rootjQuery，

	//检查HTML字符串的简单方法
	//优先#id <tag>以避免XSS通过location.hash（＃9521）
	//严格的HTML识别（＃11290：必须以<开头）
	//快捷简单#id案例的速度
	rquickExpr = / ^（？：\ s *（<[\ w \ W] +>）[^>] * |＃（[\ w  - ] +））$ /，

	init = jQuery.fn.init = function（selector，context，root）{
		var match，elem;

		// HANDLE：$（“”），$（null），$（undefined），$（false）
		if（！selector）{
			归还这个;
		}

		//方法init（）接受备用的rootjQuery
		//所以迁移可以支持jQuery.sub（gh-2101）
		root = root || rootjQuery;

		//处理HTML字符串
		if（typeof selector ===“string”）{
			if（selector [0] ===“<”&&
				selector [selector.length  -  1] ===“>”&&
				selector.length> = 3）{

				//假设以<>开头和结尾的字符串是HTML并跳过正则表达式检查
				match = [null，selector，null];

			} else {
				match = rquickExpr.exec（selector）;
			}

			//匹配html或确保没有为#id指定上下文
			if（match &&（match [1] ||！context））{

				// HANDLE：$（html） - > $（数组）
				if（match [1]）{
					context =上下文实例jQuery？context [0]：context;

					//对于back-compat，运行脚本的选项是正确的
					//如果parseHTML不存在，请故意抛出错误
					jQuery.merge（this，jQuery.parseHTML（
						匹配[1]，
						context && context.nodeType？context.ownerDocument || 上下文：文件，
						真正
					））;

					// HANDLE：$（html，props）
					if（rsingleTag.test（match [1]）&& jQuery.isPlainObject（context））{
						for（在上下文中匹配）{

							//如果可能，将上下文的属性称为方法
							if（isFunction（this [match]））{
								这[匹配]（context [match]）;

							// ...以及以其他方式设置为属性
							} else {
								this.attr（match，context [match]）;
							}
						}
					}

					归还这个;

				// HANDLE：$（＃id）
				} else {
					elem = document.getElementById（match [2]）;

					if（elem）{

						//将元素直接注入jQuery对象
						这[0] = elem;
						this.length = 1;
					}
					归还这个;
				}

			// HANDLE：$（expr，$（...））
			} else if（！context || context.jquery）{
				return（context || root）.find（selector）;

			// HANDLE：$（expr，context）
			//（这相当于：$（context）.find（expr）
			} else {
				return this.constructor（context）.find（selector）;
			}

		//手柄：$（DOMElement）
		} else if（selector.nodeType）{
			这[0] =选择器;
			this.length = 1;
			归还这个;

		//手柄：$（功能）
		//文档就绪的快捷方式
		} else if（isFunction（selector））{
			return root.ready！== undefined？
				root.ready（selector）：

				//如果没有准备就立即执行
				selector（jQuery）;
		}

		return jQuery.makeArray（selector，this）;
	};

//为init函数提供jQuery原型以供以后实例化
init.prototype = jQuery.fn;

//初始化中心参考
rootjQuery = jQuery（document）;


var rparentsprev = / ^（?: parents | prev（？：Until | All））/，

	//保证在从唯一集开始时生成唯一集的方法
	guaranteeUnique = {
		孩子们：是的，
		内容：true，
		下一个：是的，
		上一篇：真的
	};

jQuery.fn.extend（{
	has：function（target）{
		var targets = jQuery（target，this），
			l = targets.length;

		return this.filter（function（）{
			var i = 0;
			for（; i <l; i ++）{
				if（jQuery.contains（this，targets [i]））{
					返回true;
				}
			}
		}）;
	}，

	最近的：函数（选择器，上下文）{
		var cur，
			i = 0，
			l = this.length，
			匹配= []，
			targets = typeof selectors！==“string”&& jQuery（selectors）;

		//位置选择器永远不会匹配，因为没有_selection_上下文
		if（！rneedsContext.test（selectors））{
			for（; i <l; i ++）{
				for（cur = this [i]; cur && cur！== context; cur = cur.parentNode）{

					//始终跳过文档片段
					if（cur.nodeType <11 &&（目标？
						targets.index（cur）> -1：

						//不要将非元素传递给Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector（cur，selectors）））{

						matched.push（cur）;
						打破;
					}
				}
			}
		}

		return this.pushStack（matched.length> 1？jQuery.uniqueSort（matched）：matched）;
	}，

	//确定集合中元素的位置
	index：function（elem）{

		//没有参数，在父级中返回索引
		if（！elem）{
			return（this [0] && this [0] .parentNode）？this.first（）。prevAll（）。length：-1;
		}

		//选择器中的索引
		if（typeof elem ===“string”）{
			return indexOf.call（jQuery（elem），this [0]）;
		}

		//找到所需元素的位置
		return indexOf.call（这个，

			//如果收到jQuery对象，则使用第一个元素
			elem.jquery？elem [0]：elem
		）;
	}，

	add：function（selector，context）{
		return this.pushStack（
			jQuery.uniqueSort（
				jQuery.merge（this.get（），jQuery（selector，context））
			）
		）;
	}，

	addBack：function（selector）{
		return this.add（selector == null？
			this.prevObject：this.prevObject.filter（selector）
		）;
	}
}）;

function sibling（cur，dir）{
	while（（cur = cur [dir]）&& cur.nodeType！== 1）{}
	返回
}

jQuery.each（{
	parent：function（elem）{
		var parent = elem.parentNode;
		return parent && parent.nodeType！== 11？parent：null;
	}，
	父母：function（elem）{
		return dir（elem，“parentNode”）;
	}，
	parentsUntil：function（elem，i，until）{
		return dir（elem，“parentNode”，until）;
	}，
	下一个：function（elem）{
		返回兄弟（elem，“nextSibling”）;
	}，
	上一篇：function（elem）{
		返回兄弟（elem，“previousSibling”）;
	}，
	nextAll：function（elem）{
		return dir（elem，“nextSibling”）;
	}，
	prevAll：function（elem）{
		return dir（elem，“previousSibling”）;
	}，
	nextUntil：function（elem，i，until）{
		return dir（elem，“nextSibling”，直到）;
	}，
	prevUntil：function（elem，i，until）{
		return dir（elem，“previousSibling”，直到）;
	}，
	兄弟姐妹：function（elem）{
		return siblings（（elem.parentNode || {}）。firstirstChild，elem）;
	}，
	children：function（elem）{
		返回兄弟姐妹（elem.firstChild）;
	}，
	内容：function（elem）{
		if（typeof elem.contentDocument！==“undefined”）{
			return elem.contentDocument;
		}

		//支持：仅限IE 9  -  11，仅限iOS 7，Android浏览器<= 4.3
		//在浏览器中将模板元素视为常规元素
		//不支持
		if（nodeName（elem，“template”））{
			elem = elem.content || ELEM;
		}

		return jQuery.merge（[]，elem.childNodes）;
	}
}，function（name，fn）{
	jQuery.fn [name] = function（until，selector）{
		var matched = jQuery.map（this，fn，until）;

		if（name.slice（-5）！==“Until”）{
			selector = until;
		}

		if（selector && typeof selector ===“string”）{
			matched = jQuery.filter（selector，matched）;
		}

		if（this.length> 1）{

			//删除重复项
			if（！guaranteedUnique [name]）{
				jQuery.uniqueSort（匹配）;
			}

			//父母*和前衍生品的逆序
			if（rparentsprev.test（name））{
				matched.reverse（）;
			}
		}

		return this.pushStack（matching）;
	};
}）;
var rnothtmlwhite =（/ [^ \ x20 \ t \ r \ n \ f] + / g）;



//将字符串格式的选项转换为对象格式的选项
function createOptions（options）{
	var object = {};
	jQuery.each（options.match（rnothtmlwhite）|| []，function（_，flag）{
		object [flag] = true;
	}）;
	返回对象;
}

/ *
 *使用以下参数创建回调列表：
 *
 *选项：一个可选的空格分隔选项列表，它将改变方式
 *回调列表表现或更传统的选项对象
 *
 *默认情况下，回调列表将像事件回调列表一样，可以
 *多次“解雇”。
 *
 *可能的选择：
 *
 *一次：将确保回调列表只能被触发一次（如延期）
 *
 * memory：将跟踪以前的值并将调用添加的任何回调
 *列表被立即用最新的“记忆”点燃后
 *值（如延期）
 *
 *唯一：将确保回调只能添加一次（列表中没有重复）
 *
 * stopOnFalse：当回调返回false时中断调用
 *
 * /
jQuery.Callbacks = function（options）{

	//如果需要，将选项从String格式转换为Object格式
	//（我们先检查缓存）
	options = typeof options ===“string”？
		createOptions（options）：
		jQuery.extend（{}，options）;

	var //标记列表当前是否正在触发的标志
		射击，

		//不可忘记列表的上次触发值
		记忆，

		//标记是否已触发列表
		解雇，

		//防止射击的旗帜
		锁定，

		//实际回调列表
		list = []，

		//可重复列表的执行数据队列
		queue = []，

		//当前触发回调的索引（根据需要通过添加/删除修改）
		firingIndex = -1，

		//消防回调
		fire = function（）{

			//强制单次射击
			已锁定=已锁定|| options.once;

			//为所有挂起的执行执行回调，
			//尊重firingIndex覆盖和运行时更改
			fired = firing = true;
			for（; queue.length; firingIndex = -1）{
				memory = queue.shift（）;
				while（++ firingIndex <list.length）{

					//运行回调并检查提前终止
					if（list [firingIndex] .apply（memory [0]，memory [1]）=== false &&
						options.stopOnFalse）{

						//跳转到结束并忘记数据，以便.add不会重新启动
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			//如果我们完成了数据，请忘记数据
			if（！options.memory）{
				memory = false;
			}

			fired = false;

			//如果我们完成了射击，那就清理干净吧
			if（locked）{

				//如果我们有未来添加呼叫的数据，请保留一个空列表
				if（memory）{
					list = [];

				//否则，此对象已用完
				} else {
					list =“”;
				}
			}
		}，

		//实际回调对象
		self = {

			//将回调或回调集合添加到列表中
			add：function（）{
				if（list）{

					//如果我们有过去运行的记忆，我们应该在添加之后开火
					if（memory &&！firing）{
						firingIndex = list.length  -  1;
						queue.push（memory）;
					}

					（function add（args）{
						jQuery.each（args，function（_，arg）{
							if（isFunction（arg））{
								if（！options.unique ||！self.has（arg））{
									list.push（arg）;
								}
							} else if（arg && arg.length && toType（arg）！==“string”）{

								//递归检查
								add（arg）;
							}
						}）;
					}）（参数）;

					if（memory &&！firing）{
						火（）;
					}
				}
				归还这个;
			}，

			//从列表中删除回调
			remove：function（）{
				jQuery.each（arguments，function（_，arg）{
					var index;
					while（（index = jQuery.inArray（arg，list，index））> -1）{
						list.splice（index，1）;

						//处理触发索引
						if（index <= firingIndex）{
							firingIndex--;
						}
					}
				}）;
				归还这个;
			}，

			//检查给定的回调是否在列表中。
			//如果没有给出参数，则返回list是否附加了回调。
			has：function（fn）{
				返回fn？
					jQuery.inArray（fn，list）> -1：
					list.length> 0;
			}，

			//从列表中删除所有回调
			empty：function（）{
				if（list）{
					list = [];
				}
				归还这个;
			}，

			//禁用.fire和.add
			//中止所有当前/待处理的执行
			//清除所有回调和值
			disable：function（）{
				locked = queue = [];
				list = memory =“”;
				归还这个;
			}，
			disabled：function（）{
				return！list;
			}，

			//禁用.fire
			//除非我们有内存（因为它没有效果），也禁用.add
			//中止所有待处理的执行
			lock：function（）{
				locked = queue = [];
				if（！memory &&！firing）{
					list = memory =“”;
				}
				归还这个;
			}，
			已锁定：function（）{
				返回!!锁定;
			}，

			//使用给定的上下文和参数调用所有回调
			fireWith：function（context，args）{
				if（！locked）{
					args = args || [];
					args = [context，args.slice？args.slice（）：args];
					queue.push（args）;
					if（！firing）{
						火（）;
					}
				}
				归还这个;
			}，

			//使用给定的参数调用所有回调
			fire：function（）{
				self.fireWith（this，arguments）;
				归还这个;
			}，

			//知道回调函数是否至少被调用过一次
			fired：function（）{
				回来!!被解雇
			}
		};

	回归自我;
};


function Identity（v）{
	返回v;
}
function Thrower（ex）{
	抛出前
}

function adoptValue（value，resolve，reject，noValue）{
	var方法;

	尝试{

		//首先检查promise方面以授予同步行为特权
		if（value && isFunction（（method = value.promise）））{
			method.call（value）.done（resolve）.fail（reject）;

		//其他的人
		} else if（value && isFunction（（method = value.then）））{
			method.call（value，resolve，reject）;

		//其他非卑鄙的人
		} else {

			//通过让Array＃slice将boolean`noValue`转换为整数来控制`resolve`参数：
			// * false：[value] .slice（0）=> resolve（value）
			// * true：[value] .slice（1）=> resolve（）
			resolve.apply（undefined，[value] .slice（noValue））;
		}

	//对于Promises / A +，将异常转换为拒绝
	//由于jQuery.when没有解包，我们可以跳过出现的额外检查
	//延迟＃然后有条件地抑制拒绝。
	} catch（value）{

		//支持：仅限Android 4.0
		//在没有.call / .apply的情况下调用严格模式函数获取全局对象上下文
		reject.apply（undefined，[value]）;
	}
}

jQuery.extend（{

	延期：function（func）{
		var tuples = [

				//动作，添加监听器，回调，
				// ...然后处理程序，参数索引，[最终状态]
				[“notify”，“progress”，jQuery.Callbacks（“memory”），
					jQuery.Callbacks（“memory”），2]，
				[“resolve”，“done”，jQuery.Callbacks（“曾经的记忆”），
					jQuery.Callbacks（“一次内存”），0，“已解决”]，
				[“拒绝”，“失败”，jQuery.Callbacks（“曾经记忆”），
					jQuery.Callbacks（“一次记忆”），1，“拒绝”]
			]
			state =“pending”，
			promise = {
				state：function（）{
					返回状态;
				}，
				always：function（）{
					deferred.done（arguments）.fail（arguments）;
					归还这个;
				}，
				“catch”：function（fn）{
					return promise.then（null，fn）;
				}，

				//保持管道以进行反算
				pipe：function（/ * fnDone，fnFail，fnProgress * /）{
					var fns = arguments;

					return jQuery.Deferred（function（newDefer）{
						jQuery.each（元组，函数（i，tuple）{

							//将元组（进度，完成，失败）映射到参数（完成，失败，进度）
							var fn = isFunction（fns [tuple [4]]）&& fns [tuple [4]];

							// deferred.progress（function（）{bind to newDefer or newDefer.notify}）
							// deferred.done（function（）{bind to newDefer or newDefer.resolve}）
							// deferred.fail（function（）{bind to newDefer or newDefer.reject}）
							deferred [tuple [1]]（function（）{
								var returns = fn && fn.apply（this，arguments）;
								if（返回&& isFunction（returned.promise））{
									returned.promise（）
										.progress（newDefer.notify）
										.done（newDefer.resolve）
										.fail（newDefer.reject）;
								} else {
									newDefer [tuple [0] +“With”]（
										这个，
										fn？[返回]：争论
									）;
								}
							}）;
						}）;
						fns = null;
					} ）。诺言（）;
				}，
				then：function（onFulfilled，onRejected，onProgress）{
					var maxDepth = 0;
					function resolve（depth，deferred，handler，special）{
						return function（）{
							var that = this，
								args =参数，
								mightThrow = function（）{
									var返回，然后;

									//支持：承诺/ A +第2.3.3.3.3节
									// https://promisesaplus.com/#point-59
									//忽略双重分辨率尝试
									if（深度<maxDepth）{
										返回;
									}

									returned = handler.apply（that，args）;

									//支持：Promises / A +第2.3.1节
									// https://promisesaplus.com/#point-48
									if（返回=== deferred.promise（））{
										抛出新的TypeError（“Thenable self-resolution”）;
									}

									//支持：Promises / A + section 2.3.3.1,3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									//只检索一次`then`
									然后=返回&&

										//支持：承诺/ A +第2.3.4节
										// https://promisesaplus.com/#point-64
										//只检查对象和函数的可用性
										（typeof返回===“对象”||
											typeof返回===“函数”）&&
										returned.then;

									//处理一个返回的
									if（isFunction（then））{

										//特殊处理器（通知）只是等待解决
										if（special）{
											then.call（
												回，
												解决（maxDepth，deferred，Identity，special），
												解决（maxDepth，deferred，Thrower，special）
											）;

										//正常处理器（解析）也进入了进程
										} else {

											// ...并忽略旧的分辨率值
											MAXDEPTH ++;

											then.call（
												回，
												解决（maxDepth，deferred，Identity，special），
												解决（maxDepth，deferred，Thrower，special），
												解决（maxDepth，deferred，Identity，
													deferred.notifyWith）
											）;
										}

									//处理所有其他返回值
									} else {

										//只有替换处理程序才能传递上下文
										//和多个值（非规范行为）
										if（handler！== Identity）{
											那=未定义;
											args = [返回];
										}

										//处理价值
										//默认进程已解决
										（special || deferred.resolveWith）（that，args）;
									}
								}，

								//只有普通处理器（解析）捕获并拒绝异常
								过程=特殊？
									mayThrow：
									function（）{
										尝试{
											mightThrow（）;
										} catch（e）{

											if（jQuery.Deferred.exceptionHook）{
												jQuery.Deferred.exceptionHook（e，
													process.stackTrace）;
											}

											//支持：承诺/ A +第2.3.3.3.4.1节
											// https://promisesaplus.com/#point-61
											//忽略解决后异常
											if（depth + 1> = maxDepth）{

												//只有替换处理程序才能传递上下文
												//和多个值（非规范行为）
												if（handler！== Thrower）{
													那=未定义;
													args = [e];
												}

												deferred.rejectWith（that，args）;
											}
										}
									};

							//支持：承诺/ A +第2.3.3.3.1节
							// https://promisesaplus.com/#point-57
							//立即重新解决承诺，以避免错误拒绝
							//后续错误
							if（深度）{
								处理（）;
							} else {

								//如果异常，调用可选的钩子来记录堆栈
								//因为当执行异步时它会丢失
								if（jQuery.Deferred.getStackHook）{
									process.stackTrace = jQuery.Deferred.getStackHook（）;
								}
								window.setTimeout（process）;
							}
						};
					}

					return jQuery.Deferred（function（newDefer）{

						// progress_handlers.add（...）
						元组[0] [3] .add（
							解决（
								0，
								newDefer，
								isFunction（onProgress）？
									onProgress：
									身份，
								newDefer.notifyWith
							）
						）;

						// fulfillilled_handlers.add（...）
						元组[1] [3] .add（
							解决（
								0，
								newDefer，
								isFunction（onFulfilled）？
									onFulfilled：
									身分
							）
						）;

						// rejected_handlers.add（...）
						元组[2] [3] .add（
							解决（
								0，
								newDefer，
								isFunction（onRejected）？
									onRejected：
									运动员
							）
						）;
					} ）。诺言（）;
				}，

				//获得延期的承诺
				//如果提供了obj，则将promise方面添加到对象中
				promise：function（obj）{
					return obj！= null？jQuery.extend（obj，promise）：promise;
				}
			}，
			deferred = {};

		//添加特定于列表的方法
		jQuery.each（元组，函数（i，tuple）{
			var list = tuple [2]，
				stateString = tuple [5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise [tuple [1]] = list.add;

			//处理状态
			if（stateString）{
				list.add（
					function（）{

						// state =“已解决”（即已履行）
						// state =“rejected”
						state = stateString;
					}，

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					元组[3  -  i] [2] .disable，

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					元组[3  -  i] [3] .disable，

					// progress_callbacks.lock
					元组[0] [2] .lock，

					// progress_handlers.lock
					元组[0] [3] .lock
				）;
			}

			// progress_handlers.fire
			// fulfillilled_handlers.fire
			// rejected_handlers.fire
			list.add（元组[3] .fire）;

			// deferred.notify = function（）{deferred.notifyWith（...）}
			// deferred.resolve = function（）{deferred.resolveWith（...）}
			// deferred.reject = function（）{deferred.rejectWith（...）}
			deferred [tuple [0]] = function（）{
				deferred [tuple [0] +“With”]（这= = deferred？undefined：this，arguments）;
				归还这个;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred [tuple [0] +“With”] = list.fireWith;
		}）;

		//使延期承诺
		promise.promise（延期）;

		//如果有的话，调用给定的func
		if（func）{
			func.call（延迟，延期）;
		}

		// 全部完成！
		退货延期;
	}，

	//延期帮助者
	when：function（singleValue）{
		VAR

			//未完成的下属的数量
			remaining = arguments.length，

			//未处理参数的数量
			我=剩下的，

			//从属履行数据
			resolveContexts = Array（i），
			resolveValues = slice.call（arguments），

			//主人延期
			master = jQuery.Deferred（），

			//下属回调工厂
			updateFunc = function（i）{
				return函数（值）{
					resolveContexts [i] = this;
					resolveValues [i] = arguments.length> 1？slice.call（arguments）：value;
					if（！（--remaining））{
						master.resolveWith（resolveContexts，resolveValues）;
					}
				};
			};

		//采用单参数和空参数，如Promise.resolve
		if（剩余<= 1）{
			adoptValue（singleValue，master.done（updateFunc（i））。。resolve，master.reject，
				！剩下的）;

			//使用.then（）打开辅助设备（参见gh-3000）
			if（master.state（）===“pending”||
				isFunction（resolveValues [i] && resolveValues [i] .then））{

				return master.then（）;
			}
		}

		//像Promise.all数组元素一样聚合多个参数
		当我 -  ） {
			adoptValue（resolveValues [i]，updateFunc（i），master.reject）;
		}

		return master.promise（）;
	}
}）;


//这些通常表示程序员在开发过程中出错，
//尽快警告他们，而不是默认吞下他们。
var rerrorNames = / ^（Eval | Internal | Range | Reference | Syntax | Type | URI）Error $ /;

jQuery.Deferred.exceptionHook = function（错误，堆栈）{

	//支持：仅限IE 8  -  9
	//当dev工具打开时，控制台就存在，这可能随时发生
	if（window.console && window.console.warn && error && rerrorNames.test（error.name））{
		window.console.warn（“jQuery.Deferred exception：”+ error.message，error.stack，stack）;
	}
};




jQuery.readyException = function（error）{
	window.setTimeout（function（）{
		抛出错误;
	}）;
};




//在DOM准备就绪时使用的延迟
var readyList = jQuery.Deferred（）;

jQuery.fn.ready = function（fn）{

	readyList
		.then（fn）

		//在函数中包装jQuery.readyException以便查找
		//在错误处理时发生，而不是回调
		//注册
		.catch（function（error）{
			jQuery.readyException（error）;
		}）;

	归还这个;
};

jQuery.extend（{

	// DOM是否可以使用？一旦发生，设置为true。
	isReady：false，

	//一个计数器，用于跟踪之前要等待的项目数
	//就绪事件触发 见＃6781
	readyWait：1，

	// DOM准备就绪时处理
	ready：function（wait）{

		//如果有待处理的暂停或我们已经准备就绪，则中止
		if（wait === true？--jQuery.readyWait：jQuery.isReady）{
			返回;
		}

		//记住DOM准备好了
		jQuery.isReady = true;

		//如果正常的DOM Ready事件被触发，减少，并在需要时等待
		if（等等！== true && --jQuery.readyWait> 0）{
			返回;
		}

		//如果有绑定的函数，则执行
		readyList.resolveWith（document，[jQuery]）;
	}
}）;

jQuery.ready.then = readyList.then;

// ready事件处理程序和self cleanup方法
function completed（）{
	document.removeEventListener（“DOMContentLoaded”，已完成）;
	window.removeEventListener（“load”，completed）;
	jQuery.ready（）;
}

//捕获调用$（document）.ready（）的情况
//在浏览器事件发生后。
//支持：IE <= 9  -  10
//较旧的IE有时会过早发出“交互式”信号
if（document.readyState ===“complete”||
	（document.readyState！==“loading”&&！document.documentElement.doScroll））{

	//异步处理它以使脚本有机会延迟准备
	window.setTimeout（jQuery.ready）;

} else {

	//使用方便的事件回调
	document.addEventListener（“DOMContentLoaded”，已完成）;

	//回退到window.onload，这将始终有效
	window.addEventListener（“load”，completed）;
}




//获取和设置集合值的多功能方法
//如果值是函数，则可以选择执行值/ s
var access = function（elems，fn，key，value，chainable，emptyGet，raw）{
	var i = 0，
		len = elems.length，
		bulk = key == null;

	//设置许多值
	if（toType（key）===“object”）{
		chainable = true;
		for（i in key）{
			访问（elems，fn，i，key [i]，true，emptyGet，raw）;
		}

	//设置一个值
	} else if（value！== undefined）{
		chainable = true;

		if（！isFunction（value））{
			raw = true;
		}

		if（bulk）{

			//批量操作针对整个集合运行
			if（raw）{
				fn.call（elems，value）;
				fn = null;

			// ...执行函数值时除外
			} else {
				bulk = fn;
				fn = function（elem，key，value）{
					return bulk.call（jQuery（elem），value）;
				};
			}
		}

		if（fn）{
			for（; i <len; i ++）{
				FN（
					elems [i]，关键，原始？
					价值：
					value.call（elems [i]，i，fn（elems [i]，key））
				）;
			}
		}
	}

	if（chainable）{
		返回元素;
	}

	//获取
	if（bulk）{
		return fn.call（elems）;
	}

	返回len？fn（elems [0]，key）：emptyGet;
};


//匹配破折号的字符串
var rmsPrefix = / ^  -  ms- /，
	rdashAlpha = /  - （[az]）/ g;

//由camelCase用作replace（）的回调
function fcamelCase（all，letter）{
	return letter.toUpperCase（）;
}

//将虚线转换为camelCase; 由css和数据模块使用
//支持：IE <= 9  -  11，边缘12  -  15
//微软忘了驼背他们的供应商前缀（＃9572）
function camelCase（string）{
	return string.replace（rmsPrefix，“ms-”）.replace（rdashAlpha，fcamelCase）;
}
var acceptData = function（owner）{

	//仅接受：
	//  - 节点
	//  -  Node.ELEMENT_NODE
	//  -  Node.DOCUMENT_NODE
	//  - 对象
	// - 任何
	return owner.nodeType === 1 || owner.nodeType === 9 || ！（+ owner.nodeType）;
};




function Data（）{
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	cache：function（owner）{

		//检查所有者对象是否已有缓存
		var value = owner [this.expando];

		//如果没有，请创建一个
		if（！value）{
			value = {};

			//我们可以接受现代浏览器中非元素节点的数据，
			//但我们不应该看到＃8335。
			//始终返回一个空对象。
			if（acceptData（owner））{

				//如果它是一个不太可能被字符串化或循环的节点
				//使用普通作业
				if（owner.nodeType）{
					所有者[this.expando] =价值;

				//否则将其保存在非可枚举的属性中
				// configurable必须为true才能允许属性
				//删除数据时删除
				} else {
					Object.defineProperty（owner，this.expando，{
						价值：价值，
						可配置：true
					}）;
				}
			}
		}

		回报值;
	}，
	set：function（owner，data，value）{
		var prop，
			cache = this.cache（owner）;

		//句柄：[所有者，密钥，值] args
		//始终使用camelCase键（gh-2257）
		if（typeof data ===“string”）{
			cache [camelCase（data）] = value;

		//句柄：[所有者，{properties}] args
		} else {

			//将属性逐个复制到缓存对象
			for（数据中的道具）{
				cache [camelCase（prop）] = data [prop];
			}
		}
		返回缓存;
	}，
	get：function（owner，key）{
		返回键=== undefined？
			this.cache（所有者）：

			//始终使用camelCase键（gh-2257）
			所有者[this.expando] && owner [this.expando] [camelCase（key）];
	}，
	access：function（owner，key，value）{

		//在以下任何一种情况下：
		//
		// 1.未指定密钥
		// 2.指定了字符串键，但未提供任何值
		//
		//采用“读取”路径并允许get方法确定
		//要返回的值分别为：
		//
		// 1.整个缓存对象
		// 2.存储在密钥中的数据
		//
		if（key === undefined ||
				（（key && typeof key ===“string”）&& value === undefined））{

			return this.get（owner，key）;
		}

		//当键不是字符串，或者键和值都是
		//使用以下任一方式指定，设置或扩展（现有对象）：
		//
		// 1.属性的对象
		// 2.一个关键和价值
		//
		this.set（所有者，密钥，值）;

		//由于“set”路径可以有两个可能的入口点
		//根据采取的路径返回预期数据[*]
		返回值！== undefined？价值：关键;
	}，
	remove：function（owner，key）{
		var i，
			cache = owner [this.expando];

		if（cache === undefined）{
			返回;
		}

		if（key！== undefined）{

			//支持数组或空格分隔的键串
			if（Array.isArray（key））{

				//如果key是一个键数组......
				//我们总是设置camelCase键，所以删除它。
				key = key.map（camelCase）;
			} else {
				key = camelCase（key）;

				//如果存在带空格的键，请使用它。
				//否则，通过匹配非空格来创建数组
				key =缓存中的密钥？
					[关键]：
					（key.match（rnothtmlwhite）|| []）;
			}

			i = key.length;

			当我 -  ） {
				删除缓存[key [i]];
			}
		}

		//如果没有更多数据，请删除expando
		if（key === undefined || jQuery.isEmptyObject（cache））{

			//支持：Chrome <= 35  -  45
			//删除属性时Webkit和Blink性能会受到影响
			//来自DOM节点，因此设置为undefined
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607（错误限制）
			if（owner.nodeType）{
				所有者[this.expando] =未定义;
			} else {
				删除所有者[this.expando];
			}
		}
	}，
	hasData：function（owner）{
		var cache = owner [this.expando];
		return cache！== undefined &&！jQuery.isEmptyObject（cache）;
	}
};
var dataPriv = new Data（）;

var dataUser = new Data（）;



//实施摘要
//
// 1.使用1.9.x分支实现API表面和语义兼容性
// 2.通过减少存储来提高模块的可维护性
//单个机制的路径。
// 3.使用相同的单一机制来支持“私有”和“用户”数据。
// 4. _Never_将“私有”数据暴露给用户代码（TODO：Drop _data，_removeData）
// 5.避免在用户对象上公开实现细节（例如，expando属性）
// 6.为2014年的WeakMap实施升级提供明确的途径

var rbrace = / ^（？：\ {[\ w \ W] * \} | \ [[\ w \ W] * \]）$ /，
	rmultiDash = / [AZ] / g;

function getData（data）{
	if（data ===“true”）{
		返回true;
	}

	if（data ===“false”）{
		返回false;
	}

	if（data ===“null”）{
		return null;
	}

	//如果不更改字符串，则仅转换为数字
	if（data === + data +“”）{
		返回+数据;
	}

	if（rbrace.test（data））{
		return JSON.parse（data）;
	}

	返回数据;
}

function dataAttr（elem，key，data）{
	var name;

	//如果在内部找不到任何内容，请尝试获取任何内容
	//来自HTML5 data- *属性的数据
	if（data === undefined && elem.nodeType === 1）{
		name =“data-”+ key.replace（rmultiDash，“ -  $＆”）。toLowerCase（）;
		data = elem.getAttribute（name）;

		if（typeof data ===“string”）{
			尝试{
				data = getData（data）;
			} catch（e）{}

			//确保我们设置数据，以便以后不会更改
			dataUser.set（elem，key，data）;
		} else {
			data = undefined;
		}
	}
	返回数据;
}

jQuery.extend（{
	hasData：function（elem）{
		return dataUser.hasData（elem）|| dataPriv.hasData（elem）;
	}，

	data：function（elem，name，data）{
		return dataUser.access（elem，name，data）;
	}，

	removeData：function（elem，name）{
		dataUser.remove（elem，name）;
	}，

	// TODO：现在已经替换了对_data和_removeData的所有调用
	//直接调用dataPriv方法，可以不推荐使用这些方法。
	_data：function（elem，name，data）{
		return dataPriv.access（elem，name，data）;
	}，

	_removeData：function（elem，name）{
		dataPriv.remove（elem，name）;
	}
}）;

jQuery.fn.extend（{
	data：function（key，value）{
		var i，名称，数据，
			elem = this [0]，
			attrs = elem && elem.attributes;

		//获取所有值
		if（key === undefined）{
			if（this.length）{
				data = dataUser.get（elem）;

				if（elem.nodeType === 1 &&！dataPriv.get（elem，“hasDataAttrs”））{
					i = attrs.length;
					当我 -  ） {

						//支持：仅限IE 11
						// attrs元素可以为null（＃14894）
						if（attrs [i]）{
							name = attrs [i] .name;
							if（name.indexOf（“data-”）=== 0）{
								name = camelCase（name.slice（5））;
								dataAttr（elem，name，data [name]）;
							}
						}
					}
					dataPriv.set（elem，“hasDataAttrs”，true）;
				}
			}

			返回数据;
		}

		//设置多个值
		if（typeof key ===“object”）{
			return this.each（function（）{
				dataUser.set（this，key）;
			}）;
		}

		return access（this，function（value）{
			var数据;

			//调用jQuery对象（元素匹配）不为空
			//（因此在[0]处出现一个元素）和
			//`value`参数未定义。一个空的jQuery对象
			//将导致elem = this [0]的`undefined`
			//如果尝试读取数据缓存，则抛出异常。
			if（elem && value === undefined）{

				//尝试从缓存中获取数据
				//密钥将永远是数据中的camelCased
				data = dataUser.get（elem，key）;
				if（data！== undefined）{
					返回数据;
				}

				//尝试“发现”中的数据
				// HTML5自定义数据 -  * attrs
				data = dataAttr（elem，key）;
				if（data！== undefined）{
					返回数据;
				}

				//我们努力尝试，但数据不存在。
				返回;
			}

			//设置数据......
			this.each（function（）{

				//我们总是存储camelCased密钥
				dataUser.set（this，key，value）;
			}）;
		}，null，value，arguments.length> 1，null，true）;
	}，

	removeData：function（key）{
		return this.each（function（）{
			dataUser.remove（this，key）;
		}）;
	}
}）;


jQuery.extend（{
	queue：function（elem，type，data）{
		var queue;

		if（elem）{
			type =（type ||“fx”）+“queue”;
			queue = dataPriv.get（elem，type）;

			//如果这只是一次查找，可以通过快速退出来加速出队
			if（data）{
				if（！queue || Array.isArray（data））{
					queue = dataPriv.access（elem，type，jQuery.makeArray（data））;
				} else {
					queue.push（data）;
				}
			}
			返回队列|| [];
		}
	}，

	dequeue：function（elem，type）{
		type = type || “FX”;

		var queue = jQuery.queue（elem，type），
			startLength = queue.length，
			fn = queue.shift（），
			hooks = jQuery._queueHooks（elem，type），
			next = function（）{
				jQuery.dequeue（elem，type）;
			};

		//如果fx队列出列，请始终删除进度sentinel
		if（fn ===“inprogress”）{
			fn = queue.shift（）;
			startLength--;
		}

		if（fn）{

			//添加进度sentinel以防止fx队列进入
			//自动出列
			if（type ===“fx”）{
				queue.unshift（“inprogress”）;
			}

			//清除最后一个队列停止功能
			delete hooks.stop;
			fn.call（elem，next，hooks）;
		}

		if（！startLength && hooks）{
			hooks.empty.fire（）;
		}
	}，

	// not public  - 生成queueHooks对象，或返回当前对象
	_queueHooks：function（elem，type）{
		var key = type +“queueHooks”;
		return dataPriv.get（elem，key）|| dataPriv.access（elem，key，{
			empty：jQuery.Callbacks（“once memory”）。add（function（）{
				dataPriv.remove（elem，[type +“queue”，key]）;
			}）
		}）;
	}
}）;

jQuery.fn.extend（{
	queue：function（type，data）{
		var setter = 2;

		if（typeof type！==“string”）{
			data = type;
			type =“fx”;
			setter--;
		}

		if（arguments.length <setter）{
			return jQuery.queue（this [0]，type）;
		}

		返回数据=== undefined？
			这个 ：
			this.each（function（）{
				var queue = jQuery.queue（this，type，data）;

				//确保此队列的挂钩
				jQuery._queueHooks（this，type）;

				if（type ===“fx”&& queue [0]！==“inprogress”）{
					jQuery.dequeue（this，type）;
				}
			}）;
	}，
	dequeue：function（type）{
		return this.each（function（）{
			jQuery.dequeue（this，type）;
		}）;
	}，
	clearQueue：function（type）{
		return this.queue（type ||“fx”，[]）;
	}，

	//获取某个类型的队列时解析的承诺
	//被清空（默认情况下fx是类型）
	promise：function（type，obj）{
		var tmp，
			count = 1，
			defer = jQuery.Deferred（），
			elements = this，
			i = this.length，
			resolve = function（）{
				if（！（ -  count））{
					defer.resolveWith（elements，[elements]）;
				}
			};

		if（typeof type！==“string”）{
			obj = type;
			type = undefined;
		}
		type = type || “FX”;

		当我 -  ） {
			tmp = dataPriv.get（elements [i]，type +“queueHooks”）;
			if（tmp && tmp.empty）{
				计数++;
				tmp.empty.add（resolve）;
			}
		}
		解决（）;
		return defer.promise（obj）;
	}
}）;
var pnum =（/ [+  - ]？（？：[d *。*] \ d +（？：[eE] [+  - ]？\ d+ |）/）。source;

var rcssNum = new RegExp（“^（？:( [+  - ]）= |）（”+ pnum +“）（[az％] *）$”，“i”）;


var cssExpand = [“Top”，“Right”，“Bottom”，“Left”];

var documentElement = document.documentElement;



	var isAttached = function（elem）{
			return jQuery.contains（elem.ownerDocument，elem）;
		}，
		composed = {composed：true};

	//支持：IE 9  -  11 +，Edge 12  -  18 +，iOS 10.0  - 仅限10.2
	//在可能的情况下检查阴影DOM边界的附件（gh-3504）
	//支持：仅限iOS 10.0-10.2
	//早期的iOS 10版本支持`attachShadow`但不支持`getRootNode`，
	//导致错误 我们需要检查`getRootNode`。
	if（documentElement.getRootNode）{
		isAttached = function（elem）{
			返回jQuery.contains（elem.ownerDocument，elem）||
				elem.getRootNode（composition）=== elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function（elem，el）{

		// isHiddenWithinTree可能是从jQuery＃filter函数调用的;
		//在这种情况下，元素将是第二个参数
		elem = el || ELEM;

		//内联样式胜过所有
		return elem.style.display ===“none”||
			elem.style.display ===“”&&

			//否则，检查计算样式
			//支持：Firefox <= 43  -  45
			//断开连接的元素可以计算display：none，所以首先确认elem是
			//在文档中。
			isAttached（elem）&&

			jQuery.css（elem，“display”）===“none”;
	};

var swap = function（elem，options，callback，args）{
	var ret，name，
		old = {};

	//记住旧值，然后插入新值
	for（选项中的名称）{
		old [name] = elem.style [name];
		elem.style [name] = options [name];
	}

	ret = callback.apply（elem，args || []）;

	//恢复旧值
	for（选项中的名称）{
		elem.style [name] = old [name];
	}

	返回;
};




function adjustCSS（elem，prop，valueParts，tween）{
	var调整，规模，
		maxIterations = 20，
		currentValue =补间？
			function（）{
				return tween.cur（）;
			}：
			function（）{
				return jQuery.css（elem，prop，“”）;
			}，
		initial = currentValue（），
		unit = valueParts && valueParts [3] || （jQuery.cssNumber [prop]？“”：“px”），

		//潜在的单位不匹配需要起始值计算
		initialInUnit = elem.nodeType &&
			（jQuery.cssNumber [prop] || unit！==“px”&& + initial）&&
			rcssNum.exec（jQuery.css（elem，prop））;

	if（initialInUnit && initialInUnit [3]！== unit）{

		//支持：Firefox <= 54
		//将迭代目标值减半以防止来自CSS上限的干扰（gh-2144）
		initial = initial / 2;

		// jQuery.css报告的信任单位
		unit = unit || initialInUnit [3];

		//从非零起点迭代逼近
		initialInUnit = + initial || 1;

		while（maxIterations--）{

			//评估并更新我们的最佳猜测（加倍猜测为零）。
			//如果比例等于或超过1，则结束（使旧*新产品为非正数）。
			jQuery.style（elem，prop，initialInUnit + unit）;
			if（（1  -  scale）*（1  - （scale = currentValue（）/ initial || 0.5））<= 0）{
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style（elem，prop，initialInUnit + unit）;

		//确保我们稍后更新补间属性
		valueParts = valueParts || [];
	}

	if（valueParts）{
		initialInUnit = + initialInUnit || +初始|| 0;

		//如果指定，则应用相对偏移量（+ = /  -  =）
		adjust = valueParts [1]？
			initialInUnit +（valueParts [1] + 1）* valueParts [2]：
			+ valueParts [2];
		if（tween）{
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end =调整;
		}
	}
	返回调整;
}


var defaultDisplayMap = {};

function getDefaultDisplay（elem）{
	变温，
		doc = elem.ownerDocument，
		nodeName = elem.nodeName，
		display = defaultDisplayMap [nodeName];

	if（display）{
		返回显示;
	}

	temp = doc.body.appendChild（doc.createElement（nodeName））;
	display = jQuery.css（temp，“display”）;

	temp.parentNode.removeChild（temp）;

	if（display ===“none”）{
		display =“block”;
	}
	defaultDisplayMap [nodeName] = display;

	返回显示;
}

function showHide（elements，show）{
	var display，elem，
		values = []，
		index = 0，
		length = elements.length;

	//确定需要更改的元素的新显示值
	for（; index <length; index ++）{
		elem = elements [index];
		if（！elem.style）{
			继续;
		}

		display = elem.style.display;
		if（show）{

			//因为我们强制对级联隐藏元素进行可见性，所以立即（和慢）
			//在第一个循环中需要检查，除非我们有非空的显示值（或者
			//内联或即将恢复）
			if（display ===“none”）{
				values [index] = dataPriv.get（elem，“display”）|| 空值;
				if（！values [index]）{
					elem.style.display =“”;
				}
			}
			if（elem.style.display ===“”&& isHiddenWithinTree（elem））{
				values [index] = getDefaultDisplay（elem）;
			}
		} else {
			if（display！==“none”）{
				values [index] =“none”;

				//记住我们要覆盖的东西
				dataPriv.set（elem，“display”，display）;
			}
		}
	}

	//在第二个循环中设置元素的显示以避免不断的回流
	for（index = 0; index <length; index ++）{
		if（values [index]！= null）{
			elements [index] .style.display = values [index];
		}
	}

	返回元素;
}

jQuery.fn.extend（{
	show：function（）{
		return showHide（this，true）;
	}，
	hide：function（）{
		return showHide（this）;
	}，
	toggle：function（state）{
		if（typeof state ===“boolean”）{
			返回状态？this.show（）：this.hide（）;
		}

		return this.each（function（）{
			if（isHiddenWithinTree（this））{
				jQuery（this）.show（）;
			} else {
				jQuery（this）.hide（）;
			}
		}）;
	}
}）;
var rcheckableType =（/ ^（？：checkbox | radio）$ / i）;

var rtagName =（/ <（[az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *）/ i）;

var rscriptType =（/ ^ $ | ^ module $ | \ /（？：java | ecma）script / i）;



//我们必须关闭这些标签才能支持XHTML（＃13200）
var wrapMap = {

	//支持：IE <= 9
	选项：[1，“<select multiple ='multiple'>”，“</ select>”]，

	// XHTML解析器不会神奇地插入元素
	//标记汤解析器的方式相同。所以我们不能缩短
	//通过省略<tbody>或其他必需元素。
	thead：[1，“<table>”，“</ table>”]，
	col：[2，“<table> <colgroup>”，“</ colgroup> </ table>”]，
	tr：[2，“<table> <tbody>”，“</ tbody> </ table>”]，
	td：[3，“<table> <tbody> <tr>”，“</ tr> </ tbody> </ table>”]，

	_default：[0，“”，“”]
};

//支持：IE <= 9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll（context，tag）{

	//支持：IE <= 9  -  11
	//使用typeof来避免宿主对象上的零参数方法调用（＃15151）
	var ret;

	if（typeof context.getElementsByTagName！==“undefined”）{
		ret = context.getElementsByTagName（tag ||“*”）;

	} else if（typeof context.querySelectorAll！==“undefined”）{
		ret = context.querySelectorAll（tag ||“*”）;

	} else {
		ret = [];
	}

	if（tag === undefined || tag && nodeName（context，tag））{
		return jQuery.merge（[context]，ret）;
	}

	返回;
}


//将脚本标记为已经过评估
function setGlobalEval（elems，refElements）{
	var i = 0，
		l = elems.length;

	for（; i <l; i ++）{
		dataPriv.set（
			elems [i]，
			“globalEval”
			！refElements || dataPriv.get（refElements [i]，“globalEval”）
		）;
	}
}


var rhtml = / <|＆＃？\ w +; /;

function buildFragment（elems，context，scripts，selection，ignored）{
	var elem，tmp，tag，wrap，attached，j，
		fragment = context.createDocumentFragment（），
		nodes = []，
		i = 0，
		l = elems.length;

	for（; i <l; i ++）{
		elem = elems [i];

		if（elem || elem === 0）{

			//直接添加节点
			if（toType（elem）===“object”）{

				//支持：仅限Android <= 4.0，仅限PhantomJS 1
				// push.apply（_，arraylike）抛出古老的WebKit
				jQuery.merge（nodes，elem.nodeType？[elem]：elem）;

			//将非html转换为文本节点
			} else if（！rhtml.test（elem））{
				nodes.push（context.createTextNode（elem））;

			//将html转换为DOM节点
			} else {
				tmp = tmp || fragment.appendChild（context.createElement（“div”））;

				//反序列化标准表示
				tag =（rtagName.exec（elem）|| [“”，“”]）[1] .toLowerCase（）;
				wrap = wrapMap [tag] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter（elem）+ wrap [2];

				//通过包装器下降到正确的内容
				j = wrap [0];
				while（j--）{
					tmp = tmp.lastChild;
				}

				//支持：仅限Android <= 4.0，仅限PhantomJS 1
				// push.apply（_，arraylike）抛出古老的WebKit
				jQuery.merge（nodes，tmp.childNodes）;

				//记住顶级容器
				tmp = fragment.firstChild;

				//确保创建的节点是孤立的（＃12392）
				tmp.textContent =“”;
			}
		}
	}

	//从片段中删除包装器
	fragment.textContent =“”;

	i = 0;
	while（（elem = nodes [i ++]））{

		//跳过上下文集合中已有的元素（trac-4087）
		if（selection && jQuery.inArray（elem，selection）> -1）{
			if（ignored）{
				ignored.push（elem）;
			}
			继续;
		}

		attached = isAttached（elem）;

		//附加到片段
		tmp = getAll（fragment.appendChild（elem），“script”）;

		//保留脚本评估历史记录
		if（附）{
			setGlobalEval（tmp）;
		}

		//捕获可执行文件
		if（scripts）{
			j = 0;
			while（（elem = tmp [j ++]））{
				if（rscriptType.test（elem.type ||“”））{
					scripts.push（elem）;
				}
			}
		}
	}

	返回片段;
}


（function（）{
	var fragment = document.createDocumentFragment（），
		div = fragment.appendChild（document.createElement（“div”）），
		input = document.createElement（“input”）;

	//支持：仅限Android 4.0  -  4.3
	//如果设置了名称，检查状态是否丢失（＃11217）
	//支持：Windows Web Apps（WWA）
	//`name`和`type`必须使用.setAttribute for WWA（＃14901）
	input.setAttribute（“type”，“radio”）;
	input.setAttribute（“checked”，“checked”）;
	input.setAttribute（“name”，“t”）;

	div.appendChild（输入）;

	//支持：Android <= 4.1
	//较旧的WebKit不会在片段中正确克隆已检查状态
	support.checkClone = div.cloneNode（true）.cloneNode（true）.lastChild.checked;

	//支持：IE <= 11
	//确保正确克隆textarea（和复选框）defaultValue
	div.innerHTML =“<textarea> x </ textarea>”;
	support.noCloneChecked = !! div.cloneNode（true）.lastChild.defaultValue;
}）（）;


VAR
	rkeyEvent = / ^ key /，
	rmouseEvent = / ^（？：mouse | pointer | contextmenu | drag | drop）| click /，
	rtypenamespace = /^([^.]*)(?:\。（。+）|）/;

function returnTrue（）{
	返回true;
}

function returnFalse（）{
	返回false;
}

//支持：IE <= 9  -  11+
// focus（）和blur（）是异步的，除非它们是no-op。
//所以当元素已经激活时，期望焦点同步，
//当元素尚未激活时，模糊为同步。
//（焦点和模糊在其他支持的浏览器中始终是同步的，
//这只是定义我们何时可以依赖它）。
function expectSync（elem，type）{
	return（elem === safeActiveElement（））===（type ===“focus”）;
}

//支持：IE <= 9
//访问document.activeElement可能会意外抛出
// https://bugs.jquery.com/ticket/13393
function safeActiveElement（）{
	尝试{
		return document.activeElement;
	} catch（err）{}
}

函数on（elem，types，selector，data，fn，one）{
	var origFn，type;

	//类型可以是类型/处理程序的映射
	if（typeof types ===“object”）{

		//（类型 - 对象，选择器，数据）
		if（typeof selector！==“string”）{

			//（类型 - 对象，数据）
			data = data || 选择;
			selector = undefined;
		}
		for（type in types）{
			on（elem，type，selector，data，types [type]，one）;
		}
		返回元素;
	}

	if（data == null && fn == null）{

		//（类型，fn）
		fn =选择器;
		data = selector = undefined;
	} else if（fn == null）{
		if（typeof selector ===“string”）{

			//（类型，选择器，fn）
			fn =数据;
			data = undefined;
		} else {

			//（类型，数据，fn）
			fn =数据;
			data = selector;
			selector = undefined;
		}
	}
	if（fn === false）{
		fn = returnFalse;
	} else if（！fn）{
		返回元素;
	}

	if（one === 1）{
		origFn = fn;
		fn = function（event）{

			//可以使用空集，因为事件包含信息
			jQuery（）。off（event）;
			return origFn.apply（this，arguments）;
		};

		//使用相同的guid，以便调用者可以使用origFn删除
		fn.guid = origFn.guid || （origFn.guid = jQuery.guid ++）;
	}
	return elem.each（function（）{
		jQuery.event.add（this，types，fn，data，selector）;
	}）;
}

/ *
 * Helper功能用于管理事件 - 不是公共接口的一部分。
 *为Dean Edwards的addEvent库提供了许多想法的道具。
 * /
jQuery.event = {

	全球：{}，

	add：function（elem，types，handler，data，selector）{

		var handleObjIn，eventHandle，tmp，
			events，t，handleObj，
			特殊，处理程序，类型，命名空间，origType，
			elemData = dataPriv.get（elem）;

		//不要将事件附加到noData或text / comment节点（但允许普通对象）
		if（！elemData）{
			返回;
		}

		//调用者可以传入自定义数据的对象来代替处理程序
		if（handler.handler）{
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		//确保无效选择器在附加时抛出异常
		//如果elem是非元素节点（例如，文档），则对documentElement求值
		if（selector）{
			jQuery.find.matchesSelector（documentElement，selector）;
		}

		//确保处理程序具有唯一ID，以后用于查找/删除它
		if（！handler.guid）{
			handler.guid = jQuery.guid ++;
		}

		//初始化元素的事件结构和主处理程序，如果这是第一个
		if（！（events = elemData.events））{
			events = elemData.events = {};
		}
		if（！（eventHandle = elemData.handle））{
			eventHandle = elemData.handle = function（e）{

				//丢弃jQuery.event.trigger（）和的第二个事件
				//在页面卸载后调用事件时
				return typeof jQuery！==“undefined”&& jQuery.event.triggered！== e.type？
					jQuery.event.dispatch.apply（elem，arguments）：undefined;
			};
		}

		//处理由空格分隔的多个事件
		types =（types ||“”）.match（rnothtmlwhite）|| [“”];
		t = types.length;
		while（t--）{
			tmp = rtypenamespace.exec（types [t]）|| [];
			type = origType = tmp [1];
			namespaces =（tmp [2] ||“”）。split（“。”）。sort（）;

			//那里*必须*是一个类型，没有附加名称空间的处理程序
			if（！type）{
				继续;
			}

			//如果事件更改其类型，请使用特殊事件处理程序来更改类型
			special = jQuery.event.special [type] || {};

			//如果定义了选择器，则确定特殊事件api类型，否则给定类型
			type =（selector？special.delegateType：special.bindType）|| 类型;

			//根据新重置类型更新特殊
			special = jQuery.event.special [type] || {};

			// handleObj被传递给所有事件处理程序
			handleObj = jQuery.extend（{
				类型：类型，
				origType：origType，
				数据：数据，
				handler：handler，
				guid：handler.guid，
				选择器：选择器，
				needsContext：selector && jQuery.expr.match.needsContext.test（selector），
				namespace：namespaces.join（“。”）
			}，handleObjIn）;

			//如果我们是第一个，请启动事件处理程序队列
			if（！（handlers = events [type]））{
				handlers = events [type] = [];
				handlers.delegateCount = 0;

				//如果特殊事件处理程序返回false，则仅使用addEventListener
				if（！special.setup ||
					special.setup.call（elem，data，namespaces，eventHandle）=== false）{

					if（elem.addEventListener）{
						elem.addEventListener（type，eventHandle）;
					}
				}
			}

			if（special.add）{
				special.add.call（elem，handleObj）;

				if（！handleObj.handler.guid）{
					handleObj.handler.guid = handler.guid;
				}
			}

			//添加到元素的处理程序列表，在前面委托
			if（selector）{
				handlers.splice（handlers.delegateCount ++，0，handleObj）;
			} else {
				handlers.push（handleObj）;
			}

			//跟踪曾经使用过哪些事件，以进行事件优化
			jQuery.event.global [type] = true;
		}

	}，

	//从元素中分离事件或事件集
	remove：function（elem，types，handler，selector，mappedTypes）{

		var j，origCount，tmp，
			events，t，handleObj，
			特殊，处理程序，类型，命名空间，origType，
			elemData = dataPriv.hasData（elem）&& dataPriv.get（elem）;

		if（！elemData ||！（events = elemData.events））{
			返回;
		}

		//对于类型中的每个type.namespace一次; 类型可以省略
		types =（types ||“”）.match（rnothtmlwhite）|| [“”];
		t = types.length;
		while（t--）{
			tmp = rtypenamespace.exec（types [t]）|| [];
			type = origType = tmp [1];
			namespaces =（tmp [2] ||“”）。split（“。”）。sort（）;

			//取消绑定元素的所有事件（在此命名空间上，如果提供）
			if（！type）{
				for（输入事件）{
					jQuery.event.remove（elem，type + types [t]，handler，selector，true）;
				}
				继续;
			}

			special = jQuery.event.special [type] || {};
			type =（selector？special.delegateType：special.bindType）|| 类型;
			处理程序=事件[类型] || [];
			tmp = tmp [2] &&
				new RegExp（“（^ | \\。）”+ namespaces.join（“\\。（？：。* \\。|）”）+“（\\。| $）”）;

			//删除匹配的事件
			origCount = j = handlers.length;
			while（j--）{
				handleObj = handlers [j];

				if（（mappedTypes || origType === handleObj.origType）&&
					（！handler || handler.guid === handleObj.guid）&&
					（！tmp || tmp.test（handleObj.namespace））&&
					（！selector || selector === handleObj.selector ||
						selector ===“**”&& handleObj.selector））{
					handlers.splice（j，1）;

					if（handleObj.selector）{
						handlers.delegateCount--;
					}
					if（special.remove）{
						special.remove.call（elem，handleObj）;
					}
				}
			}

			//删除通用事件处理程序，如果我们删除了某些内容并且不再存在处理程
			//（避免在删除特殊事件处理程序期间无限递归的可能性）
			if（origCount &&！handlers.length）{
				if（！special.teardown ||
					special.teardown.call（elem，namespaces，elemData.handle）=== false）{

					jQuery.removeEvent（elem，type，elemData.handle）;
				}

				删除事件[type];
			}
		}

		//删除数据和expando（如果不再使用它）
		if（jQuery.isEmptyObject（events））{
			dataPriv.remove（elem，“handle events”）;
		}
	}，

	dispatch：function（nativeEvent）{

		//从本机事件对象创建一个可写的jQuery.Event
		var event = jQuery.event.fix（nativeEvent）;

		var i，j，ret，matched，handleObj，handlerQueue，
			args = new Array（arguments.length），
			handlers =（dataPriv.get（this，“events”）|| {}）[event.type] || []，
			special = jQuery.event.special [event.type] || {};

		//使用fix-ed jQuery.Event而不是（只读）本机事件
		args [0] =事件;

		for（i = 1; i <arguments.length; i ++）{
			args [i] =参数[i];
		}

		event.delegateTarget = this;

		//为映射类型调用preDispatch挂钩，如果需要，让它保释
		if（special.preDispatch && special.preDispatch.call（this，event）=== false）{
			返回;
		}

		//确定处理程序
		handlerQueue = jQuery.event.handlers.call（this，event，handlers）;

		//先运行代理; 他们可能想停止在我们身下传播
		i = 0;
		while（（matched = handlerQueue [i ++]）&&！event.isPropagationStopped（））{
			event.currentTarget = matched.elem;

			j = 0;
			while（（handleObj = matched.handlers [j ++]）&&
				！event.isImmediatePropagationStopped（））{

				//如果事件是命名空间，则只有在调用时才调用每个处理程序
				//特殊通用或其名称空间是事件的超集。
				if（！event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test（handleObj.namespace））{

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret =（（jQuery.event.special [handleObj.origType] || {}）。handlele ||
						handleObj.handler）.apply（matched.elem，args）;

					if（ret！== undefined）{
						if（（event.result = ret）=== false）{
							event.preventDefault（）;
							event.stopPropagation（）;
						}
					}
				}
			}
		}

		//为映射类型调用postDispatch挂钩
		if（special.postDispatch）{
			special.postDispatch.call（this，event）;
		}

		return event.result;
	}，

	处理程序：function（event，handlers）{
		var i，handleObj，sel，matchedHandlers，matchedSelectors，
			handlerQueue = []，
			delegateCount = handlers.delegateCount，
			cur = event.target;

		//查找委托处理程序
		if（delegateCount &&

			//支持：IE <= 9
			//黑洞SVG <use>实例树（trac-13180）
			cur.nodeType &&

			//支持：Firefox <= 42
			//抑制指示非主指针按钮的规范违规点击（trac-3861）
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			//支持：仅限IE 11
			// ...但不是箭头键“点击”无线电输入，可以有“按钮”-1（gh-2343）
			！（event.type ===“click”&& event.button> = 1））{

			for（; cur！== this; cur = cur.parentNode || this）{

				//不要检查非元素（＃13208）
				//不要处理已禁用元素的点击次数（＃6911，＃8165，＃11382，＃11764）
				if（cur.nodeType === 1 &&！（event.type ===“click”&& cur.disabled === true））{
					matchedHandlers = [];
					matchedSelectors = {};
					for（i = 0; i <delegateCount; i ++）{
						handleObj = handlers [i];

						//不要与Object.prototype属性冲突（＃13203）
						sel = handleObj.selector +“”;

						if（matchedSelectors [sel] === undefined）{
							matchedSelectors [sel] = handleObj.needsContext？
								jQuery（sel，this）.index（cur）> -1：
								jQuery.find（sel，this，null，[cur]）。length;
						}
						if（matchedSelectors [sel]）{
							matchedHandlers.push（handleObj）;
						}
					}
					if（matchedHandlers.length）{
						handlerQueue.push（{elem：cur，handlers：matchedHandlers}）;
					}
				}
			}
		}

		//添加剩余的（直接绑定的）处理程序
		cur = this;
		if（delegateCount <handlers.length）{
			handlerQueue.push（{elem：cur，handlers：handlers.slice（delegateCount）}）;
		}

		return handlerQueue;
	}，

	addProp：function（name，hook）{
		Object.defineProperty（jQuery.Event.prototype，name，{
			可枚举的：是的，
			可配置：true，

			get：isFunction（hook）？
				function（）{
					if（this.originalEvent）{
							return hook（this.originalEvent）;
					}
				}：
				function（）{
					if（this.originalEvent）{
							return this.originalEvent [name];
					}
				}，

			set：function（value）{
				Object.defineProperty（this，name，{
					可枚举的：是的，
					可配置：true，
					可写的：真的，
					价值：价值
				}）;
			}
		}）;
	}，

	修复：function（originalEvent）{
		return originalEvent [jQuery.expando]？
			originalEvent：
			new jQuery.Event（originalEvent）;
	}，

	特别：{
		load：{

			//阻止触发的image.load事件从冒泡到window.load
			noBubble：是的
		}，
		点击：{

			//利用本机事件确保可检查输入的正确状态
			setup：function（data）{

				//为了与_default相互压缩，用本地var替换`this`访问。
				//`|| data`是死代码，仅用于通过缩小来保存变量。
				var el = this || 数据;

				//声明第一个处理程序
				if（rcheckableType.test（el.type）&&
					el.click && nodeName（el，“input”））{

					// dataPriv.set（el，“click”，...）
					leverageNative（el，“click”，returnTrue）;
				}

				//返回false以允许调用者进行正常处理
				返回false;
			}，
			trigger：function（data）{

				//为了与_default相互压缩，用本地var替换`this`访问。
				//`|| data`是死代码，仅用于通过缩小来保存变量。
				var el = this || 数据;

				//在触发点击之前强制设置
				if（rcheckableType.test（el.type）&&
					el.click && nodeName（el，“input”））{

					leverageNative（el，“click”）;
				}

				//返回非false以允许正常的事件路径传播
				返回true;
			}，

			//对于跨浏览器的一致性，请在链接上禁用本机.click（）
			//如果我们当前在杠杆式本机事件堆栈中，也要阻止它
			_default：function（event）{
				var target = event.target;
				return rcheckableType.test（target.type）&&
					target.click && nodeName（target，“input”）&&
					dataPriv.get（target，“click”）||
					nodeName（target，“a”）;
			}
		}，

		beforeunload：{
			postDispatch：function（event）{

				//支持：Firefox 20+
				//如果未设置returnValue字段，Firefox不会发出警报。
				if（event.result！== undefined && event.originalEvent）{
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

//确保存在处理手动触发的事件侦听器
//通过中断进度直到重新响应的合成事件
// *直接触发的本机*事件，确保状态更改
//在调用其他侦听器之前已经发生过。
function leverageNative（el，type，expectSync）{

	//缺少expectSync表示触发器调用，必须通过jQuery.event.add强制设置
	if（！expectSync）{
		if（dataPriv.get（el，type）=== undefined）{
			jQuery.event.add（el，type，returnTrue）;
		}
		返回;
	}

	//将控制器注册为所有事件命名空间的特殊通用处理程序
	dataPriv.set（el，type，false）;
	jQuery.event.add（el，type，{
		namespace：false，
		handler：function（event）{
			var notAsync，结果，
				saved = dataPriv.get（this，type）;

			if（（event.isTrigger＆1）&& this [type]）{

				//中断处理外部合成.trigger（）ed事件
				//在这种情况下，保存的数据应该是false，但可能是一个剩余的捕获对象
				//来自异步本机处理程序（gh-4350）
				if（！saved.length）{

					//存储在处理内部本机事件时使用的参数
					//总会有至少一个参数（一个事件对象），所以这个数组
					//不会与剩余的捕获对象混淆。
					saved = slice.call（arguments）;
					dataPriv.set（this，type，saved）;

					//触发本机事件并捕获其结果
					//支持：IE <= 9  -  11+
					// focus（）和blur（）是异步的
					notAsync = expectSync（this，type）;
					这个类型 ]（）;
					result = dataPriv.get（this，type）;
					if（已保存！==结果|| notAsync）{
						dataPriv.set（this，type，false）;
					} else {
						result = {};
					}
					if（已保存！==结果）{

						//取消外部合成事件
						event.stopImmediatePropagation（）;
						event.preventDefault（）;
						return result.value;
					}

				//如果这是具有冒泡代理的事件的内部合成事件
				//（焦点或模糊），假设代理已经从触发传播
				//本机事件，并防止在这里再次发生。
				//这在技术上得到了错误的命令wrt到`.trigger（）`（其中
				// bubbling surrogate在*非冒泡的基础之后传播*，但似乎
				//比复制更糟糕。
				} else if（（jQuery.event.special [type] || {}）。delegateType）{
					event.stopPropagation（）;
				}

			//如果这是上面触发的本机事件，那么现在一切都井井有条
			//使用原始参数触发内部合成事件
			} else if（saved.length）{

				// ...并捕获结果
				dataPriv.set（this，type，{
					value：jQuery.event.trigger（

						//支持：IE <= 9  -  11+
						//使用原型扩展以重置上面的stopImmediatePropagation（）
						jQuery.extend（saved [0]，jQuery.Event.prototype），
						saved.slice（1），
						这个
					）
				}）;

				//中止处理本机事件
				event.stopImmediatePropagation（）;
			}
		}
	}）;
}

jQuery.removeEvent = function（elem，type，handle）{

	//普通对象需要这个“if”
	if（elem.removeEventListener）{
		elem.removeEventListener（type，handle）;
	}
};

jQuery.Event = function（src，props）{

	//允许没有'new'关键字的实例化
	if（！（此实例为jQuery.Event））{
		返回新的jQuery.Event（src，props）;
	}

	//事件对象
	if（src && src.type）{
		this.originalEvent = src;
		this.type = src.type;

		//冒泡文档的事件可能已标记为已阻止
		//由树下面的处理程序组成; 反映正确的价值。
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				//支持：Android <= 2.3
				src.returnValue === false？
			returnTrue：
			returnFalse;

		//创建目标属性
		//支持：Safari <= 6  -  7
		//目标不应该是文本节点（＃504，＃13143）
		this.target =（src.target && src.target.nodeType === 3）？
			src.target.parentNode：
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// 事件类型
	} else {
		this.type = src;
	}

	//将显式提供的属性放到事件对象上
	if（道具）{
		jQuery.extend（this，props）;
	}

	//如果传入的事件没有时间戳，请创建一个时间戳
	this.timeStamp = src && src.timeStamp || Date.now（）;

	//将其标记为已修复
	这[jQuery.expando] = true;
};

// jQuery.Event基于ECMAScript语言绑定指定的DOM3事件
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	构造函数：jQuery.Event，
	isDefaultPrevented：returnFalse，
	isPropagationStopped：returnFalse，
	isImmediatePropagationStopped：returnFalse，
	isSimulated：false，

	preventDefault：function（）{
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if（e &&！this.isSimulated）{
			e.preventDefault（）;
		}
	}，
	stopPropagation：function（）{
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if（e &&！this.isSimulated）{
			e.stopPropagation（）;
		}
	}，
	stopImmediatePropagation：function（）{
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if（e &&！this.isSimulated）{
			e.stopImmediatePropagation（）;
		}

		this.stopPropagation（）;
	}
};

//包括所有常见的事件道具，包括KeyEvent和MouseEvent特定的道具
jQuery.each（{
	altKey：是的，
	气泡：真的，
	可取消的：是的，
	changedTouches：是的，
	ctrlKey：是的，
	细节：是的，
	eventPhase：是的，
	metaKey：是的，
	pageX：是的，
	pageY：是的，
	shiftKey：是的，
	观点：是的，
	“char”：是的，
	代码：true，
	charCode：是的，
	关键：是的，
	keyCode：true，
	按钮：是的，
	按钮：是的，
	clientX：是的，
	clientY：是的，
	offsetX：true，
	offsetY：true，
	pointerId：true，
	pointerType：true，
	screenX：是的，
	screenY：是的，
	targetTouches：是的，
	toElement：是的，
	接触：真的，

	其中：function（event）{
		var button = event.button;

		//添加关键事件
		if（event.which == null && rkeyEvent.test（event.type））{
			return event.charCode！= null？event.charCode：event.keyCode;
		}

		//添加点击：1 === left; 2 ===中; 3 ===对
		if（！event.which && button！== undefined && rmouseEvent.test（event.type））{
			if（button＆1）{
				返回1;
			}

			if（button＆2）{
				返回3;
			}

			if（button＆4）{
				返回2;
			}

			返回0;
		}

		return event.which;
	}
，jQuery.event.addProp）;

jQuery.each（{focus：“focusin”，blur：“focusout”}，function（type，delegateType）{
	jQuery.event.special [type] = {

		//如果可能，使用原生事件，使模糊/焦点序列正确
		setup：function（）{

			//声明第一个处理程序
			// dataPriv.set（this，“focus”，...）
			// dataPriv.set（this，“blur”，...）
			leverageNative（this，type，expectSync）;

			//返回false以允许调用者进行正常处理
			返回false;
		}，
		trigger：function（）{

			//在触发前强制设置
			leverageNative（this，type）;

			//返回非false以允许正常的事件路径传播
			返回true;
		}，

		delegateType：delegateType
	};
}）;

//使用鼠标悬停/退出和事件时间检查创建鼠标中心/离开事件
//以便事件委托在jQuery中工作。
//对pointerenter / pointerleave和pointerover / pointerout执行相同操作
//
//支持：仅限Safari 7
// Safari经常发送mouseenter; 看到：
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
//用于描述错误（它也存在于较旧的Chrome版本中）。
jQuery.each（{
	mouseenter：“mouseover”，
	mouseleave：“mouseout”，
	pointerenter：“指针”，
	pointerleave：“指针”
}，function（orig，fix）{
	jQuery.event.special [orig] = {
		delegateType：修复，
		bindType：fix，

		handle：function（event）{
			var ret，
				target = this，
				related = event.relatedTarget，
				handleObj = event.handleObj;

			//对于mouseenter / leave调用处理程序（如果相关）在目标之外。
			//注意：如果鼠标离开/进入浏览器窗口，则无相关目标
			if（！related ||（related！== target &&！jQuery.contains（target，related）））{
				event.type = handleObj.origType;
				ret = handleObj.handler.apply（this，arguments）;
				event.type = fix;
			}
			返回;
		}
	};
}）;

jQuery.fn.extend（{

	on：function（types，selector，data，fn）{
		返回（this，types，selector，data，fn）;
	}，
	一：函数（类型，选择器，数据，fn）{
		return on（this，types，selector，data，fn，1）;
	}，
	off：function（types，selector，fn）{
		var handleObj，type;
		if（types && types.preventDefault && types.handleObj）{

			//（event）调度jQuery.Event
			handleObj = types.handleObj;
			jQuery（types.delegateTarget）.off（
				handleObj.namespace？
					handleObj.origType +“。” + handleObj.namespace：
					handleObj.origType，
				handleObj.selector，
				handleObj.handler
			）;
			归还这个;
		}
		if（typeof types ===“object”）{

			//（types-object [，selector]）
			for（type in types）{
				this.off（type，selector，types [type]）;
			}
			归还这个;
		}
		if（selector === false || typeof selector ===“function”）{

			//（类型[，fn]）
			fn =选择器;
			selector = undefined;
		}
		if（fn === false）{
			fn = returnFalse;
		}
		return this.each（function（）{
			jQuery.event.remove（this，types，fn，selector）;
		}）;
	}
}）;


VAR

	/ * eslint-disable max-len * /

	//请参阅https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = / <（？！area | br | col | embed | hr | img | input | link | meta | param）（（[az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *）[^>] *）\ /> / GI，

	/ * eslint-enable * /

	//支持：IE <= 10  -  11，仅限Edge 12  -  13
	//在IE / Edge中使用正则表达式组会导致严重的减速。
	//请参阅https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = / <script | <style | <link / i，

	// checked =“选中”或选中
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = / ^ \ s * <！（？：\ [CDATA \ [|  - ）|（？：\] \] |  - ）> \ s * $ / g;

//在其父表上首选tbody以包含新行
function manipulationTarget（elem，content）{
	if（nodeName（elem，“table”）&&
		nodeName（content.nodeType！== 11？content：content.firstChild，“tr”））{

		返回jQuery（elem）.children（“tbody”）[0] || ELEM;
	}

	返回元素;
}

//替换/恢复脚本元素的type属性以进行安全的DOM操作
function disableScript（elem）{
	elem.type =（elem.getAttribute（“type”）！== null）+“/”+ elem.type;
	返回元素;
}
function restoreScript（elem）{
	if（（elem.type ||“”）.slice（0,5）===“true /”）{
		elem.type = elem.type.slice（5）;
	} else {
		elem.removeAttribute（“type”）;
	}

	返回元素;
}

function cloneCopyEvent（src，dest）{
	var i，l，type，pdataOld，pdataCur，udataOld，udataCur，events;

	if（dest.nodeType！== 1）{
		返回;
	}

	// 1.复制私人数据：事件，处理程序等
	if（dataPriv.hasData（src））{
		pdataOld = dataPriv.access（src）;
		pdataCur = dataPriv.set（dest，pdataOld）;
		events = pdataOld.events;

		if（events）{
			删除pdataCur.handle;
			pdataCur.events = {};

			for（输入事件）{
				for（i = 0，l = events [type] .length; i <l; i ++）{
					jQuery.event.add（dest，type，events [type] [i]）;
				}
			}
		}
	}

	// 2.复制用户数据
	if（dataUser.hasData（src））{
		udataOld = dataUser.access（src）;
		udataCur = jQuery.extend（{}，udataOld）;

		dataUser.set（dest，udataCur）;
	}
}

//修复IE错误，请参阅支持测试
function fixInput（src，dest）{
	var nodeName = dest.nodeName.toLowerCase（）;

	//无法保持克隆复选框或单选按钮的已检查状态。
	if（nodeName ===“input”&& rcheckableType.test（src.type））{
		dest.checked = src.checked;

	//克隆选项时，无法将所选选项返回到默认选定状态
	} else if（nodeName ===“input”|| nodeName ===“textarea”）{
		dest.defaultValue = src.defaultValue;
	}
}

function domManip（collection，args，callback，ignored）{

	//展平任何嵌套数组
	args = concat.apply（[]，args）;

	var片段，第一个，脚本，hasScripts，node，doc，
		i = 0，
		l = collection.length，
		iNoClone = l  -  1，
		value = args [0]，
		valueIsFunction = isFunction（value）;

	//我们无法在WebKit中克隆包含checked的节点片段
	if（valueIsFunction ||
			（l> 1 && typeof value ===“string”&&
				！support.checkClone && rchecked.test（value）））{
		return collection.each（function（index）{
			var self = collection.eq（index）;
			if（valueIsFunction）{
				args [0] = value.call（this，index，self.html（））;
			}
			domManip（自我，args，回调，被忽略）;
		}）;
	}

	if（l）{
		fragment = buildFragment（args，collection [0] .ownerDocument，false，collection，ignored）;
		first = fragment.firstChild;

		if（fragment.childNodes.length === 1）{
			fragment = first;
		}

		//需要新内容或对被忽略元素感兴趣才能调用回调
		if（first || ignored）{
			scripts = jQuery.map（getAll（fragment，“script”），disableScript）;
			hasScripts = scripts.length;

			//将原始片段用于最后一项
			//而不是第一个，因为它可以结束
			//在某些情况下被错误地清空（＃8070）。
			for（; i <l; i ++）{
				node = fragment;

				if（i！== iNoClone）{
					node = jQuery.clone（node，true，true）;

					//保留对克隆脚本的引用，以便以后恢复
					if（hasScripts）{

						//支持：仅限Android <= 4.0，仅限PhantomJS 1
						// push.apply（_，arraylike）抛出古老的WebKit
						jQuery.merge（scripts，getAll（node，“script”））;
					}
				}

				callback.call（collection [i]，node，i）;
			}

			if（hasScripts）{
				doc = scripts [scripts.length  -  1] .ownerDocument;

				//重新启用脚本
				jQuery.map（scripts，restoreScript）;

				//在第一次文档插入时评估可执行脚本
				for（i = 0; i <hasScripts; i ++）{
					node = scripts [i];
					if（rscriptType.test（node.type ||“”）&&
						！dataPriv.access（node，“globalEval”）&&
						jQuery.contains（doc，node））{

						if（node.src &&（node.type ||“”）。toLowerCase（）！==“module”）{

							//可选的AJAX依赖项，但如果不存在则不会运行脚本
							if（jQuery._evalUrl &&！node.noModule）{
								jQuery._evalUrl（node.src，{
									nonce：node.nonce || node.getAttribute（“nonce”）
								}）;
							}
						} else {
							DOMEval（node.textContent.replace（rcleanScript，“”），node，doc）;
						}
					}
				}
			}
		}
	}

	回收;
}

function remove（elem，selector，keepData）{
	var节点，
		nodes = selector？jQuery.filter（selector，elem）：elem，
		i = 0;

	for（;（node = nodes [i]）！= null; i ++）{
		if（！keepData && node.nodeType === 1）{
			jQuery.cleanData（getAll（node））;
		}

		if（node.parentNode）{
			if（keepData && isAttached（node））{
				setGlobalEval（getAll（node，“script”））;
			}
			node.parentNode.removeChild（node）;
		}
	}

	返回元素;
}

jQuery.extend（{
	htmlPrefilter：function（html）{
		return html.replace（rxhtmlTag，“<$ 1> </ $ 2>”）;
	}，

	clone：function（elem，dataAndEvents，deepDataAndEvents）{
		var i，l，srcElements，destElements，
			clone = elem.cloneNode（true），
			inPage = isAttached（elem）;

		//修复IE克隆问题
		if（！support.noCloneChecked &&（elem.nodeType === 1 || elem.nodeType === 11）&&
				！jQuery.isXMLDoc（elem））{

			//我们出于性能原因避开了Sizzle：https：//jsperf.com/getall-vs-sizzle/2
			destElements = getAll（clone）;
			srcElements = getAll（elem）;

			for（i = 0，l = srcElements.length; i <l; i ++）{
				fixInput（srcElements [i]，destElements [i]）;
			}
		}

		//将事件从原始复制到克隆
		if（dataAndEvents）{
			if（deepDataAndEvents）{
				srcElements = srcElements || getAll（elem）;
				destElements = destElements || getAll（clone）;

				for（i = 0，l = srcElements.length; i <l; i ++）{
					cloneCopyEvent（srcElements [i]，destElements [i]）;
				}
			} else {
				cloneCopyEvent（elem，clone）;
			}
		}

		//保留脚本评估历史记录
		destElements = getAll（clone，“script”）;
		if（destElements.length> 0）{
			setGlobalEval（destElements，！inPage && getAll（elem，“script”））;
		}

		//返回克隆的集合
		返回克隆;
	}，

	cleanData：function（elems）{
		var data，elem，type，
			special = jQuery.event.special，
			i = 0;

		for（;（elem = elems [i]）！== undefined; i ++）{
			if（acceptData（elem））{
				if（（data = elem [dataPriv.expando]））{
					if（data.events）{
						for（输入data.events）{
							if（special [type]）{
								jQuery.event.remove（elem，type）;

							//这是避免jQuery.event.remove开销的快捷方式
							} else {
								jQuery.removeEvent（elem，type，data.handle）;
							}
						}
					}

					//支持：Chrome <= 35  -  45+
					//分配undefined而不是delete，请参阅Data＃remove
					elem [dataPriv.expando] = undefined;
				}
				if（elem [dataUser.expando]）{

					//支持：Chrome <= 35  -  45+
					//分配undefined而不是delete，请参阅Data＃remove
					elem [dataUser.expando] = undefined;
				}
			}
		}
	}
}）;

jQuery.fn.extend（{
	detach：function（selector）{
		return remove（this，selector，true）;
	}，

	remove：function（selector）{
		return remove（this，selector）;
	}，

	text：function（value）{
		return access（this，function（value）{
			返回值=== undefined？
				jQuery.text（this）：
				this.empty（）。each（function（）{
					if（this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9）{
						this.textContent = value;
					}
				}）;
		}，null，value，arguments.length）;
	}，

	append：function（）{
		return domManip（this，arguments，function（elem）{
			if（this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9）{
				var target = manipulationTarget（this，elem）;
				target.appendChild（elem）;
			}
		}）;
	}，

	prepend：function（）{
		return domManip（this，arguments，function（elem）{
			if（this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9）{
				var target = manipulationTarget（this，elem）;
				target.insertBefore（elem，target.firstChild）;
			}
		}）;
	}，

	之前：function（）{
		return domManip（this，arguments，function（elem）{
			if（this.parentNode）{
				this.parentNode.insertBefore（elem，this）;
			}
		}）;
	}，

	after：function（）{
		return domManip（this，arguments，function（elem）{
			if（this.parentNode）{
				this.parentNode.insertBefore（elem，this.nextSibling）;
			}
		}）;
	}，

	empty：function（）{
		var elem，
			i = 0;

		for（;（elem = this [i]）！= null; i ++）{
			if（elem.nodeType === 1）{

				//防止内存泄漏
				jQuery.cleanData（getAll（elem，false））;

				//删除所有剩余的节点
				elem.textContent =“”;
			}
		}

		归还这个;
	}，

	clone：function（dataAndEvents，deepDataAndEvents）{
		dataAndEvents = dataAndEvents == null？false：dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null？dataAndEvents：deepDataAndEvents;

		return this.map（function（）{
			return jQuery.clone（this，dataAndEvents，deepDataAndEvents）;
		}）;
	}，

	html：function（value）{
		return access（this，function（value）{
			var elem = this [0] || {}，
				i = 0，
				l = this.length;

			if（value === undefined && elem.nodeType === 1）{
				return elem.innerHTML;
			}

			//看看我们是否可以使用快捷方式并使用innerHTML
			if（typeof value ===“string”&&！rnoInnerhtml.test（value）&&
				！wrapMap [（rtagName.exec（value）|| [“”，“”]）[1] .toLowerCase（）]）{

				value = jQuery.htmlPrefilter（value）;

				尝试{
					for（; i <l; i ++）{
						elem = this [i] || {};

						//删除元素节点并防止内存泄漏
						if（elem.nodeType === 1）{
							jQuery.cleanData（getAll（elem，false））;
							elem.innerHTML = value;
						}
					}

					elem = 0;

				//如果使用innerHTML抛出异常，请使用fallback方法
				} catch（e）{}
			}

			if（elem）{
				this.empty（）。append（value）;
			}
		}，null，value，arguments.length）;
	}，

	replaceWith：function（）{
		var ignored = [];

		//进行更改，将每个未忽略的上下文元素替换为新内容
		return domManip（this，arguments，function（elem）{
			var parent = this.parentNode;

			if（jQuery.inArray（this，ignored）<0）{
				jQuery.cleanData（getAll（this））;
				if（parent）{
					parent.replaceChild（elem，this）;
				}
			}

		//强制回调调用
		}，被忽略）;
	}
}）;

jQuery.each（{
	appendTo：“追加”，
	prependTo：“prepend”，
	insertBefore：“before ”，
	insertAfter：“after”，
	replaceAll：“replaceWith”
}，function（name，original）{
	jQuery.fn [name] = function（selector）{
		var elems，
			ret = []，
			insert = jQuery（selector），
			last = insert.length  -  1，
			i = 0;

		for（; i <= last; i ++）{
			elems = i ===最后？这个：this.clone（true）;
			jQuery（insert [i]）[original]（elems）;

			//支持：仅限Android <= 4.0，仅限PhantomJS 1
			// .get（）因为push.apply（_，arraylike）抛出了古老的WebKit
			push.apply（ret，elems.get（））;
		}

		return this.pushStack（ret）;
	};
}）;
var rnumnonpx = new RegExp（“^（”+ pnum +“）（?! px）[az％] + $”，“i”）;

var getStyles = function（elem）{

		//支持：IE <= 11，Firefox <= 30（＃15098，＃14150）
		// IE会抛出弹出窗口中创建的元素
		// FF同时通过“defaultView.getComputedStyle”抛出框架元素
		var view = elem.ownerDocument.defaultView;

		if（！view ||！view.opener）{
			view = window;
		}

		return view.getComputedStyle（elem）;
	};

var rboxStyle = new RegExp（cssExpand.join（“|”），“i”）;



（function（）{

	//执行pixelPosition和boxSizingReliable测试只需要一个布局
	//所以它们同时被执行以保存第二个计算。
	function computeStyleTests（）{

		//这是一个单身人士，我们只需执行一次
		if（！div）{
			返回;
		}

		container.style.cssText =“position：absolute; left：-11111px; width：60px;” +
			“边距：1px的;填充：0;边界：0”;
		div.style.cssText =
			“位置：相对;显示：块;箱上浆：边界框;溢出：滚动;” +
			“保证金：汽车;边界：1px的;填充：1px的;” +
			“宽度：60％;顶部：1％”;
		documentElement.appendChild（container）.appendChild（div）;

		var divStyle = window.getComputedStyle（div）;
		pixelPositionVal = divStyle.top！==“1％”;

		//支持：Android 4.0  - 仅限4.3，Firefox <= 3  -  44
		reliableMarginLeftVal = roundPixelMeasures（divStyle.marginLeft）=== 12;

		//支持：Android 4.0  - 仅限4.3，Safari <= 9.1  -  10.1，iOS <= 7.0  -  9.3
		//有些样式会返回百分比值，即使它们不应该
		div.style.right =“60％”;
		pixelBoxStylesVal = roundPixelMeasures（divStyle.right）=== 36;

		//支持：仅限IE 9  -  11
		//检测盒子大小调整的内容维度的误报：border-box元素
		boxSizingReliableVal = roundPixelMeasures（divStyle.width）=== 36;

		//支持：仅限IE 9
		//检测溢出：滚动螺旋（gh-3699）
		//支持：Chrome <= 64
		//当缩放影响offsetWidth（gh-4029）时不要被欺骗
		div.style.position =“绝对”;
		scrollboxSizeVal = roundPixelMeasures（div.offsetWidth / 3）=== 12;

		documentElement.removeChild（container）;

		//对div进行Nullify，使其不会存储在内存中
		//它也是检查已经执行的标志
		div = null;
	}

	function roundPixelMeasures（measure）{
		return Math.round（parseFloat（measure））;
	}

	var pixelPositionVal，boxSizingReliableVal，scrollboxSizeVal，pixelBoxStylesVal，
		reliableMarginLeftVal，
		container = document.createElement（“div”），
		div = document.createElement（“div”）;

	//在有限（非浏览器）环境中尽早完成
	if（！div.style）{
		返回;
	}

	//支持：IE <= 9  -  11
	//克隆元素的样式影响克隆的源元素（＃8908）
	div.style.backgroundClip =“content-box”;
	div.cloneNode（true）.style.backgroundClip =“”;
	support.clearCloneStyle = div.style.backgroundClip ===“content-box”;

	jQuery.extend（support，{
		boxSizingReliable：function（）{
			computeStyleTests（）;
			return boxSizingReliableVal;
		}，
		pixelBoxStyles：function（）{
			computeStyleTests（）;
			return pixelBoxStylesVal;
		}，
		pixelPosition：function（）{
			computeStyleTests（）;
			return pixelPositionVal;
		}，
		reliableMarginLeft：function（）{
			computeStyleTests（）;
			return reliableMarginLeftVal;
		}，
		scrollboxSize：function（）{
			computeStyleTests（）;
			return scrollboxSizeVal;
		}
	}）;
}）（）;


function curCSS（elem，name，calculated）{
	var width，minWidth，maxWidth，ret，

		//支持：Firefox 51+
		//以某种方式计算之前检索样式
		//修复了获取错误值的问题
		//在分离的元素上
		style = elem.style;

	computed = computed || getStyles（elem）;

	//需要getPropertyValue：
	// .css（'filter'）（仅限IE 9，＃12537）
	// .css（' -  customProperty）（＃3144）
	if（computed）{
		ret = computed.getPropertyValue（name）|| 计算[名称];

		if（ret ===“”&&！isAttached（elem））{
			ret = jQuery.style（elem，name）;
		}

		//致敬Dean Edwards“令人敬畏的黑客”
		// Android浏览器返回某些值的百分比，
		//但宽度似乎是可靠的像素。
		//这违反了CSSOM草案规范：
		// https://drafts.c​​sswg.org/cssom/#resolved-values
		if（！support.pixelBoxStyles（）&& rnumnonpx.test（ret）&& rboxStyle.test（name））{

			//记住原始值
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			//输入新值以获取计算值
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			//恢复更改的值
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret！== undefined？

		//支持：IE <= 9  -  11
		// IE将zIndex值作为整数返回。
		ret +“”：
		RET;
}


function addGetHookIf（conditionFn，hookFn）{

	//定义钩子，我们将在第一次运行时检查它是否真的需要。
	返回{
		get：function（）{
			if（conditionFn（））{

				//不需要钩子（或者因为它不可能使用它
				//缺少依赖项），删除它。
				删除this.get;
				返回;
			}

			//需要钩子; 重新定义它以便不再执行支持测试。
			return（this.get = hookFn）.apply（this，arguments）;
		}
	};
}


var cssPrefixes = [“Webkit”，“Moz”，“ms”]，
	emptyStyle = document.createElement（“div”）。style，
	vendorProps = {};

//返回供应商前缀属性或未定义
function vendorPropName（name）{

	//检查供应商的前缀名称
	var capName = name [0] .toUpperCase（）+ name.slice（1），
		i = cssPrefixes.length;

	当我 -  ） {
		name = cssPrefixes [i] + capName;
		if（name in emptyStyle）{
			返回名称;
		}
	}
}

//返回一个可能映射的jQuery.cssProps或vendor prefixed属性
function finalPropName（name）{
	var final = jQuery.cssProps [name] || vendorProps [name];

	if（final）{
		回归决赛;
	}
	if（name in emptyStyle）{
		返回名称;
	}
	return vendorProps [name] = vendorPropName（name）|| 名称;
}


VAR

	//如果display is none或以table开头，则可以交换
	//除了“table”，“table-cell”或“table-caption”
	//在此处查看显示值：https：//developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = / ^  -  /，
	cssShow = {position：“absolute”，visibility：“hidden”，display：“block”}，
	cssNormalTransform = {
		letterSpacing：“0”，
		fontWeight：“400”
	};

function setPositiveNumber（elem，value，subtract）{

	//已经存在任何相对（+/-）值
	//此时归一化
	var matches = rcssNum.exec（value）;
	回归比赛？

		//防止未定义的“减去”，例如，当用在cssHooks中时
		Math.max（0，匹配[2]  - （减法|| 0））+（匹配[3] ||“px”）：
		值;
}

function boxModelAdjustment（elem，dimension，box，isBorderBox，styles，computedVal）{
	var i = dimension ===“width”？1：0，
		extra = 0，
		delta = 0;

	//可能没有必要进行调整
	if（box ===（isBorderBox？“border”：“content”））{
		返回0;
	}

	for（; i <4; i + = 2）{

		//两个框模型都不包括边距
		if（box ===“margin”）{
			delta + = jQuery.css（elem，box + cssExpand [i]，true，styles）;
		}

		//如果我们带到内容框，我们正在寻找“填充”或“边框”或“边距”
		if（！isBorderBox）{

			//添加填充
			delta + = jQuery.css（elem，“padding”+ cssExpand [i]，true，styles）;

			//对于“border”或“margin”，添加边框
			if（box！==“padding”）{
				delta + = jQuery.css（elem，“border”+ cssExpand [i] +“Width”，true，styles）;

			//但是仍然要跟踪它
			} else {
				extra + = jQuery.css（elem，“border”+ cssExpand [i] +“Width”，true，styles）;
			}

		//如果我们带边框（内容+填充+边框），我们正在寻找“内容”或
		//“填充”或“边距”
		} else {

			//对于“内容”，减去填充
			if（box ===“content”）{
				delta  -  = jQuery.css（elem，“padding”+ cssExpand [i]，true，styles）;
			}

			//对于“内容”或“填充”，减去边框
			if（box！==“margin”）{
				delta  -  = jQuery.css（elem，“border”+ cssExpand [i] +“Width”，true，styles）;
			}
		}
	}

	//通过提供computedVal请求时，为正内容框滚动装订线提供帐户
	if（！isBorderBox && computedVal> = 0）{

		// offsetWidth / offsetHeight是内容，填充，滚动装订线和边框的舍入值
		//假设整数滚动装订线，减去其余部分并向下舍入
		delta + = Math.max（0，Math.ceil（
			elem [“offset”+ dimension [0] .toUpperCase（）+ dimension.slice（1）]  - 
			computedVal  - 
			三角洲 - 
			额外 - 
			0.5

		//如果offsetWidth / offsetHeight未知，那么我们无法确定内容框滚动装订线
		//使用显式零来避免NaN（gh-3964）
		））|| 0;
	}

	回归三角洲;
}

function getWidthOrHeight（elem，dimension，extra）{

	//从计算样式开始
	var styles = getStyles（elem），

		//为避免强制重排，只在我们需要时才获取boxSizing（gh-4322）。
		//假内容框，直到我们知道需要知道真正的价值。
		boxSizingNeeded =！support.boxSizingReliable（）|| 额外，
		isBorderBox = boxSizingNeeded &&
			jQuery.css（elem，“boxSizing”，false，styles）===“border-box”，
		valueIsBorderBox = isBorderBox，

		val = curCSS（elem，dimension，styles），
		offsetProp =“offset”+ dimension [0] .toUpperCase（）+ dimension.slice（1）;

	//支持：Firefox <= 54
	//根据需要返回混淆的非像素值或假装无知。
	if（rnumnonpx.test（val））{
		if（！extra）{
			返回;
		}
		val =“auto”;
	}


	//当值为“auto”时，回退到offsetWidth / offsetHeight
	//对于没有明确设置的内联元素会发生这种情况（gh-3571）
	//支持：仅限Android <= 4.1  -  4.3
	//对于误报的内联维度（gh-3602）也使用offsetWidth / offsetHeight
	//支持：仅限IE 9-11
	//当box大小不可靠时，也可以使用offsetWidth / offsetHeight
	//我们使用getClientRects（）来检查隐藏/断开连接。
	//在这些情况下，可以将计算值信任为border-box
	if（（！support.boxSizingReliable（）&& isBorderBox ||
		val ===“auto”||
		！parseFloat（val）&& jQuery.css（elem，“display”，false，styles）===“inline”）&&
		elem.getClientRects（）。length）{

		isBorderBox = jQuery.css（elem，“boxSizing”，false，styles）===“border-box”;

		//如果可用，offsetWidth / offsetHeight近似边框框尺寸。
		//在没有可用的地方（例如，SVG），假设不可靠的盒子大小并解释
		//将检索到的值作为内容框维度。
		elem中的valueIsBorderBox = offsetProp;
		if（valueIsBorderBox）{
			val = elem [offsetProp];
		}
	}

	//标准化“”和自动
	val = parseFloat（val）|| 0;

	//调整元素的盒子模型
	回归（val +
		boxModelAdjustment（
			ELEM，
			尺寸，
			额外的|| （isBorderBox？“border”：“content”），
			valueIsBorderBox，
			款式，

			//提供当前计算的大小以请求滚动装订线计算（gh-3589）
			VAL
		）
	）+“px”;
}

jQuery.extend（{

	//添加样式属性挂钩以覆盖默认值
	//获取和设置样式属性的行为
	cssHooks：{
		不透明度：{
			get：function（elem，computed）{
				if（computed）{

					//我们应该总是从不透明度中得到一个数字
					var ret = curCSS（elem，“opacity”）;
					return ret ===“”？“1”：ret;
				}
			}
		}
	}，

	//不要自动将“px”添加到这些可能无单元的属性中
	cssNumber：{
		“animationIterationCount”：是的，
		“columnCount”：是的，
		“fillOpacity”：是的，
		“flexGrow”：是的，
		“flexShrink”：是的，
		“fontWeight”：是的，
		“gridArea”：是的，
		“gridColumn”：是的，
		“gridColumnEnd”：是的，
		“gridColumnStart”：是的，
		“gridRow”：是的，
		“gridRowEnd”：是的，
		“gridRowStart”：是的，
		“lineHeight”：是的，
		“不透明”：是的，
		“秩序”：是的，
		“孤儿”：是的，
		“寡妇”：是的，
		“zIndex”：是的，
		“缩放”：是的
	}，

	//添加以前要修复其名称的属性
	//设置或获取值
	cssProps：{}，

	//在DOM节点上获取并设置样式属性
	style：function（elem，name，value，extra）{

		//不要在文本和注释节点上设置样式
		if（！elem || elem.nodeType === 3 || elem.nodeType === 8 ||！elem.style）{
			返回;
		}

		//确保我们正在使用正确的名称
		var ret，type，hooks，
			origName = camelCase（name），
			isCustomProp = rcustomProp.test（name），
			style = elem.style;

		//确保我们正在使用正确的名称。我们没有
		//想要查询值，如果它是CSS自定义属性
		//因为它们是用户定义的。
		if（！isCustomProp）{
			name = finalPropName（origName）;
		}

		//获取前缀版本的钩子，然后是未加前缀的版本
		hooks = jQuery.cssHooks [name] || jQuery.cssHooks [origName];

		//检查我们是否设置了值
		if（value！== undefined）{
			type = typeof value;

			//将“+ =”或“ -  =”转换为相对数字（＃7345）
			if（type ===“string”&&（ret = rcssNum.exec（value））&& ret [1]）{
				value = adjustCSS（elem，name，ret）;

				//修复了错误＃9237
				type =“number”;
			}

			//确保未设置null和NaN值（＃7116）
			if（value == null || value！== value）{
				返回;
			}

			//如果传入了一个数字，添加单位（某些CSS属性除外）
			//当我们只自动追加时，可以在jQuery 4.0中删除isCustomProp检查
			//“px”到几个硬编码值。
			if（type ===“number”&&！isCustomProp）{
				值+ = ret && ret [3] || （jQuery.cssNumber [origName]？“”：“px”）;
			}

			// background- * props影响原始克隆的值
			if（！support.clearCloneStyle && value ===“”&& name.indexOf（“background”）=== 0）{
				style [name] =“inherit”;
			}

			//如果提供了一个钩子，请使用该值，否则只需设置指定的值
			if（！hooks ||！（挂钩中的“set”）||
				（value = hooks.set（elem，value，extra））！== undefined）{

				if（isCustomProp）{
					style.setProperty（name，value）;
				} else {
					style [name] = value;
				}
			}

		} else {

			//如果提供了一个钩子，那么从那里得到非计算值
			if（hooks &&“get”in hooks &&
				（ret = hooks.get（elem，false，extra））！== undefined）{

				返回;
			}

			//否则只从样式对象中获取值
			返回样式[名称];
		}
	}，

	css：function（elem，name，extra，styles）{
		var val，num，hooks，
			origName = camelCase（name），
			isCustomProp = rcustomProp.test（name）;

		//确保我们正在使用正确的名称。我们没有
		//如果它是CSS自定义属性，则想要修改该值
		//因为它们是用户定义的。
		if（！isCustomProp）{
			name = finalPropName（origName）;
		}

		//尝试带前缀的名称，后跟未加前缀的名称
		hooks = jQuery.cssHooks [name] || jQuery.cssHooks [origName];

		//如果提供了一个钩子，那么从那里获取计算值
		if（hooks &&“get”in hooks）{
			val = hooks.get（elem，true，extra）;
		}

		//否则，如果存在获取计算值的方法，请使用它
		if（val === undefined）{
			val = curCSS（elem，name，styles）;
		}

		//将“normal”转换为计算值
		if（val ===“normal”&& cssNormalTransform中的name）{
			val = cssNormalTransform [name];
		}

		//如果强制或提供限定符并且val看起来是数字，则生成数字
		if（extra ===“”|| extra）{
			num = parseFloat（val）;
			return extra === true || isFinite（num）？num || 0：val;
		}

		返回;
	}
}）;

jQuery.each（[“height”，“width”]，function（i，dimension）{
	jQuery.cssHooks [dimension] = {
		get：function（elem，computed，extra）{
			if（computed）{

				//如果我们无形地显示它们，某些元素可以有维度信息
				//但它必须具有有益的当前显示样式
				return rdisplayswap.test（jQuery.css（elem，“display”））&&

					//支持：Safari 8+
					// Safari中的表列具有非零offsetWidth和零
					// getBoundingClientRect（）。width除非显示更改。
					//支持：IE <= 11
					//在断开连接的节点上运行getBoundingClientRect
					//在IE中抛出错误。
					（！elem.getClientRects（）。length ||！elem.getBoundingClientRect（）。width）？
						swap（elem，cssShow，function（）{
							return getWidthOrHeight（elem，dimension，extra）;
						}）：
						getWidthOrHeight（elem，dimension，extra）;
			}
		}，

		set：function（elem，value，extra）{
			var匹配，
				styles = getStyles（elem），

				//如果测试有可能失败，则只读取styles.position
				//避免强制重排
				scrollboxSizeBuggy =！support.scrollboxSize（）&&
					styles.position ===“绝对”，

				//为了避免强制重排，只在我们需要时才获取boxSizing（gh-3991）
				boxSizingNeeded = scrollboxSizeBuggy || 额外，
				isBorderBox = boxSizingNeeded &&
					jQuery.css（elem，“boxSizing”，false，styles）===“border-box”，
				减去=额外？
					boxModelAdjustment（
						ELEM，
						尺寸，
						额外，
						isBorderBox，
						款式
					）：
					0;

			//通过比较偏移*与计算和来计算不可靠的边框尺寸
			//伪造内容框以获取边框和填充（gh-3699）
			if（isBorderBox && scrollboxSizeBuggy）{
				减去 -  = Math.ceil（
					elem [“offset”+ dimension [0] .toUpperCase（）+ dimension.slice（1）]  - 
					parseFloat（styles [dimension]） - 
					boxModelAdjustment（elem，dimension，“border”，false，styles） - 
					0.5
				）;
			}

			//如果需要进行值调整，则转换为像素
			if（减去&&（matches = rcssNum.exec（value））&&
				（匹配[3] ||“px”）！==“px”）{

				elem.style [dimension] = value;
				value = jQuery.css（elem，dimension）;
			}

			return setPositiveNumber（elem，value，subtract）;
		}
	};
}）;

jQuery.cssHooks.marginLeft = addGetHookIf（support.reliableMarginLeft，
	function（elem，calculated）{
		if（computed）{
			return（parseFloat（curCSS（elem，“marginLeft”））||
				elem.getBoundingClientRect（）。left  - 
					swap（elem，{marginLeft：0}，function（）{
						return elem.getBoundingClientRect（）。left;
					}）
				）+“px”;
		}
	}
）;

//动画使用这些钩子来扩展属性
jQuery.each（{
	保证金：“”，
	填充：“”，
	边框：“宽度”
}，function（prefix，suffix）{
	jQuery.cssHooks [prefix + suffix] = {
		expand：function（value）{
			var i = 0，
				expanded = {}，

				//如果不是字符串，则假设一个数字
				parts = typeof value ===“string”？value.split（“”）：[value];

			for（; i <4; i ++）{
				expanded [prefix + cssExpand [i] + suffix] =
					部分[i] || 部分[i  -  2] || 零件[0];
			}

			回归扩大;
		}
	};

	if（前缀！==“margin”）{
		jQuery.cssHooks [prefix + suffix] .set = setPositiveNumber;
	}
}）;

jQuery.fn.extend（{
	css：function（name，value）{
		return access（this，function（elem，name，value）{
			var styles，len，
				map = {}，
				i = 0;

			if（Array.isArray（name））{
				styles = getStyles（elem）;
				len = name.length;

				for（; i <len; i ++）{
					map [name [i]] = jQuery.css（elem，name [i]，false，styles）;
				}

				返回地图;
			}

			返回值！== undefined？
				jQuery.style（elem，name，value）：
				jQuery.css（elem，name）;
		}，name，value，arguments.length> 1）;
	}
}）;


function Tween（elem，options，prop，end，easing）{
	返回新的Tween.prototype.init（elem，options，prop，end，easing）;
}
jQuery.Tween = Tween;

Tween.prototype = {
	构造函数：Tween，
	init：function（elem，options，prop，end，easing，unit）{
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur（）;
		this.end = end;
		this.unit = unit || （jQuery.cssNumber [prop]？“”：“px”）;
	}，
	cur：function（）{
		var hooks = Tween.propHooks [this.prop];

		return hooks && hooks.get？
			hooks.get（this）：
			Tween.propHooks._default.get（this）;
	}，
	run：function（percent）{
		变差，
			hooks = Tween.propHooks [this.prop];

		if（this.options.duration）{
			this.pos = eased = jQuery.easing [this.easing]（
				％，this.options.duration * percent，0,1，this.options.duration
			）;
		} else {
			this.pos = eased = percent;
		}
		this.now =（this.end  -  this.start）* eased + this.start;

		if（this.options.step）{
			this.options.step.call（this.elem，this.now，this）;
		}

		if（hooks && hooks.set）{
			hooks.set（this）;
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );