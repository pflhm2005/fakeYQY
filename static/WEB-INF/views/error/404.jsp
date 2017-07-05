<%@ page contentType="text/html;charset=UTF-8"%>
<%response.setStatus(200);%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>页面不存在</title>
	<style type="text/css">
	*{padding:0;margin:0;}
	body{background:#D6D6D6;width:100%;}
		#_151118all{width:600px;height:220px;margin:120px auto;}
		#_151118all ._151118a_title{height:80px;width:100%;color:#0061A5;text-align:center;line-height:80px;position:relative}
		
		#_151118all ._151118a_title ._151118ac_img{position:absolute;top:15px;left:-40px;}
		#_151118all ._151118a_context{height:160px;width:100%;background:white;border:1px solid #CCCCCC;}
		._151118top{height:100px;width:100%;color:gray;font-size:20px;text-align:center;padding:10px 0px;line-height:100px;}
		._151118bottom{height:30px;width:100%;}
		._151118but{height:30px;padding:0 13px;background:#0075BF;color:white;border:none;float:right;margin-right:20px;}
	</style>
</head>
<script src="<%=request.getContextPath()%>/jquery/jquery.js"></script>
<body>
	
	<div id="_151118all">
		<div class="_151118a_title">
			<img class="_151118ac_img" src="<%=request.getContextPath() %>/static/images/404!.png"/> 
			<span style="font-size:72px;" >404</span><span style="font-style: italic;font-size:40px;padding-left:20px;">Not Found</span>
		</div>
		<div class="_151118a_context">
			<div class="_151118top">
				对不起，资源不存在！
			</div>
			<div class="_151118bottom">
				<button  class="_151118but"/><a style="color:white;text-decoration:none;" href="javascript:" onclick="history.go(-1);">返回上一页</a></button>
			</div>
		</div>
	</div>
</body>
</html>
<script>
	function _151118tobig(obid){
		
		
		function getposition(){
			var sw=document.body.clientWidth/2;
			var sh=document.body.clientHeight/2;
			var wh={"w":sw,"h":sh};
			return wh;
		}
		
		function toanimate(ob){
			setTimeout(function(){
				ob.style.top=130+"px";
				ob.style.left=370+"px";
				ob.style.width=610+"px";
				ob.style.height=230+"px";
				var og=ob.style.top;
				alert(parseInt(og))
				//toanimate(ob);
			},1000)
		}
		var ob=document.getElementById(obid);
		var wh=getposition();
		ob.style.top=120+"px";
		//alert(wh.h)
		ob.style.left=wh.w-300+"px";
		//salert(wh.w)
		toanimate(ob);
	}
	//_151118tobig("_151118all");
</script>