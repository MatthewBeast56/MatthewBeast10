
	
	var pv = false;
	
	/**
	 * Event function called by SWFObject once the Flash resource load process
	 * has completed. If it was successful, we do not want to do anything except
	 * modify IE touch settings to prevent double tap or pinch to zoom.
	 * On failure, we want to check for HTML5 canvas support or diplay our 
	 * "no flash" error page.
	 */
	function swfobject_loadComplete(e)
	{
		if (e.success)
		{
			// For flash, disable ms touch action
			$('#flashcontent').css('-ms-touch-action', 'none');
			$('#flashcontent').css('ms-touch-action', 'none');
			
			$('html, body, #flashcontent').css('overflow', 'hidden');
		}
		else
		{
			// On fail, attempt to load canvas
			
			// JavaScript must be by this point enabled
			$("#noJavaScript").hide();
			
			var blnCookieExists = CookieUtils.getCookie("proceededAnyway").length > 0;
			
			/*
			 * If the user has clicked "proceed anyway" in the last day, load
			 * the resource straight away to avoid showing continuous errors.
			 * Otherwise run the tests.
			 */
			if (blnCookieExists)
			{
				loadCanvas();
			}
			else
			{
				// test for HTML5 canvas support
				var intDeviceIsCompatibility = runHTML5CompatibilityTests();
				
				switch (intDeviceIsCompatibility)
				{
					case HTML5Utils.FULLY_COMPATIBLE:
						// Load canvas straight away
						loadCanvas();
						break;
					case HTML5Utils.PARTIAL_COMPATIBILITY:
						// Warn user about potential compatibility issues but allow them to proceed
						setupForPartiallyCompatibleDevices();
						break;
					case HTML5Utils.NO_COMPATIBILITY:
						// Show errors but user will be unable to proceed due to browser support
						showCompatibilityErrors();
						break;
					default:
						// Show "no flash" error without compatibility errors. This should never happen.
						showCompatibilityErrors();
						$('#compatibilityChecks').hide();
						break;
				}
			}
		}
	}
	
	/**
	 * If a device does not meet all our requirements for HTML5 resources,
	 * but we are still happy for the user to load the resource after a warning,
	 * display a "proceed anyway" button and list the device usage warning.
	 * If this device has seen the device warning already in the past day, 
	 * and clicked "proceed anyway", go ahead and load the resource straight away.
	 */
	function setupForPartiallyCompatibleDevices()
	{
		$("#divProceedAnyway").css('display', 'block');
		
		$("#btnProceedAnyway").click(function()
		{
			// add a cookie for a day
			CookieUtils.setCookie("proceededAnyway", "true", 1);
			proceedAnyway();
		});
		
		showCompatibilityErrors();
	}
	
	function proceedAnyway()
	{
		$('#flashcontent').css('height', '100%;');
		
		loadCanvas();
	}
	
	/**
	 * Set up the page so that the user can scroll around (removes the overflow hidden
	 * properties required by full screen flash/canvas) and see the errors that
	 * have prevented the resource from loading.
	 */
	function showCompatibilityErrors()
	{
		$('#flashcontent').css('height', 'auto');
		$('body').css('background-color', '#111111');
		
		/*
		 * btnSubPre class
		 */
		BtnUtils.addRollOver('.btnSubPre', 'btnSubPre');
		
		runSplash();
	}
	
	/**
	 * Run a series of compatibility checks, in order or importance, and return false
	 * indicating a fail (i.e. canvas shouldn't be loaded immediately).
	 */
	function runHTML5CompatibilityTests()
	{
		/*
		 * Check if the device supports canvas. If this fails at this point
		 * we know that the device supports neither Flash nor HTML5, so display
		 * an end-of error message.
		 */
		if (!HTML5Utils.supportsCanvas())
		{
			// at this point, we know the device does not support flash or html5 canvas
			$("#noCanvasNoFlash").css('display', 'inline');
			return HTML5Utils.NO_COMPATIBILITY;
		}
		
		/*
		 * Check if the user is running an old version of Android (< v3)
		 */
		if (!HTML5Utils.isCompatibleAndroidVersion())
		{
			$("#badAndroidVersion").css('display', 'inline');
			
			if (HTML5Utils.isScreenTooSmall())
			{
				upScaleForSmallScreens();
			}
			return HTML5Utils.NO_COMPATIBILITY;
		}
		
		/*
		 * Check if the user is running an old version of iOS (< v6)
		 */
		if (!HTML5Utils.isCompatibleIOSVersion())
		{
			$("#badIOSVersion").css('display', 'inline');
			
			if (HTML5Utils.isScreenTooSmall())
			{
				upScaleForSmallScreens();
			}
			return HTML5Utils.NO_COMPATIBILITY;
		}
		
		/*
		 * Check if the device is a playbook
		 */
		if (HTML5Utils.isPlaybook())
		{
			$("#isPlaybook").css('display', 'inline');
			
			return HTML5Utils.PARTIAL_COMPATIBILITY;
		}
		
		/*
		 * Check if the device is a Windows phone
		 */
		if (HTML5Utils.isWindowsPhone())
		{
			upScaleForSmallScreens();
			$("#isWindowsPhone").css('display', 'inline');
			
			return HTML5Utils.PARTIAL_COMPATIBILITY;
		}
		
		/*
		 * Check screen dimensions are large enough for our resources
		 */
		if (HTML5Utils.isScreenTooSmall())
		{
			recordSmallScreenStat();
			
			upScaleForSmallScreens();
			
			$("#smallScreen").css('display', 'inline');
			
			return HTML5Utils.PARTIAL_COMPATIBILITY;
		}
		
		// It has passed all the tests. Return true
		return HTML5Utils.FULLY_COMPATIBLE;
	}
	
	/**
	 * Called when the Flash has failed to load and we have established 
	 * that the client browser meets our criteria for HTML5 support.
	 * The function creates a canvas element and the DOM elements
	 * that provide visual preloader feedback then loads in the streamer
	 * to initialise the resource.
	 */
	function loadCanvas()
	{
		pv = true;
		
		window.scrollTo(0,0);
		
		$('#flashcontent').css('background-color', '#02333F');
		
		// Disable ms touch actions
		$('#flashcontent').css('-ms-touch-action', 'none');
		$('#flashcontent').css('ms-touch-action', 'none');
		
		$('html, body, #flashcontent').css('overflow', 'hidden');
		
		// Create a new iframe
		var iFrame = $( "<iframe />", {
			"src": "HTML5/resource.html",
			"id": "canvasFrame"
		});
		
		if (iFrame)
		{
			// Add the canvas to the DOM then load the streamer
			$('#noflash').replaceWith($(iFrame));
		}
	}
	
	
	//---------------------------------------------------
	//-------------- SMALL SCREEN UTILS -----------------
	//---------------------------------------------------
	
	function upScaleForSmallScreens()
	{
		var cssLink = $("<link rel='stylesheet' type='text/css' href='/css/Resource/MobileResourcePage.css'>");
		$("head").append(cssLink); 
	}
	
	/**
	 * Send request to server indicating a small device has tried to access resource
	 */
	function recordSmallScreenStat()
	{
		var params = "?vp=" + screen.availWidth + "_" + screen.availHeight + "_dpr-" + window.devicePixelRatio;
		// alert(params);
		var img = document.createElement("img");
		img.src = "/Assets/stats/smallScreen.gif" + params;
		img.style.visibility="hidden";
		img.style.display="none";
	}
