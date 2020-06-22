/* Define BtnUtils class */
var BtnUtils = {
	addRollOver : function addRollOver(myDomID, myDomClass, targetObj)
	{
		if (targetObj == undefined) { targetObj = myDomID; }

		//add the class for mouse out state - default
		$(targetObj).addClass(myDomClass + "_mouseOut");
		
		//add roll over functions
		$(myDomID).mouseover(function(){
			if (targetObj != myDomID) $(targetObj).removeClass(myDomClass + "_mouseOut").addClass(myDomClass + "_mouseOver");
			else $(this).removeClass(myDomClass + "_mouseOut").addClass(myDomClass + "_mouseOver");
		});
		$(myDomID).mouseout(function(){
			if (targetObj != myDomID) $(targetObj).removeClass(myDomClass + "_mouseOver").addClass(myDomClass + "_mouseOut");
			else $(this).removeClass(myDomClass + "_mouseOver").addClass(myDomClass + "_mouseOut");
		});
	},
	
	preLoadImg: function preLoadImg(imgSrc) {
		var pImg = new Image();
		pImg.src = imgSrc;
	}
	
};

var runSplash = function() {
	
	// for small splash top left
	
	var offsetOrig = $('#divSplashStrapText').position();
	var offset2 = $('#divSplashStrapText').offset();
	
	offset2.top = -70;
	$('#divSplashStrapText').offset( offset2 );
	
	var scaleObj = { targetWidth:$('#imgSplashLogo').width(), targetHeight:$('#imgSplashLogo').height() };
	$('#imgSplashLogo').width(scaleObj.targetWidth * 0.1) ;//10% scale
	$('#imgSplashLogo').height(scaleObj.targetHeight * 0.1) ;//10% scale
	
	$('#imgSplashLogo').animate({
		width: scaleObj.targetWidth,
		height: scaleObj.targetHeight
		}, 1000, splashStep2);


	function splashStep2()
	{
		$('#divSplashStrapText').animate({
			top:offsetOrig.top
		}, 1000, splashDone);
	}

	function splashDone()
	{
	}
	// ---------------- //

};

var HTML5Utils = {

	MIN_DEVICE_WIDTH: 560,
	
	FULLY_COMPATIBLE: 0,
	
	PARTIAL_COMPATIBILITY: 1,
	
	NO_COMPATIBILITY: 2,
	
	/*
	 * Function returns boolean indicating whether a canvas context
	 * can be created in this browser, thus indicating whether the
	 * browser has HTML5 canvas support
	 * http://stackoverflow.com/questions/2745432/best-way-to-detect-that-html5-canvas-is-not-supported/2745459#2745459
	 * http://diveintohtml5.info/detect.html
	 */
	supportsCanvas: function() {
	  return !!document.createElement('canvas').getContext;
	},
	
	/*
	 * Return false if device is running Android < v3
	 * Function grabbed from:
	 * http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
	 */
	isCompatibleAndroidVersion: function()
	{
		var ua = navigator.userAgent;
		if (ua.indexOf("Android") >= 0)
		{
			var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
			if (androidversion < 3) return false;
		}
		
		return true;
	},
	
	/*
	 * Return false if device is running iOS < v6
	 * Function adapted from:
	 * http://stackoverflow.com/questions/8348139/detect-ios-version-less-than-5-with-javascript
	 */
	isCompatibleIOSVersion: function()
	{
		var ua = navigator.userAgent;
		if (/(iPhone|iPod|iPad)/i.test(ua))
		{
			if (/OS [2-5]_\d(_\d)? like Mac OS X/i.test(ua) || /CPU like Mac OS X/i.test(ua))
			{
				// iOS 1-5 so not supported
				return false;
			}
		}
		return true;
	},
	
	/**
	 * Detect whether the device attempting to access this resource has a small screen.
	 * If we know the device is a desktop or tablet, always return false as our resources
	 * are designed for tablets and we can guarantee a good screen size. 
	 * If not, perform a calculation based on the devicePixelRatio and screen.dimensions 
	 * properties.
	 */
	isScreenTooSmall: function()
	{
		if (typeof window.devicePixelRatio === "undefined" || window.devicePixelRatio < 1)
		{
			return this.isMobile();
		}
		else if (this.isDesktop() || this.isTablet())
		{
			return false;
		}
		else
		{
			// use innerWidth/innerHeight if screen.width/screen.height are not available	
			var logicalWidth = screen.width;
			if (!logicalWidth) logicalWidth = window.innerWidth;
			var logicalHeight = screen.height;
			if (!logicalHeight) logicalHeight = window.innerHeight;
			
			logicalWidth /= window.devicePixelRatio;
			logicalHeight /= window.devicePixelRatio;
			
			/* alert("window.devicePixelRatio: " + window.devicePixelRatio + 
					",\nscreen.availWidth " + window.top.screen.availWidth + 
					",\nscreen.availHeight " + window.top.screen.availHeight + 
					",\nscreen.width " + window.top.screen.width + 
					",\nscreen.height " + window.top.screen.height + 
					",\nwindow.top.width " + $(window.top).width() + 
					",\nwindow.top.height " + $(window.top).height() + 
					",\nwindow.innerWidth " + window.innerWidth + 
					",\nwindow.innerHeight " + window.innerHeight + 
					",\ndocument.documentElement.clientWidth " + document.documentElement.clientWidth + 
					",\ndocument.documentElement.clientHeight " + document.documentElement.clientHeight + 
					",\nlogicalResolution: " + logicalWidth + " x " + logicalHeight);
				 */
			return Math.min(logicalWidth, logicalHeight) <= this.MIN_DEVICE_WIDTH;
		}
	},
	
	isMobile: function()
	{
		return device.mobile();
	},
	
	isTablet: function()
	{
		return device.tablet();
	},
	
	isWindowsPhone: function()
	{
		return device.windowsPhone();
	},
	
	isPlaybook: function()
	{
		return device.blackberryTablet();
	},
	
	isDesktop: function()
	{
		return device.desktop();
	}
};

var CookieUtils = {
		
	/*
	 * All code modified from w3schools:
	 * http://www.w3schools.com/js/js_cookies.asp
	 */

	setCookie: function(cookieName, cookieValue, daysToExpiry)
	{
		var expiryDate = new Date();
		expiryDate.setTime(expiryDate.getTime() + (daysToExpiry * 24 * 60 * 60 * 1000));
		var expires = "expires=" + expiryDate.toGMTString();
		document.cookie = cookieName + "=" + cookieValue + "; " + expires;
	},

	getCookie: function(cookieName)
	{
		if (document.cookie)
		{
			var name = cookieName + "=";
			var cookiePairs = document.cookie.split(';');
			for (var i = 0; i < cookiePairs.length; i++)
			{
				var cookie = cookiePairs[i];
				// trim the cookie
				while (cookie.charAt(0) == ' ') cookie = cookie.substring(1);
				if (cookie.indexOf(name) == 0) return cookie.substring(name.length, cookie.length);
			}
		}
		return "";
	}
};
