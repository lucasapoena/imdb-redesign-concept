"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ThumbnailComponent = (function () {
    function ThumbnailComponent() {
    }
    return ThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ThumbnailComponent.prototype, "size", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ThumbnailComponent.prototype, "url", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ThumbnailComponent.prototype, "picture", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ThumbnailComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ThumbnailComponent.prototype, "labelTwo", void 0);
ThumbnailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'thumbnail',
        templateUrl: './thumbnail.component.html'
    })
], ThumbnailComponent);
exports.ThumbnailComponent = ThumbnailComponent;
//# sourceMappingURL=thumbnail.component.js.map