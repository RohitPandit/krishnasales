(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\rohit\Documents\projects\krishnasales\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2lZ3":
    /*!******************************************************!*\
      !*** ./src/app/items-modal/items-modal.component.ts ***!
      \******************************************************/

    /*! exports provided: ItemsModalComponent */

    /***/
    function lZ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsModalComponent", function () {
        return ItemsModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-csv/ngx-csv */
      "QAmw");
      /* harmony import */


      var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["dataTable"];
      var _c1 = ["dataTable1"];

      function ItemsModalComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Employee Name : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.EmpName);
        }
      }

      function ItemsModalComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Customer Name : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.Name);
        }
      }

      function ItemsModalComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemsModalComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemsModalComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemsModalComponent_b_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "b", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemsModalComponent_b_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "b", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.Remark);
        }
      }

      function ItemsModalComponent_i_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 28);
        }
      }

      function ItemsModalComponent_tr_52_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " In Stock ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemsModalComponent_tr_52_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Out of Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemsModalComponent_tr_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ItemsModalComponent_tr_52_div_14_Template, 2, 0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ItemsModalComponent_tr_52_div_15_Template, 2, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r13 = ctx.$implicit;
          var i_r14 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r14 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r13.Item_Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r13.Item_Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r13.Qty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r13.MainDiscount, " %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r13.Vat, " %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r13.Stock_State === "In Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r13.Stock_State === "Out Of Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r9.currency, " ", item_r13.Price, "");
        }
      }

      function ItemsModalComponent_button_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ItemsModalComponent_button_58_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r17.results(ctx_r17.Order_Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Copy to SAP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemsModalComponent_button_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ItemsModalComponent_button_59_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r19.update_status(ctx_r19.Order_Id, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Confirm Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemsModalComponent_button_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ItemsModalComponent_button_60_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r21.update_status(ctx_r21.Order_Id, 2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Cancel Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var ItemsModalComponent = /*#__PURE__*/function () {
        function ItemsModalComponent(modalCtrl, http, authService, navParams) {
          _classCallCheck(this, ItemsModalComponent);

          this.modalCtrl = modalCtrl;
          this.http = http;
          this.authService = authService;
          this.navParams = navParams;
          this.loading = true;
          this.loading1 = true;
          this.orderData = [];
          this.viewOrderList = [];
          this.viewOrderListExportAscsv = [];
          this.Order_Id = '';
          this.Name = '';
          this.EmpName = '';
          this.Order_Date = '';
          this.Amount = '';
          this.Status = '';
          this.Remark = '';
          this.currency = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].currency;
        }

        _createClass(ItemsModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currentUser = this.authService.currentUserValue;
            this.item = this.navParams.get('items');
            this.loading1 = true;

            if (this.viewOrderList.length !== 0) {
              setTimeout(function () {
                _this.dataTable1 = $(_this.table1.nativeElement);

                _this.dataTable1.DataTable().clear().destroy();
              }, 300);
            }

            this.Order_Id = this.item.Order_Id;
            this.Name = this.item.Name;
            this.EmpName = this.item.EmpName;
            this.Order_Date = this.item.Order_Date_Format;
            this.Amount = this.item.Amount;
            this.Status = this.item.Status;
            this.Remark = this.item.Remark;
            this.viewOrderList = [];
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/get-user-order/") + this.item.Unique_Id).subscribe(function (res) {
              _this.viewOrderList = res.data;
              var array = ['Item Id', 'Item Name', 'Quantity', 'Status'];
              setTimeout(function () {
                if (_this.viewOrderList.length === res.data.length) {
                  _this.viewOrderListExportAscsv.push(array);

                  _this.viewOrderList.forEach(function (element1) {
                    var array1 = [element1['Item_Id'], element1['Item_Name'], element1['Qty'], element1['Stock_State']];

                    _this.viewOrderListExportAscsv.push(array1);
                  });

                  _this.loading1 = false;
                  _this.dataTable1 = $(_this.table1.nativeElement);

                  _this.dataTable1.DataTable();
                }
              }, 300);
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "dismissWithUpdate",
          value: function dismissWithUpdate() {
            this.modalCtrl.dismiss({
              'Status': 'Update Order'
            });
          }
        }, {
          key: "results",
          value: function results(id) {
            new ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_2__["ngxCsv"](this.viewOrderListExportAscsv, "Orders ORD-" + id);
            this.dismiss();
          }
        }, {
          key: "update_status",
          value: function update_status(id, status) {
            var _this2 = this;

            var formData = new FormData();
            formData.append('Status', status);
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/update-order-status/") + id, formData).subscribe(function (result) {
              if (result.status == "success") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Successfully', 'Update Order', 'success');

                _this2.dismissWithUpdate();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error', result.message, 'error');

                _this2.dismiss();
              }
            });
          }
        }]);

        return ItemsModalComponent;
      }();

      ItemsModalComponent.??fac = function ItemsModalComponent_Factory(t) {
        return new (t || ItemsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]));
      };

      ItemsModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ItemsModalComponent,
        selectors: [["app-items-modal"]],
        viewQuery: function ItemsModalComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table1 = _t.first);
          }
        },
        decls: 61,
        vars: 16,
        consts: [["mode", "ios", 1, "ion-no-border"], ["color", "light", "no-border", ""], ["slot", "end", "routerDirection", "backward", 2, "margin-right", "1rem", "cursor", "pointer", 3, "click"], ["slot", "icon-only", "name", "close-outline"], ["slot", "start"], [1, "white_card"], [1, "card-body"], ["class", "card-title", 4, "ngIf"], [1, "card-title"], [2, "color", "black"], ["class", "badge badge-pill badge_warning", 4, "ngIf"], ["class", "badge badge-pill badge_success", 4, "ngIf"], ["class", "badge badge-pill badge_danger", 4, "ngIf"], ["style", "color: black;", 4, "ngIf"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], ["id", "itemList", 1, "table-responsive"], [1, "align-middle", "mb-0", "table", "table-borderless", "table-striped", "table-hover"], ["dataTable1", ""], [4, "ngFor", "ngForOf"], [2, "margin-top", "2rem"], [2, "text-align", "right"], [1, "card-footer"], ["type", "button", "class", "btn btn_primary", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn_success", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn_danger", "data-dismiss", "modal", 3, "click", 4, "ngIf"], [1, "badge", "badge-pill", "badge_warning"], [1, "badge", "badge-pill", "badge_success"], [1, "badge", "badge-pill", "badge_danger"], [1, "fa", "fa-circle-o-notch", "fa-spin"], ["class", "badge badge-pill badge_primary", 4, "ngIf"], [1, "badge", "badge-pill", "badge_primary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn_primary", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn_success", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn_danger", 3, "click"]],
        template: function ItemsModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ItemsModalComponent_Template_ion_buttons_click_2_listener() {
              return ctx.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Order Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "ion-buttons", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ItemsModalComponent_div_13_Template, 4, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ItemsModalComponent_div_14_Template, 4, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Order Date : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "b", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Status : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, ItemsModalComponent_div_21_Template, 2, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ItemsModalComponent_div_22_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ItemsModalComponent_div_23_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Remark : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, ItemsModalComponent_b_26_Template, 2, 0, "b", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, ItemsModalComponent_b_27_Template, 2, 1, "b", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ItemsModalComponent_i_29_Template, 1, 0, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "table", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Sr.No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Item No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Item Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Qty");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Discount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Vat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Availability");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Unit Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, ItemsModalComponent_tr_52_Template, 18, 10, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h5", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, ItemsModalComponent_button_58_Template, 2, 0, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, ItemsModalComponent_button_59_Template, 2, 0, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, ItemsModalComponent_button_60_Template, 2, 0, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Order ORD - ", ctx.Order_Id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Role === "3" || ctx.currentUser.Role === "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Role === "2" || ctx.currentUser.Role === "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.Order_Date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Remark === "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Remark !== "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.viewOrderList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" Grand Total : ", ctx.currency, " ", ctx.Amount, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.loading1 && ctx.Status === "1" && ctx.currentUser.Role === "2" || ctx.currentUser.Role === "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "0" && ctx.currentUser.Role === "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "0" && ctx.currentUser.Role === "2");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtcy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ItemsModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-items-modal',
            templateUrl: './items-modal.component.html',
            styleUrls: ['./items-modal.component.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dataTable']
          }],
          table1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dataTable1']
          }]
        });
      })();
      /***/

    },

    /***/
    "3tlG":
    /*!****************************************!*\
      !*** ./src/app/shared/layout/index.ts ***!
      \****************************************/

    /*! exports provided: FooterComponent, HeaderComponent, TopmenuComponent */

    /***/
    function tlG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./footer.component */
      "Q+cP");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return _footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"];
      });
      /* harmony import */


      var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header.component */
      "mIkr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return _header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"];
      });
      /* harmony import */


      var _topmenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./topmenu.component */
      "vdYZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TopmenuComponent", function () {
        return _topmenu_component__WEBPACK_IMPORTED_MODULE_2__["TopmenuComponent"];
      });
      /***/

    },

    /***/
    "4yXv":
    /*!**************************************************!*\
      !*** ./src/app/customers/customers.component.ts ***!
      \**************************************************/

    /*! exports provided: CustomersComponent */

    /***/
    function yXv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
        return CustomersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/layout/header.component */
      "mIkr");
      /* harmony import */


      var _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/layout/topmenu.component */
      "vdYZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["dataTable"];

      function CustomersComponent_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r6.createCustomerCardFlag = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Create Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomersComponent_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r8.clearEditParam();
            return ctx_r8.createCustomerCardFlag = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomersComponent_div_19_h5_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Add Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomersComponent_div_19_h5_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Edit Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomersComponent_div_19_ng_container_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", item_r15.User_Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r15.Name);
        }
      }

      function CustomersComponent_div_19_button_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_div_19_button_40_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r16.addCustomer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomersComponent_div_19_button_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_div_19_button_41_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r18.updateCustomer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomersComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CustomersComponent_div_19_h5_2_Template, 2, 0, "h5", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CustomersComponent_div_19_h5_3_Template, 2, 0, "h5", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Customer Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomersComponent_div_19_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r20.Customer_Name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomersComponent_div_19_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.Email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomersComponent_div_19_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r23.Mobile = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomersComponent_div_19_Template_select_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r24.Employee_Id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Select one");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, CustomersComponent_div_19_ng_container_29_Template, 3, 2, "ng-container", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomersComponent_div_19_Template_input_ngModelChange_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r25.Username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Passowrd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomersComponent_div_19_Template_input_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r26.Password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, CustomersComponent_div_19_button_40_Template, 2, 0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, CustomersComponent_div_19_button_41_Template, 2, 0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_div_19_Template_button_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r27.createCustomerCardFlag = false;
            return ctx_r27.clearEditParam();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r2.edit_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.edit_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.Customer_Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.Email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.Mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.Employee_Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.empdata);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.Username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.Password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r2.edit_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.edit_ID);
        }
      }

      function CustomersComponent_i_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 44);
        }
      }

      function CustomersComponent_tr_49_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomersComponent_tr_49_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomersComponent_tr_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, CustomersComponent_tr_49_div_14_Template, 2, 0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, CustomersComponent_tr_49_div_15_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_tr_49_Template_i_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var item_r28 = ctx.$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r32.setEditParam(item_r28.User_Id, item_r28.Name, item_r28.Email, item_r28.Mobile, item_r28.Username, item_r28.Password, item_r28.Employee_Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " \xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_tr_49_Template_span_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var item_r28 = ctx.$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r34["delete"](item_r28.User_Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = ctx.$implicit;
          var i_r29 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r29 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r28.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r28.Email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r28.Mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r28.Username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r28.EmpName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r28.Is_Active === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r28.Is_Active === "1");
        }
      }

      var CustomersComponent = /*#__PURE__*/function () {
        function CustomersComponent(router, title, http, authService) {
          _classCallCheck(this, CustomersComponent);

          this.router = router;
          this.title = title;
          this.http = http;
          this.authService = authService;
          this.addItemS = false;
          this.editItemS = false;
          this.Customer_Name = '';
          this.Email = '';
          this.Mobile = '';
          this.Username = '';
          this.Password = '';
          this.Employee_Id = '';
          this.loading = true;
          this.edit_ID = '';
          this.createCustomerCardFlag = false;
          this.customerdata = [];
        }

        _createClass(CustomersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.currentUser = this.authService.currentUserValue;

            if (this.currentUser['Role'] == 3) {
              this.router.navigate(['/customer-dashboard']);
            } else if (this.currentUser['Role'] == 2) {
              this.router.navigate(['/employee-dashboard']);
            }

            this.title.setTitle("Customers | KrishnaSales");
            this.getAllBonus();
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-all-employees")).subscribe(function (res) {
              _this3.empdata = res.data;
            });
          }
        }, {
          key: "getAllBonus",
          value: function getAllBonus() {
            var _this4 = this;

            if (this.customerdata.length !== 0) {
              setTimeout(function () {
                _this4.dataTable = $(_this4.table.nativeElement);

                _this4.dataTable.DataTable().clear().destroy();
              }, 300);
            }

            this.loading = true;
            this.customerdata = [];
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-all-customers")).subscribe(function (item) {
              _this4.loading = false;
              _this4.customerdata = item.data;
              setTimeout(function () {
                _this4.dataTable = $(_this4.table.nativeElement);

                _this4.dataTable.DataTable();
              }, 300);
            });
          }
        }, {
          key: "addCustomer",
          value: function addCustomer() {
            var _this5 = this;

            var formData = new FormData();
            formData.append('Name', this.Customer_Name);
            formData.append('Email', this.Email);
            formData.append('Mobile', this.Mobile);
            formData.append('Username', this.Username);
            formData.append('Password', this.Password);
            formData.append('Employee_Id', this.Employee_Id);
            this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/create-customer"), formData).subscribe(function (result) {
              if (result.status == "success") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Successfully', 'Customer Created', 'success');
                _this5.Customer_Name = '';
                _this5.Email = '';
                _this5.Mobile = '';
                _this5.Username = '';
                _this5.Password = '';
                _this5.createCustomerCardFlag = false;

                _this5.getAllBonus();

                _this5.clearEditParam();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', result.message, 'error');
              }
            });
          }
        }, {
          key: "updateCustomer",
          value: function updateCustomer() {
            var _this6 = this;

            var formData = new FormData();
            formData.append('Name', this.Customer_Name);
            formData.append('Email', this.Email);
            formData.append('Mobile', this.Mobile);
            formData.append('Username', this.Username);
            formData.append('Password', this.Password);
            formData.append('Employee_Id', this.Employee_Id);
            this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/update-customer/") + this.edit_ID, formData).subscribe(function (result) {
              if (result.status == "success") {
                _this6.Customer_Name = '';
                _this6.Email = '';
                _this6.Mobile = '';
                _this6.Username = '';
                _this6.Password = '';
                _this6.createCustomerCardFlag = false;
                _this6.edit_ID = "";

                _this6.clearEditParam();

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Successfully', 'Customer Updated', 'success');

                _this6.getAllBonus();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', result.message, 'error');
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this7 = this;

            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/delete-customer/") + id).subscribe(function (result) {
              if (result.status == "success") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Successfully', 'Customer Deleted', 'success');

                _this7.getAllBonus();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', result.message, 'error');
              }
            });
          }
        }, {
          key: "setEditParam",
          value: function setEditParam(id, eempname, eemial, emobile, eusername, password, employee_id) {
            this.Customer_Name = eempname;
            this.Email = eemial;
            this.Mobile = emobile;
            this.Username = eusername;
            this.Password = password;
            this.Employee_Id = employee_id;
            this.edit_ID = id;
          }
        }, {
          key: "clearEditParam",
          value: function clearEditParam() {
            this.Customer_Name = "";
            this.Email = "";
            this.Mobile = "";
            this.Username = "";
            this.Password = "";
            this.Employee_Id = "";
            this.edit_ID = "";
          }
        }]);

        return CustomersComponent;
      }();

      CustomersComponent.??fac = function CustomersComponent_Factory(t) {
        return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
      };

      CustomersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CustomersComponent,
        selectors: [["app-customers"]],
        viewQuery: function CustomersComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 50,
        vars: 5,
        consts: [[1, "app-container", "app-theme-white", "body-tabs-shadow", "fixed-sidebar", "fixed-header", "closed-sidebar-mobile", "closed-sidebar"], [1, "app-main"], [1, "app-main__outer"], [1, "app-main__inner", 2, "background", "#f3f6f9"], [1, "app-page-title", 2, "background", "#f3f6f9"], [1, "page-title-wrapper"], [1, "page-title-heading"], [1, "page-title-icon", 2, "background", "transparent", "box-shadow", "unset"], [1, "pe-7s-users", 2, "color", "#8950fc"], [2, "color", "black"], [1, "page-title-actions"], ["class", "btn mr-3 btn_primary", 3, "click", 4, "ngIf"], ["class", "btn mr-3 btn_warning", 3, "click", 4, "ngIf"], [1, "row"], [1, "col-md-12"], ["class", "main-card mb-3 white_card", 4, "ngIf"], [1, "main-card", "mb-3", "white_card"], [1, "card-header"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "card-body"], [1, "table-responsive"], [1, "align-middle", "mb-0", "table", "table-borderless", "table-striped", "table-hover"], ["dataTable", ""], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "btn", "mr-3", "btn_primary", 3, "click"], [1, "btn", "mr-3", "btn_warning", 3, "click"], ["class", "card-title", 4, "ngIf"], [1, ""], [1, "col-md-4"], [1, "position-relative", "form-group"], ["name", "customername", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "email", "type", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "mmobile", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exampleSelect", 1, ""], ["name", "select", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", ""], ["name", "username", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "password", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "mt-1 btn btn_primary", 3, "click", 4, "ngIf"], [1, "mt-1", "btn", "btn-default", 2, "background", "transparent", 3, "click"], [1, "card-title"], [3, "value"], [1, "mt-1", "btn", "btn_primary", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin"], ["class", "badge badge-pill badge-dark", 4, "ngIf"], ["class", "badge badge-pill badge_success", 4, "ngIf"], [1, "text-muted", 2, "cursor", "pointer"], [1, "fa", "fa-pen", 2, "color", "black", 3, "click"], [1, "text-muted", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-trash", "text_danger"], [1, "badge", "badge-pill", "badge-dark"], [1, "badge", "badge-pill", "badge_success"]],
        template: function CustomersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-layout-topmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Customers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, CustomersComponent_button_15_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, CustomersComponent_button_16_Template, 2, 0, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, CustomersComponent_div_19_Template, 44, 11, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Customers List \xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, CustomersComponent_i_25_Template, 1, 0, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "table", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "SR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Employee Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, CustomersComponent_tr_49_Template, 22, 8, "tr", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.createCustomerCardFlag && !ctx.edit_ID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.createCustomerCardFlag || ctx.edit_ID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.createCustomerCardFlag || ctx.edit_ID != "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.customerdata);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_9__["TopmenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["??angular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-customers',
            templateUrl: './customers.component.html',
            styleUrls: ['./customers.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dataTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../items-modal/items-modal.component */
      "2lZ3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/layout/header.component */
      "mIkr");
      /* harmony import */


      var _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shared/layout/topmenu.component */
      "vdYZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["dataTable"];
      var _c1 = ["dataTable1"];
      var _c2 = ["dataTable2"];

      function HomeComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function HomeComponent_i_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "i", 35);
        }
      }

      function HomeComponent_tr_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](item_r7.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](item_r7[0].tCustomer);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](item_r7[0].pOrder);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](item_r7[0].cOrder);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](item_r7[0].c1Order);
        }
      }

      function HomeComponent_i_103_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "i", 35);
        }
      }

      function HomeComponent_tr_125_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function HomeComponent_tr_125_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function HomeComponent_tr_125_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function HomeComponent_tr_125_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "40%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function HomeComponent_tr_125_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function HomeComponent_tr_125_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "0%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function HomeComponent_tr_125_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 51);
        }
      }

      function HomeComponent_tr_125_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 52);
        }
      }

      function HomeComponent_tr_125_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 53);
        }
      }

      function HomeComponent_tr_125_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, HomeComponent_tr_125_div_10_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, HomeComponent_tr_125_div_11_Template, 2, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, HomeComponent_tr_125_div_12_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, HomeComponent_tr_125_div_14_Template, 4, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, HomeComponent_tr_125_div_15_Template, 4, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, HomeComponent_tr_125_div_16_Template, 4, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, HomeComponent_tr_125_div_18_Template, 1, 0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, HomeComponent_tr_125_div_19_Template, 1, 0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, HomeComponent_tr_125_div_20_Template, 1, 0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HomeComponent_tr_125_Template_i_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r21);

            var item_r9 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r20.openEditModal(item_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r9 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Q - ", item_r9.Order_Id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](item_r9.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](item_r9.Order_Date_Format);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx_r6.currency, " ", item_r9.Amount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", item_r9.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", item_r9.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", item_r9.Status === "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", item_r9.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", item_r9.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", item_r9.Status === "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", item_r9.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", item_r9.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", item_r9.Status === "2");
        }
      }

      var _c3 = function _c3() {
        return ["/order-history"];
      };

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(router, title, http, authService, modalController) {
          _classCallCheck(this, HomeComponent);

          this.router = router;
          this.title = title;
          this.http = http;
          this.authService = authService;
          this.modalController = modalController;
          this.currency = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].currency;
          this.totalCustomer = 0;
          this.activeCustomer = 0;
          this.totalEmp = 0;
          this.activeEmp = 0;
          this.totalOrders = 0;
          this.pendinngOrders = 0;
          this.confirmOrders = 0;
          this.cancelOrder = 0;
          this.orders = [];
          this.empdata = [];
          this.viewOrderList = [];
          this.viewOrderListExportAscsv = [];
          this.Order_Id = '';
          this.Name = '';
          this.Order_Date = '';
          this.Amount = '';
          this.Status = '';
          this.Remark = '';
          this.loading = true;
          this.loadingEmp = true;
          this.loadingOrder = true;
          this.loading1 = true;
        }

        _createClass(HomeComponent, [{
          key: "openEditModal",
          value: function openEditModal(items) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_3__["ItemsModalComponent"],
                        componentProps: {
                          'items': items
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.currentUser = this.authService.currentUserValue;

            if (this.currentUser['Role'] == 3) {
              this.router.navigate(['/customer-dashboard']);
            } else if (this.currentUser['Role'] == 2) {
              this.router.navigate(['/employee-dashboard']);
            }

            this.title.setTitle("Dashboard | KrishnaSales");
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-all-employees")).subscribe(function (res) {
              res.data.forEach(function (element) {
                _this8.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-customer-count/") + element['User_Id']).subscribe(function (customer) {
                  _this8.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-pending-count-from-employee/") + element['User_Id']).subscribe(function (pending) {
                    _this8.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-confirm-count-from-employee/") + element['User_Id']).subscribe(function (confirm) {
                      _this8.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-cancel-count-from-employee/") + element['User_Id']).subscribe(function (cancel) {
                        Array.prototype.push.apply(element, [{
                          tCustomer: customer.data,
                          pOrder: pending.data.length,
                          cOrder: confirm.data.length,
                          c1Order: cancel.data.length
                        }]);

                        _this8.empdata.push(element);
                      });
                    });
                  });
                });
              });
              setInterval(function () {
                if (_this8.empdata.length === res.data.length) {
                  _this8.loadingEmp = false;
                  _this8.dataTable = $(_this8.table.nativeElement);

                  _this8.dataTable.DataTable();

                  clearInterval();
                }
              }, 1000);
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-all-orders")).subscribe(function (res) {
              _this8.loadingOrder = false;
              _this8.orders = res.data;
              setTimeout(function () {
                _this8.dataTable1 = $(_this8.table1.nativeElement);

                _this8.dataTable1.DataTable();
              }, 300);
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-employees-count")).subscribe(function (res) {
              _this8.loading = false;
              _this8.totalEmp = res.data;
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-employees-active-count")).subscribe(function (res) {
              _this8.loading = false;
              _this8.activeEmp = res.data;
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-customers-count")).subscribe(function (res) {
              _this8.loading = false;
              _this8.totalCustomer = res.data;
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-customers-active-count")).subscribe(function (res) {
              _this8.loading = false;
              _this8.activeCustomer = res.data;
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-count")).subscribe(function (res) {
              _this8.loading = false;
              _this8.totalOrders = res.data;
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-pending-count")).subscribe(function (res) {
              _this8.loading = false;
              _this8.pendinngOrders = res.data;
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-confirm-count")).subscribe(function (res) {
              _this8.loading = false;
              _this8.confirmOrders = res.data;
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-cancel-count")).subscribe(function (res) {
              _this8.loading = false;
              _this8.cancelOrder = res.data;
            });
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.??fac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]));
      };

      HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        viewQuery: function HomeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table1 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table2 = _t.first);
          }
        },
        decls: 126,
        vars: 15,
        consts: [[1, "app-container", "app-theme-white", "body-tabs-shadow", "fixed-sidebar", "fixed-header", "closed-sidebar-mobile", "closed-sidebar"], [1, "app-main"], [1, "app-main__outer"], [1, "app-main__inner", 2, "background", "#f3f6f9"], [1, "app-page-title"], [1, "page-title-wrapper"], [1, "page-title-heading"], [1, "page-title-icon", 2, "background", "transparent", "box-shadow", "unset"], [1, "pe-7s-rocket", 2, "color", "#8950fc"], [2, "color", "black"], [1, "page-title-actions"], [1, "btn", "mr-3", "btn_danger", 3, "routerLink"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-6"], [1, "main-card", "mb-3", "white_card"], [1, "card-body"], [1, "row", 2, "padding", "7px"], [1, "col"], [1, "nav", "flex-column"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 2, "text-decoration", "none", "font-size", "1.25rem!important", "color", "black", "font-weight", "600!important"], [1, "ml-auto", "badge", "bg-dark", 2, "color", "white", "font-size", "xx-large"], [1, "ml-auto", "badge", "bg_success", 2, "color", "white", "font-size", "xx-large"], [1, "ml-auto", "badge", "bg_primary", 2, "color", "white", "font-size", "xx-large"], [1, "ml-auto", "badge", "bg_warning", 2, "color", "white", "font-size", "xx-large"], [1, "ml-auto", "badge", "bg_danger", 2, "color", "white", "font-size", "xx-large"], [1, "card-header"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "table-responsive"], [1, "align-middle", "mb-0", "table", "table-borderless", "table-striped", "table-hover"], ["dataTable", ""], [1, "text-center"], [4, "ngFor", "ngForOf"], ["dataTable1", ""], [1, "fa", "fa-circle-o-notch", "fa-spin"], ["class", "badge badge-pill badge_warning", 4, "ngIf"], ["class", "badge badge-pill badge_success", 4, "ngIf"], ["class", "badge badge-pill badge_danger", 4, "ngIf"], ["class", "text-left", 4, "ngIf"], [1, "progress"], ["class", "progress-bar  bg_warning", "role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 40%;", 4, "ngIf"], ["class", "progress-bar  bg_success", "role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 100%;", 4, "ngIf"], ["class", "progress-bar  bg_danger", "role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 0%;", 4, "ngIf"], [1, "text-muted", 2, "cursor", "pointer"], [1, "fa", "fa-eye", "text_primary", 3, "click"], [1, "badge", "badge-pill", "badge_warning"], [1, "badge", "badge-pill", "badge_success"], [1, "badge", "badge-pill", "badge_danger"], [1, "text-left"], [1, "hide-on-small-and-down", 2, "float", "right"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_warning", 2, "width", "40%"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_success", 2, "width", "100%"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_danger", 2, "width", "0%"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "app-layout-topmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Order Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, HomeComponent_div_17_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, " Total Employees ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, " Total Customers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " Active Employees ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, " Active Customers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, " Total Orders ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, " Total Pending Orders ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, " Total Confirmed Order ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, " Total Cancelled Orders ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "Employee Report \xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](80, HomeComponent_i_80_Template, 1, 0, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "table", 30, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "th", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "Employee Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "th", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "Customers");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "th", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "th", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "Confirmed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "th", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "Cancelled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](98, HomeComponent_tr_98_Template, 11, 5, "tr", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Order Progress \xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](103, HomeComponent_i_103_Template, 1, 0, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "table", 30, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111, "Order Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](113, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, "Order Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](121, "Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "th", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](125, HomeComponent_tr_125_Template, 24, 14, "tr", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](14, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.totalEmp);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.totalCustomer);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.activeEmp);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.activeCustomer);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.totalOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.pendinngOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.confirmOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.cancelOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loadingEmp);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.empdata);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loadingOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.orders);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_10__["TopmenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["RouterLinkDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }, {
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dataTable']
          }],
          table1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dataTable1']
          }],
          table2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dataTable2']
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: "http://165.232.183.82/krishnasalesapi/index.php",
        // apiUrl: "http://localhost:8080",
        currency: 'KES'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "IfXj":
    /*!********************************************************************!*\
      !*** ./src/app/employee-dashboard/employee-dashboard.component.ts ***!
      \********************************************************************/

    /*! exports provided: EmployeeDashboardComponent */

    /***/
    function IfXj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeDashboardComponent", function () {
        return EmployeeDashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../items-modal/items-modal.component */
      "2lZ3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/layout/header.component */
      "mIkr");
      /* harmony import */


      var _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shared/layout/topmenu.component */
      "vdYZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["dataTable"];
      var _c1 = ["dataTable1"];

      function EmployeeDashboardComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EmployeeDashboardComponent_i_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "i", 35);
        }
      }

      function EmployeeDashboardComponent_tr_96_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EmployeeDashboardComponent_tr_96_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EmployeeDashboardComponent_tr_96_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EmployeeDashboardComponent_tr_96_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "40%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EmployeeDashboardComponent_tr_96_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EmployeeDashboardComponent_tr_96_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "0%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EmployeeDashboardComponent_tr_96_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 51);
        }
      }

      function EmployeeDashboardComponent_tr_96_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 52);
        }
      }

      function EmployeeDashboardComponent_tr_96_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 53);
        }
      }

      function EmployeeDashboardComponent_tr_96_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, EmployeeDashboardComponent_tr_96_div_12_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, EmployeeDashboardComponent_tr_96_div_13_Template, 2, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, EmployeeDashboardComponent_tr_96_div_14_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, EmployeeDashboardComponent_tr_96_div_16_Template, 4, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, EmployeeDashboardComponent_tr_96_div_17_Template, 4, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, EmployeeDashboardComponent_tr_96_div_18_Template, 4, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, EmployeeDashboardComponent_tr_96_div_20_Template, 1, 0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, EmployeeDashboardComponent_tr_96_div_21_Template, 1, 0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, EmployeeDashboardComponent_tr_96_div_22_Template, 1, 0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EmployeeDashboardComponent_tr_96_Template_i_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r16);

            var Item_r4 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r15.openEditModal(Item_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var Item_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r5 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("ORD - ", Item_r4.Order_Id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](Item_r4.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](Item_r4.Order_Date_Format);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx_r3.currency, " ", Item_r4.Amount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "2");
        }
      }

      var _c2 = function _c2() {
        return ["/employee-order-history"];
      };

      var EmployeeDashboardComponent = /*#__PURE__*/function () {
        function EmployeeDashboardComponent(router, title, http, authService, modalController) {
          _classCallCheck(this, EmployeeDashboardComponent);

          this.router = router;
          this.title = title;
          this.http = http;
          this.authService = authService;
          this.modalController = modalController;
          this.totalOrders = 0;
          this.pendinngOrders = 0;
          this.confirmOrders = 0;
          this.cancelOrder = 0;
          this.currency = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].currency;
          this.loading = true;
          this.loading1 = true;
          this.orderData = [];
          this.viewOrderList = [];
          this.viewOrderListExportAscsv = [];
          this.Order_Id = '';
          this.Name = '';
          this.Order_Date = '';
          this.Amount = '';
          this.Status = '';
          this.Remark = '';
        }

        _createClass(EmployeeDashboardComponent, [{
          key: "openEditModal",
          value: function openEditModal(items) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this9 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_3__["ItemsModalComponent"],
                        componentProps: {
                          'items': items
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (data) {
                        var user = data['data'];

                        if (user['Status']) {
                          _this9.ngOnInit();
                        }
                      });
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.authService.currentUserValue;

            if (this.currentUser['Role'] == 1) {
              this.router.navigate(['/']);
            } else if (this.currentUser['Role'] == 3) {
              this.router.navigate(['/customer-dashboard']);
            }

            this.title.setTitle("Employee Dashboard | KrishnaSales");
            this.get_user_orders();
            this.getAllCount();
          }
        }, {
          key: "getAllCount",
          value: function getAllCount() {
            var _this10 = this;

            this.totalOrders = 0;
            this.pendinngOrders = 0;
            this.confirmOrders = 0;
            this.cancelOrder = 0;
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-count-from-employee/") + this.currentUser.User_Id).subscribe(function (res) {
              _this10.loading = false;
              _this10.totalOrders = res.data.length;
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-pending-count-from-employee/") + this.currentUser.User_Id).subscribe(function (res) {
              _this10.loading = false;
              _this10.pendinngOrders = res.data.length;
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-confirm-count-from-employee/") + this.currentUser.User_Id).subscribe(function (res) {
              _this10.loading = false;
              _this10.confirmOrders = res.data.length;
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-cancel-count-from-employee/") + this.currentUser.User_Id).subscribe(function (res) {
              _this10.loading = false;
              _this10.cancelOrder = res.data.length;
            });
          }
        }, {
          key: "get_user_orders",
          value: function get_user_orders() {
            var _this11 = this;

            if (this.orderData.length !== 0) {
              setTimeout(function () {
                _this11.dataTable = $(_this11.table.nativeElement);

                _this11.dataTable.DataTable().clear().destroy();
              }, 300);
            }

            this.orderData = [];
            this.loading = true;
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-orders-from-user-latest-seven-days-employee/") + this.currentUser.User_Id).subscribe(function (res) {
              _this11.orderData = res.data;
              setTimeout(function () {
                if (_this11.orderData.length === res.data.length) {
                  _this11.loading = false;
                  _this11.dataTable = $(_this11.table.nativeElement);

                  _this11.dataTable.DataTable();
                }
              }, 300);
            });
          }
        }]);

        return EmployeeDashboardComponent;
      }();

      EmployeeDashboardComponent.??fac = function EmployeeDashboardComponent_Factory(t) {
        return new (t || EmployeeDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]));
      };

      EmployeeDashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: EmployeeDashboardComponent,
        selectors: [["app-employee-dashboard"]],
        viewQuery: function EmployeeDashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table1 = _t.first);
          }
        },
        decls: 97,
        vars: 11,
        consts: [[1, "app-container", "app-theme-white", "body-tabs-shadow", "fixed-sidebar", "fixed-header", "closed-sidebar-mobile", "closed-sidebar"], [1, "app-main"], [1, "app-main__outer"], [1, "app-main__inner", 2, "background", "#f3f6f9"], [1, "app-page-title", 2, "background", "#f3f6f9"], [1, "page-title-wrapper"], [1, "page-title-heading"], [1, "page-title-icon", 2, "background", "transparent", "box-shadow", "unset"], [1, "pe-7s-rocket", 2, "color", "#8950fc"], [2, "color", "black"], [1, "page-title-actions"], [1, "btn", "mr-3", "btn_danger", 3, "routerLink"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-6"], [1, "main-card", "mb-3", "white_card"], [1, "card-body"], [1, "row", 2, "padding", "7px"], [1, "col"], [1, "nav", "flex-column"], [1, "nav-item"], [2, "font-size", "1.01rem", "color", "#3f4254!important", "font-weight", "600!important", "margin-bottom", ".25rem!important"], ["href", "javascript:void(0);", 1, "nav-link", 2, "text-decoration", "none", "font-size", "1.25rem!important", "color", "black", "font-weight", "600!important"], [1, "ml-auto", "badge", "bg-dark", 2, "color", "white", "font-size", "xx-large"], [1, "ml-auto", "badge", "bg_warning", 2, "color", "white", "font-size", "xx-large"], [1, "ml-auto", "badge", "bg_success", 2, "color", "white", "font-size", "xx-large"], [1, "ml-auto", "badge", "bg_danger", 2, "color", "white", "font-size", "xx-large"], [1, "col-md-12"], [1, "card-header"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "table-responsive"], [1, "align-middle", "mb-0", "table", "table-borderless", "table-striped", "table-hover"], ["dataTable", ""], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "fa", "fa-circle-o-notch", "fa-spin"], ["class", "badge badge-pill badge_warning", 4, "ngIf"], ["class", "badge badge-pill badge_success", 4, "ngIf"], ["class", "badge badge-pill badge_danger", 4, "ngIf"], ["class", "text-left", 4, "ngIf"], [1, "progress"], ["class", "progress-bar  bg_warning", "role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 40%;", 4, "ngIf"], ["class", "progress-bar  bg_success", "role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 100%;", 4, "ngIf"], ["class", "progress-bar  bg_danger", "role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 0%;", 4, "ngIf"], [1, "text-muted", 2, "cursor", "pointer"], [1, "fa", "fa-eye", "text_primary", 3, "click"], [1, "badge", "badge-pill", "badge_warning"], [1, "badge", "badge-pill", "badge_success"], [1, "badge", "badge-pill", "badge_danger"], [1, "text-left"], [1, "hide-on-small-and-down", 2, "float", "right"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_warning", 2, "width", "40%"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_success", 2, "width", "100%"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_danger", 2, "width", "0%"]],
        template: function EmployeeDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "app-layout-topmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Order Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, EmployeeDashboardComponent_div_17_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Designation");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Joined");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](38, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, " Total Orders ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, " Pending Orders ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, " Confirm Orders ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, " Cancelled Orders ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "Order Progress \xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](72, EmployeeDashboardComponent_i_72_Template, 1, 0, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "table", 31, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, "SR");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, "Order Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Order Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "th", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](96, EmployeeDashboardComponent_tr_96_Template, 26, 15, "tr", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](10, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.currentUser.Designation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.currentUser.Created_On);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.totalOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.pendinngOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.confirmOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.cancelOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.orderData);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_10__["TopmenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["RouterLinkDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](EmployeeDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-employee-dashboard',
            templateUrl: './employee-dashboard.component.html',
            styleUrls: ['./employee-dashboard.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }, {
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dataTable']
          }],
          table1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dataTable1']
          }]
        });
      })();
      /***/

    },

    /***/
    "JEGr":
    /*!********************************************************************!*\
      !*** ./src/app/user-order-history/user-order-history.component.ts ***!
      \********************************************************************/

    /*! exports provided: UserOrderHistoryComponent */

    /***/
    function JEGr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserOrderHistoryComponent", function () {
        return UserOrderHistoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../items-modal/items-modal.component */
      "2lZ3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/layout/header.component */
      "mIkr");
      /* harmony import */


      var _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shared/layout/topmenu.component */
      "vdYZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["dataTable"];
      var _c1 = ["dataTable1"];

      function UserOrderHistoryComponent_i_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "i", 21);
        }
      }

      function UserOrderHistoryComponent_tr_43_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserOrderHistoryComponent_tr_43_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserOrderHistoryComponent_tr_43_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserOrderHistoryComponent_tr_43_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "40%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserOrderHistoryComponent_tr_43_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserOrderHistoryComponent_tr_43_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "0%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserOrderHistoryComponent_tr_43_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 37);
        }
      }

      function UserOrderHistoryComponent_tr_43_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 38);
        }
      }

      function UserOrderHistoryComponent_tr_43_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 39);
        }
      }

      function UserOrderHistoryComponent_tr_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, UserOrderHistoryComponent_tr_43_div_12_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, UserOrderHistoryComponent_tr_43_div_13_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, UserOrderHistoryComponent_tr_43_div_14_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, UserOrderHistoryComponent_tr_43_div_16_Template, 4, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, UserOrderHistoryComponent_tr_43_div_17_Template, 4, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, UserOrderHistoryComponent_tr_43_div_18_Template, 4, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, UserOrderHistoryComponent_tr_43_div_20_Template, 1, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, UserOrderHistoryComponent_tr_43_div_21_Template, 1, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, UserOrderHistoryComponent_tr_43_div_22_Template, 1, 0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function UserOrderHistoryComponent_tr_43_Template_i_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r15);

            var Item_r3 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r14.openEditModal(Item_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var Item_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r4 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("ORD - ", Item_r3.Order_Id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](Item_r3.EmpName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](Item_r3.Order_Date_Format);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx_r2.currency, " ", Item_r3.Amount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "2");
        }
      }

      var UserOrderHistoryComponent = /*#__PURE__*/function () {
        function UserOrderHistoryComponent(title, http, authService, router, modalController) {
          _classCallCheck(this, UserOrderHistoryComponent);

          this.title = title;
          this.http = http;
          this.authService = authService;
          this.router = router;
          this.modalController = modalController;
          this.orderData = [];
          this.loading = true;
          this.loading1 = true;
          this.currency = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].currency;
          this.viewOrderList = [];
          this.Order_Id = '';
          this.EmpName = '';
          this.Order_Date = '';
          this.Amount = '';
          this.Status = '';
          this.Remark = '';
        }

        _createClass(UserOrderHistoryComponent, [{
          key: "openEditModal",
          value: function openEditModal(items) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_3__["ItemsModalComponent"],
                        componentProps: {
                          'items': items
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.authService.currentUserValue;

            if (this.currentUser['Role'] == 1) {
              this.router.navigate(['/']);
            } else if (this.currentUser['Role'] == 2) {
              this.router.navigate(['/employee-dashboard']);
            }

            this.get_user_orders();
            this.title.setTitle("Customer Order History | KrishnaSales");
          }
        }, {
          key: "get_user_orders",
          value: function get_user_orders() {
            var _this12 = this;

            this.orderData = [];
            this.loading = true;
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-orders-from-user/") + this.currentUser.User_Id).subscribe(function (res) {
              _this12.loading = false;
              _this12.orderData = res.data;
              setTimeout(function () {
                _this12.dataTable = $(_this12.table.nativeElement);

                _this12.dataTable.DataTable();
              }, 300);
            });
          }
        }]);

        return UserOrderHistoryComponent;
      }();

      UserOrderHistoryComponent.??fac = function UserOrderHistoryComponent_Factory(t) {
        return new (t || UserOrderHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]));
      };

      UserOrderHistoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: UserOrderHistoryComponent,
        selectors: [["app-user-order-history"]],
        viewQuery: function UserOrderHistoryComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table1 = _t.first);
          }
        },
        decls: 44,
        vars: 2,
        consts: [[1, "app-container", "app-theme-white", "body-tabs-shadow", "fixed-sidebar", "fixed-header", "closed-sidebar", "closed-sidebar-mobile"], [1, "app-main"], [1, "app-main__outer"], [1, "app-main__inner", 2, "background", "#f3f6f9"], [1, "app-page-title", 2, "background", "#f3f6f9"], [1, "page-title-wrapper"], [1, "page-title-heading"], [1, "page-title-icon", 2, "background", "transparent", "box-shadow", "unset"], [1, "pe-7s-clock", 2, "color", "#8950fc"], [2, "color", "black"], [1, "row"], [1, "col-md-12"], [1, "main-card", "mb-3", "white_card"], [1, "card-header"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "card-body"], [1, "table-responsive"], [1, "align-middle", "mb-0", "table", "table-borderless", "table-striped", "table-hover"], ["dataTable", ""], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "fa", "fa-circle-o-notch", "fa-spin"], ["class", "badge badge-pill badge_warning", 4, "ngIf"], ["class", "badge badge-pill badge_success", 4, "ngIf"], ["class", "badge badge-pill badge_danger", 4, "ngIf"], ["class", "text-left", 4, "ngIf"], [1, "progress"], ["class", "progress-bar  bg_warning", "role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 40%;", 4, "ngIf"], ["class", "progress-bar  bg_success", "role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 100%;", 4, "ngIf"], ["class", "progress-bar  bg_danger", "role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 0%;", 4, "ngIf"], [1, "text-muted", 2, "cursor", "pointer"], [1, "fa", "fa-eye", "text_primary", 3, "click"], [1, "badge", "badge-pill", "badge_warning"], [1, "badge", "badge-pill", "badge_success"], [1, "badge", "badge-pill", "badge_danger"], [1, "text-left"], [1, "hide-on-small-and-down", 2, "float", "right"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_warning", 2, "width", "40%"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_success", 2, "width", "100%"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_danger", 2, "width", "0%"]],
        template: function UserOrderHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "app-layout-topmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Order History ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "My Order Progress \xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, UserOrderHistoryComponent_i_19_Template, 1, 0, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "table", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "SR");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Order Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Employee Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Order Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](43, UserOrderHistoryComponent_tr_43_Template, 26, 15, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.orderData);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_10__["TopmenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW9yZGVyLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](UserOrderHistoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-user-order-history',
            templateUrl: './user-order-history.component.html',
            styleUrls: ['./user-order-history.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dataTable']
          }],
          table1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dataTable1']
          }]
        });
      })();
      /***/

    },

    /***/
    "LJId":
    /*!**********************************************!*\
      !*** ./src/app/__helper/guard/auth.guard.ts ***!
      \**********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function LJId(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/auth.service */
      "ao6q");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authenticationService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser.User_Id) {
              return true;
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.??fac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "M0ag":
    /*!*********************************!*\
      !*** ./src/app/shared/index.ts ***!
      \*********************************/

    /*! exports provided: FooterComponent, HeaderComponent, TopmenuComponent, SharedModule */

    /***/
    function M0ag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layout */
      "3tlG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return _layout__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return _layout__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TopmenuComponent", function () {
        return _layout__WEBPACK_IMPORTED_MODULE_0__["TopmenuComponent"];
      });
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared.module */
      "PCNd");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"];
      });
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: SharedModule
      });
      SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](SharedModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            declarations: [],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PU9F":
    /*!*************************************!*\
      !*** ./src/app/pipe/filter.pipe.ts ***!
      \*************************************/

    /*! exports provided: FilterPipe */

    /***/
    function PU9F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
        return FilterPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FilterPipe = /*#__PURE__*/function () {
        function FilterPipe() {
          _classCallCheck(this, FilterPipe);
        }

        _createClass(FilterPipe, [{
          key: "transform",
          value: function transform(items, searchText) {
            if (!items) {
              return [];
            }

            if (!searchText) {
              return items;
            }

            searchText = searchText.toLowerCase();
            return items.filter(function (it) {
              return it.Item_Name.toString().toLowerCase().includes(searchText);
            });
          }
        }]);

        return FilterPipe;
      }();

      FilterPipe.??fac = function FilterPipe_Factory(t) {
        return new (t || FilterPipe)();
      };

      FilterPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({
        name: "filter",
        type: FilterPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filter'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Q+cP":
    /*!***************************************************!*\
      !*** ./src/app/shared/layout/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function QCP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.today = Date.now();
      };

      FooterComponent.??fac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FooterComponent,
        selectors: [["app-layout-footer"]],
        decls: 5,
        vars: 0,
        consts: [[1, "main-footer"], [1, "control-sidebar", "control-sidebar-dark"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Copyright \xA9 2020-2021.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " All rights reserved.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "aside", 1);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-layout-footer',
            templateUrl: './footer.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'krishnasales';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "ion-router-outlet");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Uflk":
    /*!**************************************************!*\
      !*** ./src/app/employees/employees.component.ts ***!
      \**************************************************/

    /*! exports provided: EmployeesComponent */

    /***/
    function Uflk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function () {
        return EmployeesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/layout/header.component */
      "mIkr");
      /* harmony import */


      var _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/layout/topmenu.component */
      "vdYZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["dataTable"];

      function EmployeesComponent_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeesComponent_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r6.createEmployeeFlag = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Create Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EmployeesComponent_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeesComponent_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r8.createEmployeeFlag = false;
            return ctx_r8.clearEditParam();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EmployeesComponent_div_19_button_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeesComponent_div_19_button_37_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            ctx_r12.createEmployee();
            return ctx_r12.createEmployeeFlag = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EmployeesComponent_div_19_button_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeesComponent_div_19_button_38_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            ctx_r14.updateEmployee();
            return ctx_r14.createEmployeeFlag = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EmployeesComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Add Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Employee Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeesComponent_div_19_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r16.Employee_Name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeesComponent_div_19_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r18.Email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeesComponent_div_19_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r19.Mobile = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Designation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeesComponent_div_19_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r20.Designation = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeesComponent_div_19_Template_input_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r21.Username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Passowrd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeesComponent_div_19_Template_input_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.Password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, EmployeesComponent_div_19_button_37_Template, 2, 0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, EmployeesComponent_div_19_button_38_Template, 2, 0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeesComponent_div_19_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r23.createEmployeeFlag = false;
            return ctx_r23.clearEditParam();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.Employee_Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.Email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.Mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.Designation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.Username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.Password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r2.edit_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.edit_ID);
        }
      }

      function EmployeesComponent_i_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 40);
        }
      }

      function EmployeesComponent_tr_49_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EmployeesComponent_tr_49_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EmployeesComponent_tr_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, EmployeesComponent_tr_49_div_14_Template, 2, 0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, EmployeesComponent_tr_49_div_15_Template, 2, 0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeesComponent_tr_49_Template_i_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29);

            var item_r24 = ctx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r28.setEditParam(item_r24.User_Id, item_r24.Name, item_r24.Email, item_r24.Mobile, item_r24.Designation, item_r24.Username, item_r24.Password);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " \xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeesComponent_tr_49_Template_span_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29);

            var item_r24 = ctx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r30["delete"](item_r24.User_Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r24 = ctx.$implicit;
          var i_r25 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r25 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r24.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r24.Email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r24.Mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r24.Designation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r24.Username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r24.Is_Active === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r24.Is_Active === "1");
        }
      }

      var EmployeesComponent = /*#__PURE__*/function () {
        function EmployeesComponent(router, title, http, authService) {
          _classCallCheck(this, EmployeesComponent);

          this.router = router;
          this.title = title;
          this.http = http;
          this.authService = authService;
          this.addItemS = false;
          this.editItemS = false;
          this.Employee_Name = '';
          this.Email = '';
          this.Mobile = '';
          this.Designation = '';
          this.Username = '';
          this.Password = '';
          this.createEmployeeFlag = false;
          this.edit_Employee_Name = '';
          this.edit_Email = '';
          this.edit_Mobile = '';
          this.edit_Designation = '';
          this.edit_Username = '';
          this.edit_Password = '';
          this.edit_ID = '';
          this.loading = true;
          this.empdata = [];
        }

        _createClass(EmployeesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.authService.currentUserValue;

            if (this.currentUser['Role'] == 3) {
              this.router.navigate(['/customer-dashboard']);
            } else if (this.currentUser['Role'] == 2) {
              this.router.navigate(['/employee-dashboard']);
            }

            this.title.setTitle("Employees | KrishnaSales");
            this.get_all_employees();
          }
        }, {
          key: "get_all_employees",
          value: function get_all_employees() {
            var _this13 = this;

            if (this.empdata.length !== 0) {
              setTimeout(function () {
                _this13.dataTable = $(_this13.table.nativeElement);

                _this13.dataTable.DataTable().clear().destroy();
              }, 300);
            }

            this.loading = true;
            this.empdata = [];
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-all-employees")).subscribe(function (res) {
              _this13.loading = false;
              _this13.empdata = res.data;
              setTimeout(function () {
                _this13.dataTable = $(_this13.table.nativeElement);

                _this13.dataTable.DataTable();
              }, 300);
            });
          }
        }, {
          key: "add",
          value: function add() {
            this.addItemS = true;
            var addCard = document.getElementById('createItemCard');
            addCard.style.display = 'block';
          }
        }, {
          key: "createEmployee",
          value: function createEmployee() {
            var _this14 = this;

            var formData = new FormData();
            formData.append('Name', this.Employee_Name);
            formData.append('Email', this.Email);
            formData.append('Mobile', this.Mobile);
            formData.append('Designation', this.Designation);
            formData.append('Username', this.Username);
            formData.append('Password', this.Password);
            this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/create-employee"), formData).subscribe(function (result) {
              if (result.status == "success") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Successfully', 'Create Employee', 'success');

                _this14.get_all_employees();

                _this14.Employee_Name = '';
                _this14.Email = '';
                _this14.Mobile = '';
                _this14.Designation = '';
                _this14.Username = '';
                _this14.Password = '';
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', result.message, 'error');
              }
            });
          }
        }, {
          key: "updateEmployee",
          value: function updateEmployee() {
            var _this15 = this;

            var formData = new FormData();
            formData.append('Name', this.Employee_Name);
            formData.append('Email', this.Email);
            formData.append('Mobile', this.Mobile);
            formData.append('Designation', this.Designation);
            formData.append('Username', this.Username);
            formData.append('Password', this.Password);
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/update-employee/") + this.edit_ID, formData).subscribe(function (result) {
              if (result.status == "success") {
                _this15.get_all_employees();

                _this15.Employee_Name = '';
                _this15.Email = '';
                _this15.Mobile = '';
                _this15.Designation = '';
                _this15.Username = '';
                _this15.Password = '';
                _this15.edit_ID = '';
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Successfully', 'Edit Employee', 'success');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', result.message, 'error');
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this16 = this;

            var formData = new FormData();
            formData.append('Employee_Id', id);
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/delete-employee/") + id).subscribe(function (result) {
              if (result.status == "success") {
                _this16.get_all_employees();

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Successfully', 'Delete Employee', 'success');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', result.message, 'error');
              }
            });
          }
        }, {
          key: "setEditParam",
          value: function setEditParam(id, eempname, eemial, emobile, edesign, eusername, password) {
            this.Employee_Name = eempname;
            this.Email = eemial;
            this.Mobile = emobile;
            this.Designation = edesign;
            this.Username = eusername;
            this.Password = password;
            this.edit_ID = id;
          }
        }, {
          key: "clearEditParam",
          value: function clearEditParam() {
            this.Employee_Name = '';
            this.Email = '';
            this.Mobile = '';
            this.Designation = '';
            this.Username = '';
            this.Password = '';
            this.edit_ID = '';
          }
        }]);

        return EmployeesComponent;
      }();

      EmployeesComponent.??fac = function EmployeesComponent_Factory(t) {
        return new (t || EmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
      };

      EmployeesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EmployeesComponent,
        selectors: [["app-employees"]],
        viewQuery: function EmployeesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 50,
        vars: 5,
        consts: [[1, "app-container", "app-theme-white", "body-tabs-shadow", "fixed-sidebar", "fixed-header", "closed-sidebar-mobile", "closed-sidebar"], [1, "app-main"], [1, "app-main__outer"], [1, "app-main__inner", 2, "background", "#f3f6f9"], [1, "app-page-title", 2, "background", "#f3f6f9"], [1, "page-title-wrapper"], [1, "page-title-heading"], [1, "page-title-icon", 2, "background", "transparent", "box-shadow", "unset"], [1, "pe-7s-portfolio", 2, "color", "#8950fc"], [2, "color", "black"], [1, "page-title-actions"], ["class", "btn mr-3 btn_primary", 3, "click", 4, "ngIf"], ["class", "btn btn-shadow mr-3 btn_warning", 3, "click", 4, "ngIf"], [1, "row"], [1, "col-md-12"], ["class", "main-card mb-3 white_card", 4, "ngIf"], [1, "main-card", "mb-3", "white_card"], [1, "card-header"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "card-body"], [1, "table-responsive"], [1, "align-middle", "mb-0", "table", "table-borderless", "table-striped", "table-hover"], ["dataTable", ""], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "btn", "mr-3", "btn_primary", 3, "click"], [1, "btn", "btn-shadow", "mr-3", "btn_warning", 3, "click"], [1, "card-title"], [1, ""], [1, "col-md-4"], [1, "position-relative", "form-group"], ["name", "empname", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "email", "type", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "mmobile", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "design", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "username", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "password", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "mt-1 btn btn_primary", 3, "click", 4, "ngIf"], [1, "mt-1", "btn", "btn-default", 2, "background", "transparent", 3, "click"], [1, "mt-1", "btn", "btn_primary", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin"], ["class", "badge badge-pill badge-dark", 4, "ngIf"], ["class", "badge badge-pill badge_success", 4, "ngIf"], [1, "text-muted", 2, "cursor", "pointer"], [1, "fa", "fa-pen", 2, "color", "black", 3, "click"], [1, "text-muted", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-trash", "text_danger"], [1, "badge", "badge-pill", "badge-dark"], [1, "badge", "badge-pill", "badge_success"]],
        template: function EmployeesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-layout-topmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Employees ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, EmployeesComponent_button_15_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, EmployeesComponent_button_16_Template, 2, 0, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, EmployeesComponent_div_19_Template, 41, 8, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Employees List \xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, EmployeesComponent_i_25_Template, 1, 0, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "table", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "SR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Employee Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Designation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, EmployeesComponent_tr_49_Template, 22, 8, "tr", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.createEmployeeFlag && ctx.edit_ID == "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.edit_ID || ctx.createEmployeeFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.createEmployeeFlag || ctx.edit_ID != "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.empdata);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_9__["TopmenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZXMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmployeesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-employees',
            templateUrl: './employees.component.html',
            styleUrls: ['./employees.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dataTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "YH7h":
    /*!********************************************************!*\
      !*** ./src/app/bonus-master/bonus-master.component.ts ***!
      \********************************************************/

    /*! exports provided: BonusMasterComponent */

    /***/
    function YH7h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BonusMasterComponent", function () {
        return BonusMasterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/layout/header.component */
      "mIkr");
      /* harmony import */


      var _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/layout/topmenu.component */
      "vdYZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["dataTable"];

      function BonusMasterComponent_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BonusMasterComponent_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r8.importOpen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Import CSV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BonusMasterComponent_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BonusMasterComponent_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r10.createBonusFlag = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Create Bonus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BonusMasterComponent_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BonusMasterComponent_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r12.clearEditParam();
            ctx_r12.createBonusFlag = false;
            return ctx_r12.importS = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BonusMasterComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Add Bonus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Select File");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ion-input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function BonusMasterComponent_div_18_Template_ion_input_change_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r14.selectWebFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BonusMasterComponent_div_18_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r16.uploadExcel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Import CSV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BonusMasterComponent_div_18_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r17.importS = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BonusMasterComponent_div_21_h5_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Add Bonus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BonusMasterComponent_div_21_h5_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Edit Bonus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BonusMasterComponent_div_21_select_10_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", item_r25.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r25.Item_Name);
        }
      }

      function BonusMasterComponent_div_21_select_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "select", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BonusMasterComponent_div_21_select_10_Template_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r26.itemid = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Select one");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, BonusMasterComponent_div_21_select_10_ng_container_3_Template, 3, 2, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r20.itemid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r20.itemdata);
        }
      }

      function BonusMasterComponent_div_21_select_11_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", item_r29.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r29.Item_Name);
        }
      }

      function BonusMasterComponent_div_21_select_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "select", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BonusMasterComponent_div_21_select_11_Template_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r30.itemid = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Select one");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, BonusMasterComponent_div_21_select_11_ng_container_3_Template, 3, 2, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r21.itemid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r21.itemdata);
        }
      }

      function BonusMasterComponent_div_21_button_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BonusMasterComponent_div_21_button_22_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r32.addBonusMaster();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BonusMasterComponent_div_21_button_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BonusMasterComponent_div_21_button_23_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r34.updateBonusMaster();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BonusMasterComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, BonusMasterComponent_div_21_h5_2_Template, 2, 0, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, BonusMasterComponent_div_21_h5_3_Template, 2, 0, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Select Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, BonusMasterComponent_div_21_select_10_Template, 4, 2, "select", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, BonusMasterComponent_div_21_select_11_Template, 4, 2, "select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BonusMasterComponent_div_21_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r36.quanttity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Discount (%)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BonusMasterComponent_div_21_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r37);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r38.discount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, BonusMasterComponent_div_21_button_22_Template, 2, 0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, BonusMasterComponent_div_21_button_23_Template, 2, 0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BonusMasterComponent_div_21_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r37);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r39.createBonusFlag = false;
            return ctx_r39.clearEditParam();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r4.edit_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.edit_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.edit_ID == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.edit_ID != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.quanttity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.discount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r4.edit_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.edit_ID);
        }
      }

      function BonusMasterComponent_i_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 46);
        }
      }

      function BonusMasterComponent_tr_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BonusMasterComponent_tr_45_Template_i_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r43);

            var item_r40 = ctx.$implicit;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r42.setEditParam(item_r40.Id, item_r40.Bonus_Qty, item_r40.Bonus_Discount);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " \xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BonusMasterComponent_tr_45_Template_span_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r43);

            var item_r40 = ctx.$implicit;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r44["delete"](item_r40.Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r40 = ctx.$implicit;
          var i_r41 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r41 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r40.Item_Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r40.Bonus_Qty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r40.Bonus_Discount, "%");
        }
      }

      var BonusMasterComponent = /*#__PURE__*/function () {
        function BonusMasterComponent(router, title, http, authService) {
          _classCallCheck(this, BonusMasterComponent);

          this.router = router;
          this.title = title;
          this.http = http;
          this.authService = authService;
          this.addItemS = false;
          this.editItemS = false;
          this.importS = false;
          this.itemid = '';
          this.quanttity = '';
          this.discount = '';
          this.loading = true;
          this.edit_ID = '';
          this.createBonusFlag = false;
          this.bonusdata = [];
          this.itemdata = [];
          this.dataList = [];
        }

        _createClass(BonusMasterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.currentUser = this.authService.currentUserValue;

            if (this.currentUser['Role'] == 3) {
              this.router.navigate(['/customer-dashboard']);
            } else if (this.currentUser['Role'] == 2) {
              this.router.navigate(['/employee-dashboard']);
            }

            this.title.setTitle("Bonus Master | KrishnaSales");
            this.getAllBonus();
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-all-items")).subscribe(function (res) {
              _this17.itemdata = res.data;
            });
          }
        }, {
          key: "importOpen",
          value: function importOpen() {
            this.importS = true;
          }
        }, {
          key: "getAllBonus",
          value: function getAllBonus() {
            var _this18 = this;

            if (this.bonusdata.length !== 0) {
              setTimeout(function () {
                _this18.dataTable = $(_this18.table.nativeElement);

                _this18.dataTable.DataTable().clear().destroy();
              }, 300);
            }

            this.loading = true;
            this.bonusdata = [];
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-all-bonus")).subscribe(function (res) {
              _this18.loading = false;
              _this18.bonusdata = res.data;
              setTimeout(function () {
                _this18.dataTable = $(_this18.table.nativeElement);

                _this18.dataTable.DataTable();
              }, 300);
            });
          }
        }, {
          key: "selectWebFile",
          value: function selectWebFile(event) {
            var fileList = event.target.files;

            if (fileList.length > 0) {
              var file = fileList[0];

              if (file.size / 1048576 <= 4) {
                var formData = new FormData();
                formData.append('file', file, file.name);
                this.file_data = formData;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("File Validation Success", '', 'success');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Validation Failed", '', 'error');
              }
            }
          }
        }, {
          key: "uploadExcel",
          value: function uploadExcel() {
            var _this19 = this;

            if (this.file_data != "") {
              this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/post-excel-bonus-master-file"), this.file_data).subscribe(function (res) {
                if (res.status == "success") {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("CSV File Uploaded", '', 'success');
                  _this19.importS = false;

                  _this19.ngOnInit();

                  _this19.bonusdata = [];
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(res.message, '', 'error');
                }
              }, function (err) {
                console.error(err);
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('File Uploading error', '', 'error');
            }
          }
        }, {
          key: "addBonusMaster",
          value: function addBonusMaster() {
            var _this20 = this;

            var formData = new FormData();
            formData.append('Quantity', this.quanttity);
            formData.append('Discount', this.discount);
            this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/create-bonus-master/") + this.itemid, formData).subscribe(function (result) {
              if (result.status == "success") {
                _this20.createBonusFlag = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Successfully', 'Bonus Created', 'success');
                _this20.itemid = '';
                _this20.quanttity = '';
                _this20.discount = '';

                _this20.getAllBonus();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', result.message, 'error');
              }
            });
          }
        }, {
          key: "updateBonusMaster",
          value: function updateBonusMaster() {
            var _this21 = this;

            var formData = new FormData();
            formData.append('Item_Id', this.itemid);
            formData.append('Quantity', this.quanttity);
            formData.append('Discount', this.discount);
            this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/update-bonus-master/") + this.edit_ID, formData).subscribe(function (result) {
              if (result.status == "success") {
                _this21.createBonusFlag = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Successfully', 'Bonus Edited', 'success');
                _this21.itemid = '';
                _this21.quanttity = '';
                _this21.discount = '';
                _this21.edit_ID = '';

                _this21.getAllBonus();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', result.message, 'error');
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this22 = this;

            this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/delete-bonus-master/") + id, id).subscribe(function (result) {
              if (result.status == "success") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Successfully', 'Bonus Deleted', 'success');

                _this22.getAllBonus();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', result.message, 'error');
              }
            });
          }
        }, {
          key: "setEditParam",
          value: function setEditParam(id, quanttity, discount) {
            this.itemid = id;
            this.quanttity = quanttity;
            this.discount = discount;
            this.edit_ID = id;
          }
        }, {
          key: "clearEditParam",
          value: function clearEditParam() {
            this.itemid = '';
            this.quanttity = '';
            this.discount = '';
            this.edit_ID = '';
          }
        }]);

        return BonusMasterComponent;
      }();

      BonusMasterComponent.??fac = function BonusMasterComponent_Factory(t) {
        return new (t || BonusMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
      };

      BonusMasterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: BonusMasterComponent,
        selectors: [["app-bonus-master"]],
        viewQuery: function BonusMasterComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 46,
        vars: 7,
        consts: [[1, "app-container", "app-theme-white", "body-tabs-shadow", "fixed-sidebar", "fixed-header", "closed-sidebar-mobile", "closed-sidebar"], [1, "app-main"], [1, "app-main__outer"], [1, "app-main__inner", 2, "background", "#f3f6f9"], [1, "app-page-title", 2, "background", "#f3f6f9"], [1, "page-title-wrapper"], [1, "page-title-heading"], [1, "page-title-icon", 2, "background", "transparent", "box-shadow", "unset"], [1, "pe-7s-copy-file", 2, "color", "#8950fc"], [2, "color", "black"], [1, "page-title-actions"], ["class", "btn mr-3 btn_primary", 3, "click", 4, "ngIf"], ["class", "btn btn-shadow mr-3 btn_warning", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12"], ["class", "main-card mb-3 white_card", 4, "ngIf"], [1, "main-card", "mb-3", "white_card"], [1, "card-header"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "card-body"], [1, "table-responsive"], [1, "align-middle", "mb-0", "table", "table-borderless", "table-striped", "table-hover"], ["dataTable", ""], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "btn", "mr-3", "btn_primary", 3, "click"], [1, "btn", "btn-shadow", "mr-3", "btn_warning", 3, "click"], [1, "card-title"], [1, ""], [1, "position-relative", "form-group"], ["type", "file", "accept", ".csv", 3, "change"], [1, "mt-1", "btn", "btn_primary", 3, "click"], [1, "mt-1", "btn", "btn-default", 2, "background", "transparent", 3, "click"], ["class", "card-title", 4, "ngIf"], [1, "col-md-4"], ["for", "exampleSelect", 1, ""], ["name", "select", "class", "form-control", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["name", "select", "disabled", "", "class", "form-control", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["name", "qty", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "dis", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "mt-1 btn btn_primary", 3, "click", 4, "ngIf"], ["name", "select", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", ""], [3, "value"], ["name", "select", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-circle-o-notch", "fa-spin"], [1, "text-muted", 2, "cursor", "pointer"], [1, "fa", "fa-pen", 2, "color", "black", 3, "click"], [1, "text-muted", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-trash", "text_danger"]],
        template: function BonusMasterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-layout-topmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Bonus Master ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, BonusMasterComponent_button_15_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, BonusMasterComponent_button_16_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, BonusMasterComponent_button_17_Template, 2, 0, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, BonusMasterComponent_div_18_Template, 17, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, BonusMasterComponent_div_21_Template, 26, 8, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Bonus List \xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, BonusMasterComponent_i_27_Template, 1, 0, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "table", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "SR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Item Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Discount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, BonusMasterComponent_tr_45_Template, 15, 4, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.importS && !ctx.createBonusFlag && !ctx.edit_ID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.createBonusFlag && !ctx.importS && !ctx.edit_ID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.createBonusFlag || ctx.importS || ctx.edit_ID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.importS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.createBonusFlag || ctx.edit_ID != "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.bonusdata);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_9__["TopmenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["??angular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib251cy1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BonusMasterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bonus-master',
            templateUrl: './bonus-master.component.html',
            styleUrls: ['./bonus-master.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dataTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-history/order-history.component */
      "d759");
      /* harmony import */


      var _order_history_details_order_history_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-history-details/order-history-details.component */
      "lgCI");
      /* harmony import */


      var _item_master_item_master_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./item-master/item-master.component */
      "hTiQ");
      /* harmony import */


      var _bonus_master_bonus_master_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./bonus-master/bonus-master.component */
      "YH7h");
      /* harmony import */


      var _customers_customers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./customers/customers.component */
      "4yXv");
      /* harmony import */


      var _employees_employees_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./employees/employees.component */
      "Uflk");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./shared */
      "M0ag");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./user-dashboard/user-dashboard.component */
      "jBv/");
      /* harmony import */


      var _user_create_order_user_create_order_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./user-create-order/user-create-order.component */
      "lxzN");
      /* harmony import */


      var _user_order_history_user_order_history_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./user-order-history/user-order-history.component */
      "JEGr");
      /* harmony import */


      var _app_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../app/pipe/filter.pipe */
      "PU9F");
      /* harmony import */


      var _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./employee-dashboard/employee-dashboard.component */
      "IfXj");
      /* harmony import */


      var _employee_users_employee_users_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./employee-users/employee-users.component */
      "mvmY");
      /* harmony import */


      var _employee_order_history_employee_order_history_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./employee-order-history/employee-order-history.component */
      "b1oT");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./items-modal/items-modal.component */
      "2lZ3");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_22__["DataTablesModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_23__["IonicModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
          declarations: [_shared__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _shared__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _shared__WEBPACK_IMPORTED_MODULE_12__["TopmenuComponent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryComponent"], _order_history_details_order_history_details_component__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryDetailsComponent"], _item_master_item_master_component__WEBPACK_IMPORTED_MODULE_7__["ItemMasterComponent"], _bonus_master_bonus_master_component__WEBPACK_IMPORTED_MODULE_8__["BonusMasterComponent"], _customers_customers_component__WEBPACK_IMPORTED_MODULE_9__["CustomersComponent"], _employees_employees_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["UserDashboardComponent"], _user_create_order_user_create_order_component__WEBPACK_IMPORTED_MODULE_16__["UserCreateOrderComponent"], _user_order_history_user_order_history_component__WEBPACK_IMPORTED_MODULE_17__["UserOrderHistoryComponent"], _app_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["FilterPipe"], _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["EmployeeDashboardComponent"], _employee_users_employee_users_component__WEBPACK_IMPORTED_MODULE_20__["EmployeeUsersComponent"], _employee_order_history_employee_order_history_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeOrderHistoryComponent"], _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_24__["ItemsModalComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_22__["DataTablesModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_23__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_shared__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _shared__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _shared__WEBPACK_IMPORTED_MODULE_12__["TopmenuComponent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryComponent"], _order_history_details_order_history_details_component__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryDetailsComponent"], _item_master_item_master_component__WEBPACK_IMPORTED_MODULE_7__["ItemMasterComponent"], _bonus_master_bonus_master_component__WEBPACK_IMPORTED_MODULE_8__["BonusMasterComponent"], _customers_customers_component__WEBPACK_IMPORTED_MODULE_9__["CustomersComponent"], _employees_employees_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["UserDashboardComponent"], _user_create_order_user_create_order_component__WEBPACK_IMPORTED_MODULE_16__["UserCreateOrderComponent"], _user_order_history_user_order_history_component__WEBPACK_IMPORTED_MODULE_17__["UserOrderHistoryComponent"], _app_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["FilterPipe"], _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["EmployeeDashboardComponent"], _employee_users_employee_users_component__WEBPACK_IMPORTED_MODULE_20__["EmployeeUsersComponent"], _employee_order_history_employee_order_history_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeOrderHistoryComponent"], _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_24__["ItemsModalComponent"]],
            entryComponents: [_items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_24__["ItemsModalComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_22__["DataTablesModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_23__["IonicModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ao6q":
    /*!**************************************************!*\
      !*** ./src/app/__helper/service/auth.service.ts ***!
      \**************************************************/

    /*! exports provided: AuthService */

    /***/
    function ao6q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, router) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser') || '{}'));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(AuthService, [{
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "login",
          value: function login(email, password) {
            var _this23 = this;

            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/login/") + email + "/" + password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              localStorage.setItem('currentUser', JSON.stringify(user.data));

              _this23.currentUserSubject.next(user.data);

              return user.data;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(JSON.parse(localStorage.getItem('currentUser') || '{}'));
            this.router.navigate(['/login']).then(function () {
              location.reload();
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.??fac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AuthService,
        factory: AuthService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "b1oT":
    /*!****************************************************************************!*\
      !*** ./src/app/employee-order-history/employee-order-history.component.ts ***!
      \****************************************************************************/

    /*! exports provided: EmployeeOrderHistoryComponent */

    /***/
    function b1oT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeOrderHistoryComponent", function () {
        return EmployeeOrderHistoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../items-modal/items-modal.component */
      "2lZ3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/layout/header.component */
      "mIkr");
      /* harmony import */


      var _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shared/layout/topmenu.component */
      "vdYZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["dataTable"];
      var _c1 = ["dataTable1"];

      function EmployeeOrderHistoryComponent_i_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "i", 21);
        }
      }

      function EmployeeOrderHistoryComponent_tr_43_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EmployeeOrderHistoryComponent_tr_43_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EmployeeOrderHistoryComponent_tr_43_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EmployeeOrderHistoryComponent_tr_43_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "40%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EmployeeOrderHistoryComponent_tr_43_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EmployeeOrderHistoryComponent_tr_43_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "0%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EmployeeOrderHistoryComponent_tr_43_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 37);
        }
      }

      function EmployeeOrderHistoryComponent_tr_43_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 38);
        }
      }

      function EmployeeOrderHistoryComponent_tr_43_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 39);
        }
      }

      function EmployeeOrderHistoryComponent_tr_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, EmployeeOrderHistoryComponent_tr_43_div_12_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, EmployeeOrderHistoryComponent_tr_43_div_13_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, EmployeeOrderHistoryComponent_tr_43_div_14_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, EmployeeOrderHistoryComponent_tr_43_div_16_Template, 4, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, EmployeeOrderHistoryComponent_tr_43_div_17_Template, 4, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, EmployeeOrderHistoryComponent_tr_43_div_18_Template, 4, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, EmployeeOrderHistoryComponent_tr_43_div_20_Template, 1, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, EmployeeOrderHistoryComponent_tr_43_div_21_Template, 1, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, EmployeeOrderHistoryComponent_tr_43_div_22_Template, 1, 0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EmployeeOrderHistoryComponent_tr_43_Template_i_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r15);

            var Item_r3 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r14.openEditModal(Item_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var Item_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r4 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("ORD - ", Item_r3.Order_Id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](Item_r3.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](Item_r3.Order_Date_Format);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx_r2.currency, " ", Item_r3.Amount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "2");
        }
      }

      var EmployeeOrderHistoryComponent = /*#__PURE__*/function () {
        function EmployeeOrderHistoryComponent(router, title, http, authService, modalController) {
          _classCallCheck(this, EmployeeOrderHistoryComponent);

          this.router = router;
          this.title = title;
          this.http = http;
          this.authService = authService;
          this.modalController = modalController;
          this.currency = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].currency;
          this.loading = true;
          this.loading1 = true;
          this.orderData = [];
          this.viewOrderList = [];
          this.viewOrderListExportAscsv = [];
          this.Order_Id = '';
          this.Name = '';
          this.Order_Date = '';
          this.Amount = '';
          this.Status = '';
          this.Remark = '';
        }

        _createClass(EmployeeOrderHistoryComponent, [{
          key: "openEditModal",
          value: function openEditModal(items) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this24 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_3__["ItemsModalComponent"],
                        componentProps: {
                          'items': items
                        }
                      });

                    case 2:
                      modal = _context4.sent;
                      modal.onDidDismiss().then(function (data) {
                        var user = data['data'];

                        if (user['Status']) {
                          _this24.ngOnInit();
                        }
                      });
                      _context4.next = 6;
                      return modal.present();

                    case 6:
                      return _context4.abrupt("return", _context4.sent);

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.authService.currentUserValue;

            if (this.currentUser['Role'] == 1) {
              this.router.navigate(['/']);
            } else if (this.currentUser['Role'] == 3) {
              this.router.navigate(['/customer-dashboard']);
            }

            this.title.setTitle("Employee Order History | KrishnaSales");
            this.get_user_orders();
          }
        }, {
          key: "get_user_orders",
          value: function get_user_orders() {
            var _this25 = this;

            if (this.orderData.length !== 0) {
              setTimeout(function () {
                _this25.dataTable = $(_this25.table.nativeElement);

                _this25.dataTable.DataTable().clear().destroy();
              }, 300);
            }

            this.orderData = [];
            this.loading = true;
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-count-from-employee/") + this.currentUser.User_Id).subscribe(function (res) {
              _this25.orderData = res.data;
              setTimeout(function () {
                if (_this25.orderData.length === res.data.length) {
                  _this25.loading = false;
                  _this25.dataTable = $(_this25.table.nativeElement);

                  _this25.dataTable.DataTable();
                }
              }, 300);
            });
          }
        }]);

        return EmployeeOrderHistoryComponent;
      }();

      EmployeeOrderHistoryComponent.??fac = function EmployeeOrderHistoryComponent_Factory(t) {
        return new (t || EmployeeOrderHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]));
      };

      EmployeeOrderHistoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: EmployeeOrderHistoryComponent,
        selectors: [["app-employee-order-history"]],
        viewQuery: function EmployeeOrderHistoryComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table1 = _t.first);
          }
        },
        decls: 44,
        vars: 2,
        consts: [[1, "app-container", "app-theme-white", "body-tabs-shadow", "fixed-sidebar", "fixed-header", "closed-sidebar-mobile", "closed-sidebar"], [1, "app-main"], [1, "app-main__outer"], [1, "app-main__inner", 2, "background", "#f3f6f9"], [1, "app-page-title", 2, "background", "#f3f6f9"], [1, "page-title-wrapper"], [1, "page-title-heading"], [1, "page-title-icon", 2, "background", "transparent", "box-shadow", "unset"], [1, "pe-7s-clock", 2, "color", "#8950fc"], [2, "color", "black"], [1, "row"], [1, "col-md-12"], [1, "main-card", "mb-3", "white_card"], [1, "card-header"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "card-body"], [1, "table-responsive"], [1, "align-middle", "mb-0", "table", "table-borderless", "table-striped", "table-hover"], ["dataTable", ""], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "fa", "fa-circle-o-notch", "fa-spin"], ["class", "badge badge-pill badge_warning", 4, "ngIf"], ["class", "badge badge-pill badge_success", 4, "ngIf"], ["class", "badge badge-pill badge_danger", 4, "ngIf"], ["class", "text-left", 4, "ngIf"], [1, "progress"], ["class", "progress-bar  bg_warning", "role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 40%;", 4, "ngIf"], ["class", "progress-bar  bg_success", "role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 100%;", 4, "ngIf"], ["class", "progress-bar  bg_danger", "role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 0%;", 4, "ngIf"], [1, "text-muted", 2, "cursor", "pointer"], [1, "fa", "fa-eye", "text_primary", 3, "click"], [1, "badge", "badge-pill", "badge_warning"], [1, "badge", "badge-pill", "badge_success"], [1, "badge", "badge-pill", "badge_danger"], [1, "text-left"], [1, "hide-on-small-and-down", 2, "float", "right"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_warning", 2, "width", "40%"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_success", 2, "width", "100%"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_danger", 2, "width", "0%"]],
        template: function EmployeeOrderHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "app-layout-topmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Users Order History ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Order Progress \xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, EmployeeOrderHistoryComponent_i_19_Template, 1, 0, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "table", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "SR");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Order Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Order Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](43, EmployeeOrderHistoryComponent_tr_43_Template, 26, 15, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.orderData);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_10__["TopmenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1vcmRlci1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](EmployeeOrderHistoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-employee-order-history',
            templateUrl: './employee-order-history.component.html',
            styleUrls: ['./employee-order-history.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }, {
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dataTable']
          }],
          table1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dataTable1']
          }]
        });
      })();
      /***/

    },

    /***/
    "d759":
    /*!**********************************************************!*\
      !*** ./src/app/order-history/order-history.component.ts ***!
      \**********************************************************/

    /*! exports provided: OrderHistoryComponent */

    /***/
    function d759(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function () {
        return OrderHistoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../items-modal/items-modal.component */
      "2lZ3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/layout/header.component */
      "mIkr");
      /* harmony import */


      var _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shared/layout/topmenu.component */
      "vdYZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["dataTable"];
      var _c1 = ["dataTable1"];

      function OrderHistoryComponent_i_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "i", 21);
        }
      }

      function OrderHistoryComponent_tr_45_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function OrderHistoryComponent_tr_45_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function OrderHistoryComponent_tr_45_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function OrderHistoryComponent_tr_45_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "40%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function OrderHistoryComponent_tr_45_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function OrderHistoryComponent_tr_45_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "0%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function OrderHistoryComponent_tr_45_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 37);
        }
      }

      function OrderHistoryComponent_tr_45_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 38);
        }
      }

      function OrderHistoryComponent_tr_45_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 39);
        }
      }

      function OrderHistoryComponent_tr_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, OrderHistoryComponent_tr_45_div_14_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, OrderHistoryComponent_tr_45_div_15_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, OrderHistoryComponent_tr_45_div_16_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, OrderHistoryComponent_tr_45_div_18_Template, 4, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, OrderHistoryComponent_tr_45_div_19_Template, 4, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, OrderHistoryComponent_tr_45_div_20_Template, 4, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, OrderHistoryComponent_tr_45_div_22_Template, 1, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, OrderHistoryComponent_tr_45_div_23_Template, 1, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, OrderHistoryComponent_tr_45_div_24_Template, 1, 0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function OrderHistoryComponent_tr_45_Template_i_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r15);

            var Item_r3 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r14.openEditModal(Item_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var Item_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r4 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("ORD - ", Item_r3.Order_Id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](Item_r3.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](Item_r3.EmpName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](Item_r3.Order_Date_Format);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx_r2.currency, " ", Item_r3.Amount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r3.Status === "2");
        }
      }

      var OrderHistoryComponent = /*#__PURE__*/function () {
        function OrderHistoryComponent(router, title, http, authService, modalController) {
          _classCallCheck(this, OrderHistoryComponent);

          this.router = router;
          this.title = title;
          this.http = http;
          this.authService = authService;
          this.modalController = modalController;
          this.orderData = [];
          this.loading = true;
          this.loading1 = true;
          this.viewOrderList = [];
          this.viewOrderListExportAscsv = [];
          this.currency = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].currency;
          this.Order_Id = '';
          this.EmpName = '';
          this.CusName = '';
          this.Order_Date = '';
          this.Amount = '';
          this.Status = '';
          this.Remark = '';
          this.ramdom = Math.floor(100000 + Math.random() * 900000);
        }

        _createClass(OrderHistoryComponent, [{
          key: "openEditModal",
          value: function openEditModal(items) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.create({
                        component: _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_3__["ItemsModalComponent"],
                        componentProps: {
                          'items': items
                        }
                      });

                    case 2:
                      modal = _context5.sent;
                      _context5.next = 5;
                      return modal.present();

                    case 5:
                      return _context5.abrupt("return", _context5.sent);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.authService.currentUserValue;

            if (this.currentUser['Role'] == 3) {
              this.router.navigate(['/customer-dashboard']);
            } else if (this.currentUser['Role'] == 2) {
              this.router.navigate(['/employee-dashboard']);
            }

            this.title.setTitle("Order History | KrishnaSales");
            this.get_all_orders();
          }
        }, {
          key: "get_all_orders",
          value: function get_all_orders() {
            var _this26 = this;

            this.loading = true;
            this.orderData = [];
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-all-orders")).subscribe(function (item) {
              _this26.loading = false;
              _this26.orderData = item.data;
              setTimeout(function () {
                _this26.dataTable = $(_this26.table.nativeElement);

                _this26.dataTable.DataTable();
              }, 300);
            });
          }
        }]);

        return OrderHistoryComponent;
      }();

      OrderHistoryComponent.??fac = function OrderHistoryComponent_Factory(t) {
        return new (t || OrderHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]));
      };

      OrderHistoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: OrderHistoryComponent,
        selectors: [["app-order-history"]],
        viewQuery: function OrderHistoryComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table1 = _t.first);
          }
        },
        decls: 46,
        vars: 2,
        consts: [[1, "app-container", "app-theme-white", "body-tabs-shadow", "fixed-sidebar", "fixed-header", "closed-sidebar-mobile", "closed-sidebar"], [1, "app-main"], [1, "app-main__outer"], [1, "app-main__inner", 2, "background", "#f3f6f9"], [1, "app-page-title", 2, "background", "#f3f6f9"], [1, "page-title-wrapper"], [1, "page-title-heading"], [1, "page-title-icon", 2, "background", "transparent", "box-shadow", "unset"], [1, "pe-7s-clock", 2, "color", "#8950fc"], [2, "color", "black"], [1, "row"], [1, "col-md-12"], [1, "main-card", "mb-3", "white_card"], [1, "card-header"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "card-body"], [1, "table-responsive"], [1, "align-middle", "mb-0", "table", "table-borderless", "table-striped", "table-hover"], ["dataTable", ""], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "fa", "fa-circle-o-notch", "fa-spin"], ["class", "badge badge-pill badge_warning", 4, "ngIf"], ["class", "badge badge-pill badge_success", 4, "ngIf"], ["class", "badge badge-pill badge_danger", 4, "ngIf"], ["class", "text-left", 4, "ngIf"], [1, "progress"], ["class", "progress-bar  bg_warning", "role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 40%;", 4, "ngIf"], ["class", "progress-bar  bg_success", "role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 100%;", 4, "ngIf"], ["class", "progress-bar  bg_danger", "role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 0%;", 4, "ngIf"], [1, "text-muted", 2, "cursor", "pointer"], [1, "fa", "fa-eye", "text_primary", 3, "click"], [1, "badge", "badge-pill", "badge_warning"], [1, "badge", "badge-pill", "badge_success"], [1, "badge", "badge-pill", "badge_danger"], [1, "text-left"], [1, "hide-on-small-and-down", 2, "float", "right"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_warning", 2, "width", "40%"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_success", 2, "width", "100%"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_danger", 2, "width", "0%"]],
        template: function OrderHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "app-layout-topmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Order History ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Order Progress \xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, OrderHistoryComponent_i_19_Template, 1, 0, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "table", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "SR");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Order Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Employee Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Order Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](45, OrderHistoryComponent_tr_45_Template, 28, 16, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.orderData);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_10__["TopmenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](OrderHistoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-order-history',
            templateUrl: './order-history.component.html',
            styleUrls: ['./order-history.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }, {
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dataTable']
          }],
          table1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dataTable1']
          }]
        });
      })();
      /***/

    },

    /***/
    "hTiQ":
    /*!******************************************************!*\
      !*** ./src/app/item-master/item-master.component.ts ***!
      \******************************************************/

    /*! exports provided: ItemMasterComponent */

    /***/
    function hTiQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemMasterComponent", function () {
        return ItemMasterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/layout/header.component */
      "mIkr");
      /* harmony import */


      var _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/layout/topmenu.component */
      "vdYZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["dataTable"];

      function ItemMasterComponent_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ItemMasterComponent_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r8.importOpen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Import CSV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemMasterComponent_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ItemMasterComponent_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r10.createItemFlag = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Create Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemMasterComponent_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ItemMasterComponent_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r12.createItemFlag = false;
            ctx_r12.clearEditParam();
            return ctx_r12.importS = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemMasterComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Add Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Select File");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ion-input", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ItemMasterComponent_div_18_Template_ion_input_change_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r15.selectWebFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ItemMasterComponent_div_18_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r17.uploadExcel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Import CSV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ItemMasterComponent_div_18_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r18.importS = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemMasterComponent_div_21_h5_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Add Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemMasterComponent_div_21_h5_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Edit Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemMasterComponent_div_21_button_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ItemMasterComponent_div_21_button_43_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r23.createItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemMasterComponent_div_21_button_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ItemMasterComponent_div_21_button_44_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r25.updateItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemMasterComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ItemMasterComponent_div_21_h5_2_Template, 2, 0, "h5", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ItemMasterComponent_div_21_h5_3_Template, 2, 0, "h5", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Item No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ItemMasterComponent_div_21_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r27.itemno = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Item Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ItemMasterComponent_div_21_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r29.itemname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Trade Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ItemMasterComponent_div_21_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r30.tradeprice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Discount (%)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ItemMasterComponent_div_21_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r31.discount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "VAT (%)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ItemMasterComponent_div_21_Template_input_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r32.vat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Stock State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "select", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ItemMasterComponent_div_21_Template_select_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r33.stockS = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Select one");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "In Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Out Of Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, ItemMasterComponent_div_21_button_43_Template, 2, 0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, ItemMasterComponent_div_21_button_44_Template, 2, 0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ItemMasterComponent_div_21_Template_button_click_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r34.createItemFlag = false;
            return ctx_r34.clearEditParam();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r4.edit_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.edit_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.itemno);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.itemname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.tradeprice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.discount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.vat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.stockS);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r4.edit_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.edit_ID);
        }
      }

      function ItemMasterComponent_i_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 48);
        }
      }

      function ItemMasterComponent_tr_51_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "In Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemMasterComponent_tr_51_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Out of Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ItemMasterComponent_tr_51_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ItemMasterComponent_tr_51_div_14_Template, 2, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ItemMasterComponent_tr_51_div_15_Template, 2, 0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "i", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ItemMasterComponent_tr_51_Template_i_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r40);

            var item_r35 = ctx.$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r39.setEditParam(item_r35.Id, item_r35.Item_Id, item_r35.Item_Name, item_r35.Unit_Price, item_r35.Discount, item_r35.Vat, item_r35.Stock_State);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " \xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "i", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ItemMasterComponent_tr_51_Template_i_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r40);

            var item_r35 = ctx.$implicit;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r41.deleteItem(item_r35.Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r35 = ctx.$implicit;
          var i_r36 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r36 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r35.Item_Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r35.Item_Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r7.currency, " ", item_r35.Unit_Price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r35.Discount, " %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r35.Vat, " %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r35.Stock_State === "In Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r35.Stock_State === "Out Of Stock");
        }
      }

      var ItemMasterComponent = /*#__PURE__*/function () {
        function ItemMasterComponent(router, title, http, authService) {
          _classCallCheck(this, ItemMasterComponent);

          this.router = router;
          this.title = title;
          this.http = http;
          this.authService = authService;
          this.addItemS = false;
          this.editItemS = false;
          this.importS = false;
          this.itemno = '';
          this.itemname = '';
          this.quanttity = '';
          this.tradeprice = '';
          this.discount = '';
          this.vat = '';
          this.gross_amount = '';
          this.stockS = '';
          this.createItemFlag = false;
          this.edit_ID = '';
          this.currency = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].currency;
          this.loading = true;
          this.itemdata = [];
        }

        _createClass(ItemMasterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.authService.currentUserValue;

            if (this.currentUser['Role'] == 3) {
              this.router.navigate(['/customer-dashboard']);
            } else if (this.currentUser['Role'] == 2) {
              this.router.navigate(['/employee-dashboard']);
            }

            this.title.setTitle("Item Master | KrishnaSales");
            this.get_all_items();
          }
        }, {
          key: "importOpen",
          value: function importOpen() {
            this.importS = true;
          }
        }, {
          key: "get_all_items",
          value: function get_all_items() {
            var _this27 = this;

            if (this.itemdata.length !== 0) {
              setTimeout(function () {
                _this27.dataTable = $(_this27.table.nativeElement);

                _this27.dataTable.DataTable().clear().destroy();
              }, 300);
            }

            this.loading = true;
            this.itemdata = [];
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-all-items")).subscribe(function (res) {
              _this27.loading = false;
              _this27.itemdata = res.data;
              setTimeout(function () {
                _this27.dataTable = $(_this27.table.nativeElement);

                _this27.dataTable.DataTable();
              }, 300);
            });
          }
        }, {
          key: "createItem",
          value: function createItem() {
            var _this28 = this;

            var formData = new FormData();
            formData.append('Item_Id', this.itemno);
            formData.append('Item_Name', this.itemname);
            formData.append('Unit_Price', this.tradeprice);
            formData.append('Discount', this.discount);
            formData.append('Vat', this.vat);
            formData.append('Stock_State', this.stockS);
            this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/create-item-master"), formData).subscribe(function (result) {
              if (result.status == "success") {
                _this28.get_all_items();

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Successfully', 'Create Item Master', 'success');
                _this28.createItemFlag = false;
                _this28.itemno = '';
                _this28.itemname = '';
                _this28.tradeprice = '';
                _this28.discount = '';
                _this28.vat = '';
                _this28.stockS = '';
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', result.message, 'error');
              }
            });
          }
        }, {
          key: "updateItem",
          value: function updateItem() {
            var _this29 = this;

            var formData = new FormData();
            formData.append('Item_Id', this.itemno);
            formData.append('Item_Name', this.itemname);
            formData.append('Unit_Price', this.tradeprice);
            formData.append('Discount', this.discount);
            formData.append('Vat', this.vat);
            formData.append('Stock_State', this.stockS);
            this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/update-item-master/") + this.edit_ID, formData).subscribe(function (result) {
              if (result.status == "success") {
                _this29.get_all_items();

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Successfully', 'Edit Item Master', 'success');
                _this29.createItemFlag = false;
                _this29.itemno = '';
                _this29.itemname = '';
                _this29.tradeprice = '';
                _this29.discount = '';
                _this29.vat = '';
                _this29.stockS = '';
                _this29.edit_ID = '';
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', result.message, 'error');
              }
            });
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(id) {
            var _this30 = this;

            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/delete-item-master/") + id).subscribe(function (result) {
              if (result.status == "success") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Successfully', 'Item Master Deleted', 'success');

                _this30.get_all_items();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', result.message, 'error');
              }
            });
          }
        }, {
          key: "selectWebFile",
          value: function selectWebFile(event) {
            var fileList = event.target.files;

            if (fileList.length > 0) {
              var file = fileList[0];

              if (file.size / 1048576 <= 4) {
                var formData = new FormData();
                formData.append('file', file, file.name);
                this.file_data = formData;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("File Validation Success", '', 'success');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Validation Failed", '', 'error');
              }
            }
          }
        }, {
          key: "uploadExcel",
          value: function uploadExcel() {
            var _this31 = this;

            if (this.file_data != "") {
              this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/post-excel-item-master-file"), this.file_data).subscribe(function (res) {
                if (res.status == "success") {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("CSV File Uploaded", '', 'success');

                  _this31.get_all_items();

                  _this31.importS = false;
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(res.message, '', 'error');
                }
              }, function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(err, '', 'error');
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('File Uploading error', '', 'error');
            }
          }
        }, {
          key: "setEditParam",
          value: function setEditParam(id, edit_itemno, edit_itemname, edit_tradeprice, edit_discount, edit_vat, edit_stockS) {
            this.itemno = edit_itemno;
            this.itemname = edit_itemname;
            this.tradeprice = edit_tradeprice;
            this.discount = edit_discount;
            this.vat = edit_vat;
            this.stockS = edit_stockS;
            this.edit_ID = id;
          }
        }, {
          key: "clearEditParam",
          value: function clearEditParam() {
            this.itemno = '';
            this.itemname = '';
            this.quanttity = '';
            this.tradeprice = '';
            this.discount = '';
            this.vat = '';
            this.gross_amount = '';
            this.stockS = '';
            this.edit_ID = '';
            this.createItemFlag = false;
          }
        }]);

        return ItemMasterComponent;
      }();

      ItemMasterComponent.??fac = function ItemMasterComponent_Factory(t) {
        return new (t || ItemMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
      };

      ItemMasterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ItemMasterComponent,
        selectors: [["app-item-master"]],
        viewQuery: function ItemMasterComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 52,
        vars: 7,
        consts: [[1, "app-container", "app-theme-white", "body-tabs-shadow", "fixed-sidebar", "fixed-header", "closed-sidebar-mobile", "closed-sidebar"], [1, "app-main"], [1, "app-main__outer"], [1, "app-main__inner", 2, "background", "#f3f6f9"], [1, "app-page-title", 2, "background", "#f3f6f9"], [1, "page-title-wrapper"], [1, "page-title-heading"], [1, "page-title-icon", 2, "background", "transparent", "box-shadow", "unset"], [1, "pe-7s-copy-file", 2, "color", "#8950fc"], [2, "color", "black"], [1, "page-title-actions"], ["class", "btn mr-3 btn_primary", 3, "click", 4, "ngIf"], ["class", "btn btn-shadow mr-3 btn_warning", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12"], ["class", "main-card mb-3 white_card", 4, "ngIf"], [1, "main-card", "mb-3", "white_card"], [1, "card-header"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "card-body"], [1, "table-responsive"], [1, "align-middle", "mb-0", "table", "table-borderless", "table-striped", "table-hover"], ["dataTable", ""], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "btn", "mr-3", "btn_primary", 3, "click"], [1, "btn", "btn-shadow", "mr-3", "btn_warning", 3, "click"], [1, "card-title"], [1, ""], [1, "position-relative", "form-group"], ["type", "file", "accept", ".csv", 3, "change"], ["uploads", ""], [1, "mt-1", "btn", "btn_primary", 3, "click"], [1, "mt-1", "btn", "btn-default", 2, "background", "transparent", 3, "click"], ["class", "card-title", 4, "ngIf"], [1, "col-md-4"], ["name", "itemno", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "itemname", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "unitprice", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "discount", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "vat", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exampleSelect", 1, ""], ["name", "select", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", ""], ["value", "In Stock"], ["value", "Out Of Stock"], ["class", "mt-1 btn btn_primary", 3, "click", 4, "ngIf"], [1, "fa", "fa-circle-o-notch", "fa-spin"], ["class", "badge badge-pill badge_primary", 4, "ngIf"], ["class", "badge badge-pill badge_danger", 4, "ngIf"], [1, "text-muted", 2, "cursor", "pointer"], [1, "fa", "fa-pen", 2, "color", "black", 3, "click"], [1, "fa", "fa-trash", "text_danger", 3, "click"], [1, "badge", "badge-pill", "badge_primary"], [1, "badge", "badge-pill", "badge_danger"]],
        template: function ItemMasterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-layout-topmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Item Master ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ItemMasterComponent_button_15_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, ItemMasterComponent_button_16_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ItemMasterComponent_button_17_Template, 2, 0, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ItemMasterComponent_div_18_Template, 18, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, ItemMasterComponent_div_21_Template, 47, 10, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Item Master List \xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, ItemMasterComponent_i_27_Template, 1, 0, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "table", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Sr.No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Item No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Item Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Trade Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Discount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Vat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Availability");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, ItemMasterComponent_tr_51_Template, 22, 9, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.importS && !ctx.createItemFlag && !ctx.edit_ID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.createItemFlag && !ctx.importS && !ctx.edit_ID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.createItemFlag || ctx.importS || ctx.edit_ID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.importS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.createItemFlag || ctx.edit_ID != "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.itemdata);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_9__["TopmenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["??angular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ItemMasterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-item-master',
            templateUrl: './item-master.component.html',
            styleUrls: ['./item-master.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dataTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "jBv/":
    /*!************************************************************!*\
      !*** ./src/app/user-dashboard/user-dashboard.component.ts ***!
      \************************************************************/

    /*! exports provided: UserDashboardComponent */

    /***/
    function jBv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function () {
        return UserDashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../items-modal/items-modal.component */
      "2lZ3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/layout/header.component */
      "mIkr");
      /* harmony import */


      var _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shared/layout/topmenu.component */
      "vdYZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["dataTable"];
      var _c1 = ["dataTable1"];

      function UserDashboardComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserDashboardComponent_i_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "i", 36);
        }
      }

      function UserDashboardComponent_tr_104_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserDashboardComponent_tr_104_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserDashboardComponent_tr_104_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserDashboardComponent_tr_104_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "40%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserDashboardComponent_tr_104_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserDashboardComponent_tr_104_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "0%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserDashboardComponent_tr_104_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 52);
        }
      }

      function UserDashboardComponent_tr_104_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 53);
        }
      }

      function UserDashboardComponent_tr_104_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 54);
        }
      }

      function UserDashboardComponent_tr_104_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, UserDashboardComponent_tr_104_div_12_Template, 2, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, UserDashboardComponent_tr_104_div_13_Template, 2, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, UserDashboardComponent_tr_104_div_14_Template, 2, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, UserDashboardComponent_tr_104_div_16_Template, 4, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, UserDashboardComponent_tr_104_div_17_Template, 4, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, UserDashboardComponent_tr_104_div_18_Template, 4, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, UserDashboardComponent_tr_104_div_20_Template, 1, 0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, UserDashboardComponent_tr_104_div_21_Template, 1, 0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, UserDashboardComponent_tr_104_div_22_Template, 1, 0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function UserDashboardComponent_tr_104_Template_i_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r16);

            var Item_r4 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r15.openEditModal(Item_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var Item_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r5 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("ORD - ", Item_r4.Order_Id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](Item_r4.EmpName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](Item_r4.Order_Date_Format);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx_r3.currency, " ", Item_r4.Amount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", Item_r4.Status === "2");
        }
      }

      var _c2 = function _c2() {
        return ["/customer-order-history"];
      };

      var _c3 = function _c3() {
        return ["/customer-create-order"];
      };

      var UserDashboardComponent = /*#__PURE__*/function () {
        function UserDashboardComponent(title, http, authService, router, modalController) {
          _classCallCheck(this, UserDashboardComponent);

          this.title = title;
          this.http = http;
          this.authService = authService;
          this.router = router;
          this.modalController = modalController;
          this.totalOrders = 0;
          this.pendinngOrders = 0;
          this.confirmOrders = 0;
          this.cancelOrder = 0;
          this.loading = true;
          this.loading1 = true;
          this.orderData = [];
          this.viewOrderList = [];
          this.Order_Id = '';
          this.EmpName = '';
          this.Order_Date = '';
          this.Amount = '';
          this.Status = '';
          this.Remark = '';
          this.EmployeeName = '';
          this.EmployeeEmail = '';
          this.EmployeeMobile = '';
          this.currency = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].currency;
        }

        _createClass(UserDashboardComponent, [{
          key: "openEditModal",
          value: function openEditModal(items) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.modalController.create({
                        component: _items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_3__["ItemsModalComponent"],
                        componentProps: {
                          'items': items
                        }
                      });

                    case 2:
                      modal = _context6.sent;
                      _context6.next = 5;
                      return modal.present();

                    case 5:
                      return _context6.abrupt("return", _context6.sent);

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this32 = this;

            var haeder = document.getElementById("ActionHeader");
            haeder.classList.remove("sidebar-mobile-open");
            this.currentUser = this.authService.currentUserValue;

            if (this.currentUser['Role'] == 1) {
              this.router.navigate(['/']);
            } else if (this.currentUser['Role'] == 2) {
              this.router.navigate(['/employee-dashboard']);
            }

            this.title.setTitle("Customer Dashboard | KrishnaSales");
            this.get_user_orders();
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-employee/") + this.currentUser.Employee_Id).subscribe(function (res) {
              _this32.EmployeeEmail = res.data.Email;
              _this32.EmployeeName = res.data.Name;
              _this32.EmployeeMobile = res.data.Mobile;
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-count-from-user/") + this.currentUser.User_Id).subscribe(function (res) {
              _this32.loading = false;
              _this32.totalOrders = res.data;
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-pending-count-from-user/") + this.currentUser.User_Id).subscribe(function (res) {
              _this32.loading = false;
              _this32.pendinngOrders = res.data;
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-confirm-count-from-user/") + this.currentUser.User_Id).subscribe(function (res) {
              _this32.loading = false;
              _this32.confirmOrders = res.data;
            });
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-total-orders-cancel-count-from-user/") + this.currentUser.User_Id).subscribe(function (res) {
              _this32.loading = false;
              _this32.cancelOrder = res.data;
            });
          }
        }, {
          key: "get_user_orders",
          value: function get_user_orders() {
            var _this33 = this;

            this.orderData = [];
            this.loading = true;
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/get-orders-from-user-latest-seven-days/") + this.currentUser.User_Id).subscribe(function (res) {
              _this33.loading = false;
              _this33.orderData = res.data;
              setTimeout(function () {
                _this33.dataTable = $(_this33.table.nativeElement);

                _this33.dataTable.DataTable();
              }, 300);
            });
          }
        }]);

        return UserDashboardComponent;
      }();

      UserDashboardComponent.??fac = function UserDashboardComponent_Factory(t) {
        return new (t || UserDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]));
      };

      UserDashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: UserDashboardComponent,
        selectors: [["app-user-dashboard"]],
        viewQuery: function UserDashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table1 = _t.first);
          }
        },
        decls: 105,
        vars: 14,
        consts: [["id", "ActionHeader", 1, "app-container", "app-theme-white", "body-tabs-shadow", "fixed-sidebar", "fixed-header", "closed-sidebar-mobile", "closed-sidebar"], [1, "app-main"], [1, "app-main__outer"], [1, "app-main__inner", 2, "background", "#f3f6f9"], [1, "app-page-title", 2, "background", "#f3f6f9"], [1, "page-title-wrapper"], [1, "page-title-heading"], [1, "page-title-icon", 2, "background", "transparent", "box-shadow", "unset"], [1, "pe-7s-rocket", 2, "color", "#8950fc"], [2, "color", "black"], [1, "page-title-actions"], [1, "btn", "mr-3", "btn_danger", 3, "routerLink"], [1, "btn", "mr-3", "btn_success", 3, "routerLink"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-6"], [1, "main-card", "mb-3", "white_card"], [1, "card-body"], [1, "col"], [1, "nav", "flex-column"], [1, "nav-item"], [2, "font-size", "1.01rem", "color", "#3f4254!important", "font-weight", "600!important", "margin-bottom", ".25rem!important"], [1, "row", 2, "padding", "7px"], ["href", "javascript:void(0);", 1, "nav-link", 2, "text-decoration", "none", "font-size", "1.25rem!important", "color", "black", "font-weight", "600!important"], [1, "ml-auto", "badge", "bg-dark", 2, "color", "white", "font-size", "xx-large"], [1, "ml-auto", "badge", "bg_warning", 2, "color", "white", "font-size", "xx-large"], [1, "ml-auto", "badge", "bg_success", 2, "color", "white", "font-size", "xx-large"], [1, "ml-auto", "badge", "bg_danger", 2, "color", "white", "font-size", "xx-large"], [1, "col-md-12"], [1, "card-header"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "table-responsive"], [1, "align-middle", "mb-0", "table", "table-borderless", "table-striped", "table-hover"], ["dataTable", ""], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "fa", "fa-circle-o-notch", "fa-spin"], ["class", "badge badge-pill badge_warning", 4, "ngIf"], ["class", "badge badge-pill badge_success", 4, "ngIf"], ["class", "badge badge-pill badge_danger", 4, "ngIf"], ["class", "text-left", 4, "ngIf"], [1, "progress"], ["class", "progress-bar  bg_warning", "role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 40%;", 4, "ngIf"], ["class", "progress-bar  bg_success", "role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 100%;", 4, "ngIf"], ["class", "progress-bar  bg_danger", "role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", "style", "width: 0%;", 4, "ngIf"], [1, "text-muted", 2, "cursor", "pointer"], [1, "fa", "fa-eye", "text_primary", 3, "click"], [1, "badge", "badge-pill", "badge_warning"], [1, "badge", "badge-pill", "badge_success"], [1, "badge", "badge-pill", "badge_danger"], [1, "text-left"], [1, "hide-on-small-and-down", 2, "float", "right"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_warning", 2, "width", "40%"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_success", 2, "width", "100%"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg_danger", 2, "width", "0%"]],
        template: function UserDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "app-layout-topmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Order Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "New Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, UserDashboardComponent_div_19_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Account Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Email Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "h5", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](46, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, " Total Orders ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, " Pending Orders ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, " Confirm Orders ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, " Cancelled Orders ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "Last 7 Days Order Progress \xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](80, UserDashboardComponent_i_80_Template, 1, 0, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "table", 32, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "SR");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "Order Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "Employee Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "Order Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, "Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "th", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](104, UserDashboardComponent_tr_104_Template, 26, 15, "tr", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](12, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](13, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.EmployeeName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.EmployeeEmail);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.EmployeeMobile);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.totalOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.pendinngOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.confirmOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.cancelOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.orderData);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_10__["TopmenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["RouterLinkDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]],
        styles: ["@media only screen and (max-width: 600px) {\n  .hide-on-small-only[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media only screen and (max-width: 992px) {\n  .hide-on-med-and-down[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n  .hide-on-med-and-up[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .hide-on-med-only[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 993px) {\n  .hide-on-large-only[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 1201px) {\n  .hide-on-extra-large-only[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 1201px) {\n  .show-on-extra-large[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n@media only screen and (min-width: 993px) {\n  .show-on-large[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .show-on-medium[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .show-on-small[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n  .show-on-medium-and-up[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n@media only screen and (max-width: 992px) {\n  .show-on-medium-and-down[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHVzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFBb0Isd0JBQUE7RUFFdEI7QUFDRjtBQURBO0VBQ0k7SUFBc0Isd0JBQUE7RUFJeEI7QUFDRjtBQUhBO0VBQ0k7SUFBb0Isd0JBQUE7RUFNdEI7QUFDRjtBQUxBO0VBQ0k7SUFBa0Isd0JBQUE7RUFRcEI7QUFDRjtBQVBBO0VBQ0k7SUFBb0Isd0JBQUE7RUFVdEI7QUFDRjtBQVRBO0VBQ0k7SUFBMEIsd0JBQUE7RUFZNUI7QUFDRjtBQVZBO0VBQ0k7SUFBcUIseUJBQUE7RUFhdkI7QUFDRjtBQVpBO0VBQ0k7SUFBZSx5QkFBQTtFQWVqQjtBQUNGO0FBZEE7RUFDSTtJQUFnQix5QkFBQTtFQWlCbEI7QUFDRjtBQWhCQTtFQUNJO0lBQWUseUJBQUE7RUFtQmpCO0FBQ0Y7QUFsQkE7RUFDSTtJQUF1Qix5QkFBQTtFQXFCekI7QUFDRjtBQXBCQTtFQUNJO0lBQXlCLHlCQUFBO0VBdUIzQjtBQUNGIiwiZmlsZSI6InVzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAuaGlkZS1vbi1zbWFsbC1vbmx5e2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgLmhpZGUtb24tbWVkLWFuZC1kb3due2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpe1xyXG4gICAgLmhpZGUtb24tbWVkLWFuZC11cHtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgLmhpZGUtb24tbWVkLW9ubHl7ZGlzcGxheTpub25lICFpbXBvcnRhbnR9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCl7XHJcbiAgICAuaGlkZS1vbi1sYXJnZS1vbmx5e2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMXB4KXtcclxuICAgIC5oaWRlLW9uLWV4dHJhLWxhcmdlLW9ubHl7ZGlzcGxheTpub25lICFpbXBvcnRhbnR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMXB4KXtcclxuICAgIC5zaG93LW9uLWV4dHJhLWxhcmdle2Rpc3BsYXk6YmxvY2sgIWltcG9ydGFudH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5M3B4KXtcclxuICAgIC5zaG93LW9uLWxhcmdle2Rpc3BsYXk6YmxvY2sgIWltcG9ydGFudH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgLnNob3ctb24tbWVkaXVte2Rpc3BsYXk6YmxvY2sgIWltcG9ydGFudH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIC5zaG93LW9uLXNtYWxse2Rpc3BsYXk6YmxvY2sgIWltcG9ydGFudH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KXtcclxuICAgIC5zaG93LW9uLW1lZGl1bS1hbmQtdXB7ZGlzcGxheTpibG9jayAhaW1wb3J0YW50fVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgLnNob3ctb24tbWVkaXVtLWFuZC1kb3due2Rpc3BsYXk6YmxvY2sgIWltcG9ydGFudH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](UserDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-user-dashboard',
            templateUrl: './user-dashboard.component.html',
            styleUrls: ['./user-dashboard.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dataTable']
          }],
          table1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dataTable1']
          }]
        });
      })();
      /***/

    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "lgCI":
    /*!**************************************************************************!*\
      !*** ./src/app/order-history-details/order-history-details.component.ts ***!
      \**************************************************************************/

    /*! exports provided: OrderHistoryDetailsComponent */

    /***/
    function lgCI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderHistoryDetailsComponent", function () {
        return OrderHistoryDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/layout/header.component */
      "mIkr");
      /* harmony import */


      var _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/layout/topmenu.component */
      "vdYZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function OrderHistoryDetailsComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderHistoryDetailsComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderHistoryDetailsComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderHistoryDetailsComponent_i_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 20);
        }
      }

      function OrderHistoryDetailsComponent_tr_62_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "In Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderHistoryDetailsComponent_tr_62_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Out of Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrderHistoryDetailsComponent_tr_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, OrderHistoryDetailsComponent_tr_62_div_14_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, OrderHistoryDetailsComponent_tr_62_div_15_Template, 2, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;
          var i_r6 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r6 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r5[0].Item_Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r5[0].Item_Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Rs. ", item_r5[0].Unit_Price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r5[0].Discount, " %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r5[0].Vat, " %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r5[0].Stock_State === "In Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r5[0].Stock_State === "Out Of Stock");
        }
      }

      var OrderHistoryDetailsComponent = /*#__PURE__*/function () {
        function OrderHistoryDetailsComponent(route, title, http, authService, router) {
          _classCallCheck(this, OrderHistoryDetailsComponent);

          this.route = route;
          this.title = title;
          this.http = http;
          this.authService = authService;
          this.router = router;
          this.itemData = [];
          this.loading = true;
        }

        _createClass(OrderHistoryDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this34 = this;

            this.currentUser = this.authService.currentUserValue;

            if (this.currentUser['Role'] == 1) {
              this.router.navigate(['/']);
            } else if (this.currentUser['Role'] == 2) {
              this.router.navigate(['/employee-dashboard']);
            }

            this.title.setTitle("Order History Details | KrishnaSales");
            this.route.queryParams.subscribe(function (res) {
              _this34.routeData = res;
            });
            this.orderData = this.routeData;
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/get-all-user-orders")).subscribe(function (item) {
              _this34.loading = false;
              item.data.forEach(function (data) {
                _this34.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/get-user-item-master/") + data['Item_Id']).subscribe(function (item1) {
                  _this34.itemData.push(item1.data);
                });
              });
            });
          }
        }]);

        return OrderHistoryDetailsComponent;
      }();

      OrderHistoryDetailsComponent.??fac = function OrderHistoryDetailsComponent_Factory(t) {
        return new (t || OrderHistoryDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      OrderHistoryDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: OrderHistoryDetailsComponent,
        selectors: [["app-order-history-details"]],
        decls: 63,
        vars: 10,
        consts: [[1, "app-container", "app-theme-white", "body-tabs-shadow", "fixed-sidebar", "fixed-header", "closed-sidebar-mobile", "closed-sidebar"], [1, "app-main"], [1, "app-main__outer"], [1, "app-main__inner", 2, "background", "#f3f6f9"], [1, "row", 2, "margin-bottom", "20px"], [1, "m-0", "text-dark"], [1, "row"], [1, "col-md-12"], [1, "main-card", "mb-3", "white_card"], [1, "card-header"], [1, "card-body"], ["class", "badge badge-pill badge_warning", 4, "ngIf"], ["class", "badge badge-pill badge_danger", 4, "ngIf"], ["class", "badge badge-pill badge_success", 4, "ngIf"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "align-middle", "mb-0", "table", "table-borderless", "table-striped", "table-hover"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-pill", "badge_warning"], [1, "badge", "badge-pill", "badge_danger"], [1, "badge", "badge-pill", "badge_success"], [1, "fa", "fa-circle-o-notch", "fa-spin"], ["class", "badge badge-pill badge_primary", 4, "ngIf"], [1, "badge", "badge-pill", "badge_primary"]],
        template: function OrderHistoryDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-layout-topmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Order History Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Customer Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Employee Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Order Date:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Amount:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Status:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, OrderHistoryDetailsComponent_div_35_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, OrderHistoryDetailsComponent_div_36_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, OrderHistoryDetailsComponent_div_37_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Item List \xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, OrderHistoryDetailsComponent_i_42_Template, 1, 0, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Sr.No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Item No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Item Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Trade Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Discount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Vat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Availability");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, OrderHistoryDetailsComponent_tr_62_Template, 16, 8, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Order ID #", ctx.orderData.Order_Id, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.orderData.Customer_Name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.orderData.Employee_Name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.orderData.Order_Date_Format, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Rs. ", ctx.orderData.Amount, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.orderData.Status === "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.orderData.Status === "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.orderData.Status === "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.itemData);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_8__["TopmenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1oaXN0b3J5LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderHistoryDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-order-history-details',
            templateUrl: './order-history-details.component.html',
            styleUrls: ['./order-history-details.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lxzN":
    /*!******************************************************************!*\
      !*** ./src/app/user-create-order/user-create-order.component.ts ***!
      \******************************************************************/

    /*! exports provided: UserCreateOrderComponent */

    /***/
    function lxzN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserCreateOrderComponent", function () {
        return UserCreateOrderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/layout/header.component */
      "mIkr");
      /* harmony import */


      var _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/layout/topmenu.component */
      "vdYZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../pipe/filter.pipe */
      "PU9F");

      function UserCreateOrderComponent_i_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 27);
        }
      }

      function UserCreateOrderComponent_ng_container_27_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "In Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserCreateOrderComponent_ng_container_27_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Out of Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserCreateOrderComponent_ng_container_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UserCreateOrderComponent_ng_container_27_div_1_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, UserCreateOrderComponent_ng_container_27_div_2_Template, 2, 0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserCreateOrderComponent_ng_container_27_Template_input_ngModelChange_14_listener($event) {
            var item_r6 = ctx.$implicit;
            return item_r6[0].quantity = $event;
          })("keyup", function UserCreateOrderComponent_ng_container_27_Template_input_keyup_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var item_r6 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r10.onKey(item_r6[0].quantity, item_r6.Id, item_r6.Discount, item_r6.Vat, item_r6.Unit_Price, item_r6.Bonus_Qty, item_r6.Bonus_Discount);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserCreateOrderComponent_ng_container_27_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var item_r6 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r12.add_cart(item_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Add Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r6.Stock_State === "In Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r6.Stock_State === "Out Of Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r6.Item_Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" Price ", ctx_r1.currency, " ", item_r6.Unit_Price, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", item_r6[0].quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Discount: ", item_r6.Discount, "% ");
        }
      }

      function UserCreateOrderComponent_div_35_tr_23_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "In Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserCreateOrderComponent_div_35_tr_23_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Out of Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserCreateOrderComponent_div_35_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserCreateOrderComponent_div_35_tr_23_Template_input_ngModelChange_6_listener($event) {
            var cart_r14 = ctx.$implicit;
            return cart_r14[0].quantity = $event;
          })("keyup", function UserCreateOrderComponent_div_35_tr_23_Template_input_keyup_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var cart_r14 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r19.onKey(cart_r14[0].quantity, cart_r14.Id, cart_r14.Discount, cart_r14.Vat, cart_r14.Unit_Price, cart_r14.Bonus_Qty, cart_r14.Bonus_Discount);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, UserCreateOrderComponent_div_35_tr_23_div_14_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, UserCreateOrderComponent_div_35_tr_23_div_15_Template, 2, 0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserCreateOrderComponent_div_35_tr_23_Template_i_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var i_r15 = ctx.index;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r21.removeItem(i_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var cart_r14 = ctx.$implicit;
          var i_r15 = ctx.index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r15 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cart_r14.Item_Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", cart_r14[0].quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cart_r14.Unit_Price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", cart_r14[0].discount, " %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", cart_r14.Vat, " %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", cart_r14.Stock_State === "In Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", cart_r14.Stock_State === "Out Of Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx_r13.currency, " ", cart_r14[0].grand_total, " ");
        }
      }

      function UserCreateOrderComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "table", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Sr.No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Item Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Qty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Unit Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Discount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Vat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Availability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Grand Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, UserCreateOrderComponent_div_35_tr_23_Template, 21, 10, "tr", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.cartList);
        }
      }

      function UserCreateOrderComponent_h4_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Your shopping Cart is empty ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserCreateOrderComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Remark (Optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserCreateOrderComponent_div_37_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.remark = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.remark);
        }
      }

      function UserCreateOrderComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserCreateOrderComponent_div_38_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r24.create_order();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Place Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" Grand Total : ", ctx_r5.currency, " ", ctx_r5.totalAmount, " ");
        }
      }

      var UserCreateOrderComponent = /*#__PURE__*/function () {
        function UserCreateOrderComponent(title, http, authService, router) {
          _classCallCheck(this, UserCreateOrderComponent);

          this.title = title;
          this.http = http;
          this.authService = authService;
          this.router = router;
          this.itemdata = [];
          this.searchtext = "";
          this.totalAmount = 0;
          this.currency = '';
          this.loading = true;
          this.remark = '';
          this.filterKeys = ['ItemId'];
          this.ramdom = Math.floor(100000 + Math.random() * 900000);
          this.cartList = [];
        }

        _createClass(UserCreateOrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.authService.currentUserValue;

            if (this.currentUser['Role'] == 1) {
              this.router.navigate(['/']);
            } else if (this.currentUser['Role'] == 2) {
              this.router.navigate(['/employee-dashboard']);
            }

            this.title.setTitle("Create Order | KrishnaSales");
            this.get_item_data();
            this.currency = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].currency;
          }
        }, {
          key: "create_order",
          value: function create_order() {
            var _this35 = this;

            var formData = new FormData();
            formData.append('Unique_Id', String(this.ramdom));
            formData.append('Customer_Id', this.currentUser['User_Id']);
            formData.append('Amount', String(this.totalAmount));
            formData.append('Remark', this.remark);
            this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/create-order"), formData).subscribe(function (bonus) {
              _this35.remark = '';

              _this35.cartList.forEach(function (data) {
                var formData1 = new FormData();
                formData1.append('Order_Id', String(_this35.ramdom));
                formData1.append('Item_Id', data['Id']);
                formData1.append('Qty', data[0]['quantity']);
                formData1.append('Price', data[0]['grand_total']);
                formData1.append('Discount', data[0]['discount']);
                formData1.append('Vat', data['Vat']);

                _this35.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/create-user-order"), formData1).subscribe(function (bonus) {
                  _this35.cartList.splice(data, 1);
                });
              });
            });
            setTimeout(function () {
              _this35.get_item_data();

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Successfully', 'Order Placed', 'success');
            }, 3000);
          }
        }, {
          key: "get_item_data",
          value: function get_item_data() {
            var _this36 = this;

            this.totalAmount = 0;
            this.itemdata = [];
            this.loading = true;
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/get-all-items-bonus")).subscribe(function (res) {
              _this36.loading = false;
              res.data.forEach(function (data) {
                Array.prototype.push.apply(data, [{
                  quantity: 0,
                  grand_total: 0,
                  discount: 0
                }]);

                _this36.itemdata.push(data);
              });
            });
          }
        }, {
          key: "onKey",
          value: function onKey(qty, id, dis, vat, price, bqty, bdis) {
            var tAmt = 0;
            var disc = 0;
            var tradePrice = 0;
            var vat_Per = 0;
            var grand_total = 0;
            var disount = 0;

            if (qty >= bqty && bqty != 0) {
              disount = bdis;
              tAmt = Number(price) * Number(qty);
              disc = Number(tAmt) / 100;
              tradePrice = Number(tAmt) - Number(disc) * Number(bdis);
              vat_Per = Number(tradePrice) / 100;
              grand_total = Number(tradePrice) + Number(vat_Per) * Number(vat);
            } else {
              disount = dis;
              tAmt = Number(price) * Number(qty);
              disc = Number(tAmt) / 100;
              tradePrice = Number(tAmt) - Number(disc) * Number(dis);
              vat_Per = Number(tradePrice) / 100;
              grand_total = Number(tradePrice) + Number(vat_Per) * Number(vat);
            }

            this.addGradPrice(id, grand_total, disount);
            this.addTotalAmount();
          }
        }, {
          key: "addTotalAmount",
          value: function addTotalAmount() {
            var _this37 = this;

            if (this.cartList.length > 0) {
              this.totalAmount = 0;
              this.cartList.forEach(function (data) {
                _this37.totalAmount = _this37.totalAmount + Number(data[0]['grand_total']);
              });
            }
          }
        }, {
          key: "addGradPrice",
          value: function addGradPrice(id, price, discount) {
            for (var index = 0; index < this.cartList.length; index++) {
              if (this.cartList[index]['Id'] === id) {
                this.cartList[index][0]['grand_total'] = price;
                this.cartList[index][0]['discount'] = discount;
              }
            }

            for (var _index = 0; _index < this.itemdata.length; _index++) {
              if (this.itemdata[_index]['Id'] === id) {
                this.itemdata[_index][0]['grand_total'] = price;
                this.itemdata[_index][0]['discount'] = discount;
              }
            }
          }
        }, {
          key: "removeItem",
          value: function removeItem(index) {
            this.cartList.splice(index, 1);
            this.addTotalAmount();
          }
        }, {
          key: "add_cart",
          value: function add_cart(item) {
            this.cartList.push(item);
            this.addTotalAmount();
          }
        }]);

        return UserCreateOrderComponent;
      }();

      UserCreateOrderComponent.??fac = function UserCreateOrderComponent_Factory(t) {
        return new (t || UserCreateOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      UserCreateOrderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UserCreateOrderComponent,
        selectors: [["app-user-create-order"]],
        decls: 39,
        vars: 10,
        consts: [[1, "app-container", "app-theme-white", "body-tabs-shadow", "fixed-sidebar", "fixed-header", "closed-sidebar-mobile", "closed-sidebar"], [1, "app-main"], [1, "app-main__outer"], [1, "app-main__inner", 2, "background", "#f3f6f9"], [1, "app-page-title", 2, "background", "#f3f6f9"], [1, "page-title-wrapper"], [1, "page-title-heading"], [1, "page-title-icon", 2, "background", "transparent", "box-shadow", "unset"], [1, "pe-7s-file", 2, "color", "#8950fc"], [2, "color", "black"], [1, "row"], [1, "col-md-6"], [1, "main-card", "mb-3", "white_card", 2, "position", "sticky", "top", "6%", "z-index", "1"], [1, "card-body"], [1, "search-wrapper", "active", 2, "width", "100%"], [1, "input-holder", 2, "width", "100%"], ["type", "text", "placeholder", "Search", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "main-card", "mb-3", "white_card", 2, "box-shadow", "unset", "text-shadow", "unset"], [1, "card-title"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "container", 2, "position", "-webkit-sticky", "position", "sticky", "top", "6%"], [1, "main-card", "mb-3", "white_card"], [1, "card-header"], ["class", "table-responsive", 4, "ngIf"], [4, "ngIf"], ["class", "main-card mb-3 white_card", 4, "ngIf"], [1, "fa", "fa-circle-o-notch", "fa-spin"], ["class", "badge badge-pill badge_primary", 4, "ngIf"], ["class", "badge badge-pill badge_danger", 4, "ngIf"], [1, "form-inline"], [1, "col-md-6", "col-sm-12", "form-group", 2, "font-size", "large", "padding", "unset"], [1, "col-md-6", "col-sm-12", "form-group"], [1, "mr-sm-2"], ["type", "number", "name", "qty", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "text_warning"], [1, "btn", "btn_success", 3, "click"], [1, "badge", "badge-pill", "badge_primary"], [1, "badge", "badge-pill", "badge_danger"], [1, "table-responsive"], [1, "align-middle", "mb-0", "table", "table-borderless", "table-striped", "table-hover"], ["class", "animate__animated animate__fadeInRightBig animate__faster", 4, "ngFor", "ngForOf"], [1, "animate__animated", "animate__fadeInRightBig", "animate__faster"], [2, "width", "15%"], [1, "text-muted", 2, "cursor", "pointer"], [1, "fa", "fa-close", 3, "click"], [1, "col-md-12", "col-sm-12", "form-group"], ["type", "text", "name", "remark", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn_primary", 3, "click"]],
        template: function UserCreateOrderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-layout-topmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Create Order ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserCreateOrderComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.searchtext = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Item List \xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, UserCreateOrderComponent_i_25_Template, 1, 0, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, UserCreateOrderComponent_ng_container_27_Template, 20, 7, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](28, "filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "My List ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, UserCreateOrderComponent_div_35_Template, 24, 1, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, UserCreateOrderComponent_h4_36_Template, 2, 0, "h4", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, UserCreateOrderComponent_div_37_Template, 7, 1, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, UserCreateOrderComponent_div_38_Template, 6, 2, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.searchtext);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](28, 7, ctx.itemdata, ctx.searchtext));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cartList.length !== 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cartList.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cartList.length !== 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cartList.length !== 0);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_9__["TopmenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"]],
        pipes: [_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]],
        styles: [".badge_purple[_ngcontent-%COMP%] {\n  color: #8950fc;\n  background: rgba(137, 80, 252, 0.1);\n}\n\n.badge_red[_ngcontent-%COMP%] {\n  color: red;\n  background: rgba(255, 0, 0, 0.1);\n}\n\n.btn_green[_ngcontent-%COMP%] {\n  background: #1bc5bd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHVzZXItY3JlYXRlLW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1DQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoidXNlci1jcmVhdGUtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFkZ2VfcHVycGxle1xyXG4gICAgY29sb3I6ICM4OTUwZmM7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogIzg5NTBmYywgJGFscGhhOiAwLjEpO1xyXG59XHJcblxyXG4uYmFkZ2VfcmVke1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiByZWQsICRhbHBoYTogMC4xKTtcclxufVxyXG5cclxuLmJ0bl9ncmVlbntcclxuICAgIGJhY2tncm91bmQ6ICMxYmM1YmQ7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserCreateOrderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-create-order',
            templateUrl: './user-create-order.component.html',
            styleUrls: ['./user-create-order.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mIkr":
    /*!***************************************************!*\
      !*** ./src/app/shared/layout/header.component.ts ***!
      \***************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function mIkr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HeaderComponent_img_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 30);
        }
      }

      function HeaderComponent_img_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 31);
        }
      }

      function HeaderComponent_img_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 32);
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(authService) {
          _classCallCheck(this, HeaderComponent);

          this.authService = authService;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.authService.currentUserValue;
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.??fac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HeaderComponent,
        selectors: [["app-layout-header"]],
        decls: 37,
        vars: 4,
        consts: [[1, "app-header", "header-shadow", 2, "background", "#f3f6f9", "box-shadow", "unset"], [1, "app-header__logo"], ["width", "42", "src", "assets/logo.png", "alt", "", 1, "rounded-circle"], [2, "font-size", "x-large"], [1, "app-header__mobile-menu"], ["type", "button", "menuToggle", "", 1, "hamburger", "hamburger--elastic", "mobile-toggle-nav"], [1, "hamburger-box"], [1, "hamburger-inner"], [1, "app-header__menu"], ["type", "button", 1, "btn-icon", "btn-icon-only", "btn", "btn-primary", "btn-sm", "mobile-toggle-header-nav"], [1, "btn-icon-wrapper"], [1, "fa", "fa-ellipsis-v", "fa-w-6"], [1, "app-header__content"], [1, "app-header-left"], [1, "app-header-right"], [1, "header-btn-lg", "pr-0"], [1, "widget-content", "p-0"], [1, "widget-content-wrapper"], [1, "widget-content-left"], [1, "btn-group"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "p-0", "btn"], ["width", "42", "class", "rounded-circle", "src", "assets/admin.png", "alt", "", 4, "ngIf"], ["width", "42", "class", "rounded-circle", "src", "assets/employee.png", "alt", "", 4, "ngIf"], ["width", "42", "class", "rounded-circle", "src", "assets/customer.png", "alt", "", 4, "ngIf"], [1, "fa", "fa-angle-down", "ml-2", "opacity-8"], ["tabindex", "-1", "role", "menu", "aria-hidden", "true", 1, "dropdown-menu", "dropdown-menu-right"], ["type", "button", "tabindex", "0", 1, "dropdown-item"], ["type", "button", "tabindex", "0", 1, "dropdown-item", 3, "click"], [1, "widget-content-left", "ml-3", "header-user-info"], [1, "widget-heading"], ["width", "42", "src", "assets/admin.png", "alt", "", 1, "rounded-circle"], ["width", "42", "src", "assets/employee.png", "alt", "", 1, "rounded-circle"], ["width", "42", "src", "assets/customer.png", "alt", "", 1, "rounded-circle"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\xA0\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "b", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Krishnasales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, HeaderComponent_img_25_Template, 1, 0, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, HeaderComponent_img_26_Template, 1, 0, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, HeaderComponent_img_27_Template, 1, 0, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_button_click_32_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Role === "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Role === "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Role === "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Name, " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-layout-header',
            templateUrl: './header.component.html'
          }]
        }], function () {
          return [{
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mvmY":
    /*!************************************************************!*\
      !*** ./src/app/employee-users/employee-users.component.ts ***!
      \************************************************************/

    /*! exports provided: EmployeeUsersComponent */

    /***/
    function mvmY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeUsersComponent", function () {
        return EmployeeUsersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/layout/header.component */
      "mIkr");
      /* harmony import */


      var _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/layout/topmenu.component */
      "vdYZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function EmployeeUsersComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EmployeeUsersComponent_i_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 20);
        }
      }

      function EmployeeUsersComponent_tr_41_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EmployeeUsersComponent_tr_41_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function EmployeeUsersComponent_tr_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, EmployeeUsersComponent_tr_41_div_14_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, EmployeeUsersComponent_tr_41_div_15_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r4 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r3.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r3.Email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r3.Mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r3.Username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r3.EmpName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r3.Is_Active === "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r3.Is_Active === "1");
        }
      }

      var EmployeeUsersComponent = /*#__PURE__*/function () {
        function EmployeeUsersComponent(router, title, http, authService) {
          _classCallCheck(this, EmployeeUsersComponent);

          this.router = router;
          this.title = title;
          this.http = http;
          this.authService = authService;
          this.loading = true;
          this.customerdata = [];
        }

        _createClass(EmployeeUsersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.authService.currentUserValue;

            if (this.currentUser['Role'] == 1) {
              this.router.navigate(['/']);
            } else if (this.currentUser['Role'] == 3) {
              this.router.navigate(['/customer-dashboard']);
            }

            this.getAllUser();
            this.title.setTitle("Employee - Users | KrishnaSales");
          }
        }, {
          key: "getAllUser",
          value: function getAllUser() {
            var _this38 = this;

            this.loading = true;
            this.customerdata = [];
            this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/get-all-customers")).subscribe(function (item) {
              _this38.loading = false;
              _this38.customerdata = item.data;
            });
          }
        }]);

        return EmployeeUsersComponent;
      }();

      EmployeeUsersComponent.??fac = function EmployeeUsersComponent_Factory(t) {
        return new (t || EmployeeUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
      };

      EmployeeUsersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EmployeeUsersComponent,
        selectors: [["app-employee-users"]],
        decls: 42,
        vars: 3,
        consts: [[1, "app-container", "app-theme-white", "body-tabs-shadow", "fixed-sidebar", "fixed-header", "closed-sidebar-mobile", "closed-sidebar"], [1, "app-main"], [1, "app-main__outer"], [1, "app-main__inner", 2, "background", "#f3f6f9"], [1, "app-page-title", 2, "background", "#f3f6f9"], [1, "page-title-wrapper"], [1, "page-title-heading"], [1, "page-title-icon", 2, "background", "transparent", "box-shadow", "unset"], [1, "pe-7s-user", 2, "color", "#8950fc"], [2, "color", "black"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "main-card", "mb-3", "white_card"], [1, "card-header"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "card-body"], [1, "table-responsive"], [1, "align-middle", "mb-0", "table", "table-borderless", "table-striped", "table-hover"], [4, "ngFor", "ngForOf"], [1, "fa", "fa-circle-o-notch", "fa-spin"], ["class", "badge badge-pill badge-dark", 4, "ngIf"], ["class", "badge badge-pill badge_success", 4, "ngIf"], [1, "badge", "badge-pill", "badge-dark"], [1, "badge", "badge-pill", "badge_success"]],
        template: function EmployeeUsersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-layout-topmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Customers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, EmployeeUsersComponent_div_14_Template, 2, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "List Customers \xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, EmployeeUsersComponent_i_20_Template, 1, 0, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "table", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "SR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Employee Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, EmployeeUsersComponent_tr_41_Template, 16, 8, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.customerdata);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _shared_layout_topmenu_component__WEBPACK_IMPORTED_MODULE_8__["TopmenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS11c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmployeeUsersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-employee-users',
            templateUrl: './employee-users.component.html',
            styleUrls: ['./employee-users.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _bonus_master_bonus_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bonus-master/bonus-master.component */
      "YH7h");
      /* harmony import */


      var _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customers/customers.component */
      "4yXv");
      /* harmony import */


      var _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./employee-dashboard/employee-dashboard.component */
      "IfXj");
      /* harmony import */


      var _employee_order_history_employee_order_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./employee-order-history/employee-order-history.component */
      "b1oT");
      /* harmony import */


      var _employee_users_employee_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./employee-users/employee-users.component */
      "mvmY");
      /* harmony import */


      var _employees_employees_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./employees/employees.component */
      "Uflk");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _item_master_item_master_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./item-master/item-master.component */
      "hTiQ");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _order_history_details_order_history_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./order-history-details/order-history-details.component */
      "lgCI");
      /* harmony import */


      var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./order-history/order-history.component */
      "d759");
      /* harmony import */


      var _user_create_order_user_create_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./user-create-order/user-create-order.component */
      "lxzN");
      /* harmony import */


      var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./user-dashboard/user-dashboard.component */
      "jBv/");
      /* harmony import */


      var _user_order_history_user_order_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./user-order-history/user-order-history.component */
      "JEGr");
      /* harmony import */


      var _helper_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./__helper/guard/auth.guard */
      "LJId");

      var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        canActivate: [_helper_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
      }, {
        path: 'order-history',
        component: _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_12__["OrderHistoryComponent"],
        canActivate: [_helper_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
      }, {
        path: 'order-history-details',
        component: _order_history_details_order_history_details_component__WEBPACK_IMPORTED_MODULE_11__["OrderHistoryDetailsComponent"],
        canActivate: [_helper_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
      }, {
        path: 'item-master',
        component: _item_master_item_master_component__WEBPACK_IMPORTED_MODULE_9__["ItemMasterComponent"],
        canActivate: [_helper_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
      }, {
        path: 'bonus-master',
        component: _bonus_master_bonus_master_component__WEBPACK_IMPORTED_MODULE_2__["BonusMasterComponent"],
        canActivate: [_helper_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
      }, {
        path: 'customer',
        component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"],
        canActivate: [_helper_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
      }, {
        path: 'employees',
        component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_7__["EmployeesComponent"],
        canActivate: [_helper_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
      }, {
        path: 'customer-dashboard',
        component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["UserDashboardComponent"],
        canActivate: [_helper_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
      }, {
        path: 'customer-create-order',
        component: _user_create_order_user_create_order_component__WEBPACK_IMPORTED_MODULE_13__["UserCreateOrderComponent"],
        canActivate: [_helper_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
      }, {
        path: 'customer-order-history',
        component: _user_order_history_user_order_history_component__WEBPACK_IMPORTED_MODULE_15__["UserOrderHistoryComponent"],
        canActivate: [_helper_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
      }, {
        path: 'employee-dashboard',
        component: _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeDashboardComponent"],
        canActivate: [_helper_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
      }, {
        path: 'employee-customers',
        component: _employee_users_employee_users_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeUsersComponent"],
        canActivate: [_helper_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
      }, {
        path: 'employee-order-history',
        component: _employee_order_history_employee_order_history_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeOrderHistoryComponent"],
        canActivate: [_helper_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vdYZ":
    /*!****************************************************!*\
      !*** ./src/app/shared/layout/topmenu.component.ts ***!
      \****************************************************/

    /*! exports provided: TopmenuComponent */

    /***/
    function vdYZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopmenuComponent", function () {
        return TopmenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var _c0 = function _c0() {
        return [""];
      };

      var _c1 = function _c1() {
        return ["/order-history"];
      };

      var _c2 = function _c2() {
        return ["/item-master"];
      };

      var _c3 = function _c3() {
        return ["/bonus-master"];
      };

      var _c4 = function _c4() {
        return ["/customer"];
      };

      var _c5 = function _c5() {
        return ["/employees"];
      };

      function TopmenuComponent_ul_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Dashboards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Order History ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Item Master ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Bonus Master ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Customers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Employees ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mm_active", ctx_r0.subtitle === "Dashboard | KrishnaSales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](18, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mm_active", ctx_r0.subtitle === "Order History | KrishnaSales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](19, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mm_active", ctx_r0.subtitle === "Item Master | KrishnaSales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](20, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mm_active", ctx_r0.subtitle === "Bonus Master | KrishnaSales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](21, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mm_active", ctx_r0.subtitle === "Customers | KrishnaSales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](22, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mm_active", ctx_r0.subtitle === "Employees | KrishnaSales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](23, _c5));
        }
      }

      var _c6 = function _c6() {
        return ["/customer-dashboard"];
      };

      var _c7 = function _c7() {
        return ["/customer-create-order"];
      };

      var _c8 = function _c8() {
        return ["/customer-order-history"];
      };

      function TopmenuComponent_ul_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Dashboards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Create Order ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Order History ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mm_active", ctx_r1.subtitle === "Customer Dashboard | KrishnaSales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](9, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mm_active", ctx_r1.subtitle === "Create Order | KrishnaSales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mm_active", ctx_r1.subtitle === "Customer Order History | KrishnaSales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c8));
        }
      }

      var _c9 = function _c9() {
        return ["/employee-dashboard"];
      };

      var _c10 = function _c10() {
        return ["/employee-order-history"];
      };

      function TopmenuComponent_ul_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Dashboards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Order History ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mm_active", ctx_r2.subtitle === "Employee Dashboard | KrishnaSales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mm_active", ctx_r2.subtitle === "Employee Order History | KrishnaSales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c10));
        }
      }

      var TopmenuComponent = /*#__PURE__*/function () {
        function TopmenuComponent(authService, title) {
          _classCallCheck(this, TopmenuComponent);

          this.authService = authService;
          this.title = title;
          this.subtitle = '';
        }

        _createClass(TopmenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.subtitle = this.title.getTitle();
            this.currentUser = this.authService.currentUserValue;
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }]);

        return TopmenuComponent;
      }();

      TopmenuComponent.??fac = function TopmenuComponent_Factory(t) {
        return new (t || TopmenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]));
      };

      TopmenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TopmenuComponent,
        selectors: [["app-layout-topmenu"]],
        decls: 23,
        vars: 3,
        consts: [[1, "app-sidebar", "sidebar-shadow", 2, "background", "#181c32", "box-shadow", "0 0 30px 0 rgb(82 63 105 / 5%)"], [1, "app-header__logo"], [1, "logo-src"], [1, "header__pane", "ml-auto"], ["type", "button", "data-class", "closed-sidebar", 1, "hamburger", "close-sidebar-btn", "hamburger--elastic"], [1, "hamburger-box"], [1, "hamburger-inner"], [1, "app-header__mobile-menu"], ["type", "button", 1, "hamburger", "hamburger--elastic", "mobile-toggle-nav"], [1, "app-header__menu"], ["type", "button", 1, "btn-icon", "btn-icon-only", "btn", "btn-primary", "btn-sm", "mobile-toggle-header-nav"], [1, "btn-icon-wrapper"], [1, "fa", "fa-ellipsis-v", "fa-w-6"], [1, "scrollbar-sidebar"], [1, "app-sidebar__inner"], ["class", "vertical-nav-menu", 4, "ngIf"], [1, "vertical-nav-menu"], [1, "app-sidebar__heading", 2, "color", "white"], [3, "routerLink"], [1, "metismenu-icon", "pe-7s-rocket"], [1, "metismenu-icon", "pe-7s-clock"], [1, "metismenu-icon", "pe-7s-file"], [1, "metismenu-icon", "pe-7s-users"], [1, "metismenu-icon", "pe-7s-portfolio"]],
        template: function TopmenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, TopmenuComponent_ul_20_Template, 27, 24, "ul", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, TopmenuComponent_ul_21_Template, 15, 12, "ul", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, TopmenuComponent_ul_22_Template, 11, 8, "ul", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser["Role"] == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser["Role"] == 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser["Role"] == 2);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TopmenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-layout-topmenu',
            templateUrl: './topmenu.component.html'
          }]
        }], function () {
          return [{
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../__helper/service/auth.service */
      "ao6q");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService, router, title) {
          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.router = router;
          this.title = title;
          this.email = '';
          this.password = '';
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.title.setTitle("Login | KrishnaSales");
          }
        }, {
          key: "login",
          value: function login() {
            var _this39 = this;

            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (this.email !== '' && this.password !== '') {
              if (re.test(this.email) == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('', 'Email is not valid.', 'error');
              } else {
                this.authService.login(this.email, this.password).subscribe(function (user) {
                  if (user) {
                    if (user['Role'] === '1') {
                      _this39.router.navigate(['/']);
                    } else if (user['Role'] == '3') {
                      _this39.router.navigate(['/customer-dashboard']);
                    } else if (user['Role'] == '2') {
                      _this39.router.navigate(['/employee-dashboard']);
                    }
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', 'User not found', 'error');
                  } // this.router.navigate(['/']);

                });
              }
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('', 'All Fields are Mendatory', 'warning');
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_helper_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]));
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 28,
        vars: 2,
        consts: [[1, "h-100", "bg-animation", 2, "background", "url('assets/banner-bg.jpg') no-repeat", "background-size", "cover"], [1, "d-flex", "h-100", "justify-content-center", "align-items-center"], [1, "mx-auto", "app-login-box", "col-md-8"], [1, "app-logo-inverse", "mx-auto", "mb-3"], [1, "modal-dialog", "w-100", "mx-auto"], [1, "modal-content"], [1, "modal-body"], [1, "h5", "modal-title", "text-center"], [1, "mt-2"], ["id", "exampleInputGroup1", "role", "group", "aria-describedby", "exampleInputGroup1__BV_description_", 1, "form-group"], ["id", "exampleInput1", "type", "email", "placeholder", "Enter email...", "required", "required", "aria-required", "true", "aria-describedby", "exampleInputGroup1__BV_description_", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "exampleInputGroup2", "role", "group", 1, "form-group"], ["id", "exampleInput2", "type", "password", "placeholder", "Enter password...", "required", "required", "aria-required", "true", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "custom-control", "custom-checkbox"], ["id", "exampleCheck", "type", "checkbox", "name", "check", "autocomplete", "off", "value", "true", 1, "custom-control-input"], ["for", "exampleCheck", 1, "custom-control-label"], [1, "divider"], [1, "modal-footer", "clearfix"], [1, "float-right"], ["type", "button", 1, "btn", "btn_primary", "btn-lg", 3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Krishna Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Keep me logged in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_button_click_26_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Login to Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.password);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
        styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _helper_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map