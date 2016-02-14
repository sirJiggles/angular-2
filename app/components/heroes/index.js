System.register(['angular2/core', '../hero-details/index', '../../services/heroes/index'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, index_1, index_2;
    var HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(_heroesService) {
                    this._heroesService = _heroesService;
                    this.title = 'Tour of heroes';
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
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'heroes',
                        directives: [index_1.HeroDetailsComponent],
                        styles: [
                            "\n\t\t\t  .selected {\n\t\t\t    background-color: #CFD8DC !important;\n\t\t\t    color: white;\n\t\t\t  }\n\t\t\t  .heroes {\n\t\t\t    margin: 0 0 2em 0;\n\t\t\t    list-style-type: none;\n\t\t\t    padding: 0;\n\t\t\t    width: 10em;\n\t\t\t  }\n\t\t\t  .heroes li {\n\t\t\t    cursor: pointer;\n\t\t\t    position: relative;\n\t\t\t    left: 0;\n\t\t\t    background-color: #EEE;\n\t\t\t    margin: .5em;\n\t\t\t    padding: .3em 0em;\n\t\t\t    height: 1.6em;\n\t\t\t    border-radius: 4px;\n\t\t\t  }\n\t\t\t  .heroes li.selected:hover {\n\t\t\t    color: white;\n\t\t\t  }\n\t\t\t  .heroes li:hover {\n\t\t\t    color: #607D8B;\n\t\t\t    background-color: #EEE;\n\t\t\t    left: .1em;\n\t\t\t  }\n\t\t\t  .heroes .text {\n\t\t\t    position: relative;\n\t\t\t    top: -3px;\n\t\t\t  }\n\t\t\t  .heroes .badge {\n\t\t\t    display: inline-block;\n\t\t\t    font-size: small;\n\t\t\t    color: white;\n\t\t\t    padding: 0.8em 0.7em 0em 0.7em;\n\t\t\t    background-color: #607D8B;\n\t\t\t    line-height: 1em;\n\t\t\t    position: relative;\n\t\t\t    left: -1px;\n\t\t\t    top: -4px;\n\t\t\t    height: 1.8em;\n\t\t\t    margin-right: .8em;\n\t\t\t    border-radius: 4px 0px 0px 4px;\n\t\t\t  }\n\t\t\t"
                        ],
                        template: "\n\t\t<hero-details [hero]=\"selectedHero\"></hero-details>\n\t\t<h2>All Heroes</h2>\n\t\t<ul class=\"heroes\">\n\t\t\t<li\n\t\t\t\t*ngFor=\"#hero of heroes\"\n\t\t\t\t(click)=\"onSelect(hero)\"\n\t\t\t\t[class.selected]=\"hero == selectedHero\">\n\t\t\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t"
                    }), 
                    __metadata('design:paramtypes', [index_2.HeroesService])
                ], HeroesComponent);
                return HeroesComponent;
            })();
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=index.js.map