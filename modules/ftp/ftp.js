	$(document).ready(function(){
                $('iframe').attr('id', 'ftp_iframe');
                $('iframe').load(function() {
				$(this).contents().find('table[style="text-align:center;width:100%;border:1px solid black;background-image:url(../../themes/Revolution/images/wrapper-bg.png);"]').addClass("ftp-login").removeAttr("style");
					if($(this).contents().find('#LoginForm').length > 0) {
					var ftp_css = '<link rel="stylesheet" type="text/css" href="../../themes/gtarosastheme/modules/ftp/ftp.css">';	
					} else {
					var ftp_css = '<link rel="stylesheet" type="text/css" href="../../themes/gtarosastheme/modules/ftp/ftps.css">';	
					}
					var style = '<link rel="stylesheet" type="text/css" href="../../themes/gtarosastheme/css/style.css">';
					//var ftp_js = '<link rel="stylesheet" href="../../themes/Obsidian/modules/ftp/main.js">';
				$(this).contents().find("head").append(style + ftp_css);	
				$(this).contents().find('img[src*="images/mime/folder.png"]').attr('src', '../../themes/gtarosastheme/images/folder.png');
				$(this).contents().find('img[src*="images/mime/document.png"]').attr('src', '../../themes/gtarosastheme/images/file.png');
				$(this).contents().find('img[src*="images/mime/mime.png"]').attr('src', '../../themes/gtarosastheme/images/mime.png');
				$(this).contents().find('img[src*="images/mime/exec.png"]').attr('src', '../../themes/gtarosastheme/images/exec.png');
				$(this).contents().find('img[src*="images/mime/terminal.png"]').attr('src', '../../themes/gtarosastheme/images/code.png');
				});
	});