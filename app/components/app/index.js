System.register(['angular2/core', 'angular2/router', '../heroes/index', '../dashboard/index', '../hero-details/index', '../../services/heroes/index'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, index_1, index_2, index_3, index_4;
    var AppComponent;
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
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Heroes app!';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            index_4.HeroesService,
                            router_1.ROUTER_PROVIDERS
                        ],
                        styleUrls: ['app/components/app/styles'],
                        templateUrl: 'app/components/app/template.html'
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: index_1.HeroesComponent
                        },
                        {
                            path: '/dahsboard',
                            name: 'Dashboard',
                            useAsDefault: true,
                            component: index_2.DashboardComponent
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetails',
                            component: index_3.HeroDetailsComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=index.js.map