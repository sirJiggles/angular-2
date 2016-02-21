System.register(['angular2/core', 'angular2/router', '../hero-details/index', '../../services/heroes/index'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, index_1, index_2;
    var HeroesComponent;
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
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(_heroesService, _router) {
                    this._heroesService = _heroesService;
                    this._router = _router;
                    this.title = 'List of heroes';
                }
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroesService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroesComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                HeroesComponent.prototype.goToDetails = function () {
                    this._router.navigate(['HeroDetails', { id: this.selectedHero.id }]);
                };
                HeroesComponent.prototype.someCustomEvent = function (hero) {
                    console.log(hero);
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'heroes',
                        directives: [index_1.HeroDetailsComponent],
                        styleUrls: ['app/components/heroes/styles.css'],
                        templateUrl: 'app/components/heroes/template.html'
                    }), 
                    __metadata('design:paramtypes', [index_2.HeroesService, router_1.Router])
                ], HeroesComponent);
                return HeroesComponent;
            })();
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=index.js.map