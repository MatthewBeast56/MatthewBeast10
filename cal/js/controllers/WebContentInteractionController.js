/*global _:false, define:false, console:false, $:false */

/**
 * MatchInteractionController extends CustomInteractionController
 *
 */
define(
    [
        'controllers/CustomInteractionController',
        'controllers/ModuleController',
        'util/Dispatcher'
    ],
    function ( CustomInteractionController ,ModuleController, Dispatcher ) {
        "use strict";

        var WebContentInteractionController = function () {

            CustomInteractionController.call(this);
            this.moduleController = new ModuleController();
            this.persistAnswered = true;
            return this;
        };
        /*
         * Any prototype overrides must go below this assignment or else they
         * will be overwritten.
         */
        WebContentInteractionController.prototype = $.extend(true, {}, CustomInteractionController.prototype);

        WebContentInteractionController.prototype.init =  function (node) {
            //Enable next button in WC item anyways.
            this.moduleController.init(node);
            this.moduleController.stateTemplate.set('response', {});
            this.moduleController.storeState();
            this.ready();
        };

        WebContentInteractionController.prototype.testIfAnswered = function ( arg ) {
            return true;
        };


        WebContentInteractionController.prototype._getResponse = function() {
            return {};
        }


            return WebContentInteractionController;
    }
);
