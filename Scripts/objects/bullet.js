"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var bullet = /** @class */ (function (_super) {
        __extends(bullet, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function bullet() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("bullet"), new objects.Vector2(), true) || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(bullet.prototype, "angle", {
            get: function () {
                return this.vector;
            },
            set: function (newAngle) {
                this.vector = newAngle;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        // protected _checkBounds(): void 
        // {
        //     if(this.y >= config.Game.SCREEN_HEIGHT + this.height)
        //     {
        //         this.Reset();
        //     }
        // }       
        // private _move():void
        // {
        //     this.position = Vector2.add(this.position, this.velocity);
        // }
        // public StartRun(): void{
        //    this._verticalSpeed=2;
        //    this.velocity= new Vector2(0,this._verticalSpeed)
        //     console.log("start run");
        // }
        // // PUBLIC METHODS
        // public Start(): void 
        // {
        //     // curve bullet
        //     //initializa
        //     this.type = enums.GameObjectType.ENEMY;
        //     // let it stop if needed
        //    this._verticalSpeed=2;
        //     this.velocity = new Vector2(0, this._verticalSpeed);
        //     this.Reset();
        // }
        // public Update(): void 
        // { 
        //     this.velocity = new Vector2(0, this._verticalSpeed);
        //     this._move();
        //     this._checkBounds();
        // }
        // public Reset(): void 
        // {
        //     //let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
        //   //  let randomY = util.Mathf.RandomRange(-this.height * 3, -this.height);
        //     this.position = new Vector2(370,880);
        // }
        bullet.prototype._checkBounds = function () {
            if (this.y < 400 || this.y > 1000 || this.x > 720 || this.x < 0) {
                this.Reset();
            }
        };
        bullet.prototype._move = function () {
            //  this.position = Vector2.add(this.position, this.velocity);
            this.position = objects.Vector2.add(this.position, this.angle);
        };
        bullet.prototype.StartRun = function () {
            this._verticalSpeed = -2;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            console.log("start run");
        };
        // PUBLIC METHODS
        bullet.prototype.Start = function () {
            // curve bullet
            //initializa
            this.type = enums.GameObjectType.ENEMY;
            // let it stop if needed
            this.angle = new objects.Vector2(0, 0);
            this._verticalSpeed = 0;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        };
        bullet.prototype.Update = function () {
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this._move();
            this._checkBounds();
        };
        bullet.prototype.Reset = function () {
            this._verticalSpeed = 0;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.angle = new objects.Vector2(0, 0);
            //let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            //  let randomY = util.Mathf.RandomRange(-this.height * 3, -this.height);
            this.position = new objects.Vector2(370, 880);
        };
        return bullet;
    }(objects.GameObject));
    objects.bullet = bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map