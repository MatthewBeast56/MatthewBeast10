define([],
    function () {
    	var EndTestSnitchController = function () {
    		this.endTestData = {};
    		$(document).on('cleanup.betweenTest', $.proxy( this.collectEndTestData, this ));
    	};

    	EndTestSnitchController.prototype.collectEndTestData = function() {
            //collect data
    		$(document).trigger('collectEndTestData', $.proxy( this.addEndTestData, this ));

    		//send to snitch
    		!$.isEmptyObject(this.endTestData) && $(document).trigger('tn.featureMetrics', { metrics: this.endTestData });
            this.endTestData = {};
    	};

    	EndTestSnitchController.prototype.addEndTestData = function( data, type ) {
    		this.endTestData[type] = data;
    	};

    	return new EndTestSnitchController();
    }
);
