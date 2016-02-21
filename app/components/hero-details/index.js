System.register(['angular2/core', 'angular2/router', '../../services/heroes/index'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, index_1;
    var HeroDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            HeroDetailsComponent = (function () {
                function HeroDetailsComponent(_heroesService, _routeParams) {
                    this._heroesService = _heroesService;
                    this._routeParams = _routeParams;
                    this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
                    this.submited = false;
                }
                HeroDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // convert the route param to a number using + in JS
                    var id = +this._routeParams.get('id');
                    this._heroesService.getHero(id).then(function (hero) { return _this.hero = hero; });
                };
                HeroDetailsComponent.prototype.onSubmit = function () {
                    this.submited = true;
                };
                HeroDetailsComponent.prototype.goBack = function () {
                    window.history.back();
                };
                HeroDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-details',
                        inputs: ['hero'],
                        templateUrl: 'app/components/hero-details/template.html',
                        styleUrls: ['app/components/hero-details/style.css']
                    }), 
                    __metadata('design:paramtypes', [index_1.HeroesService, router_1.RouteParams])
                ], HeroDetailsComponent);
                return HeroDetailsComponent;
            })();
            exports_1("HeroDetailsComponent", HeroDetailsComponent);
        }
    }
});
//# sourceMappingURL=index.js.map