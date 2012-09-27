myApp.directive('slickgridjs', function () {
    return {
        require: '?ngModel',
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        link: function ($scope, element, attrs) {

            var grid;
            var data = [];
            var dataView;
            var selectedRowIds = [];
            var columns = $scope.state.columns;

            dataView = new Slick.Data.DataView();

            grid = new Slick.Grid("#myGrid", dataView, columns, $scope.state.options);

            $("#myGrid").data("gridInstance", grid);

            grid.setSelectionModel(new Slick.CellSelectionModel());

            grid.onCellChange.subscribe(function (e, args) {
                $scope.state.rows = grid.getData();
                $scope.$apply();
            });

            grid.focusLastRow = function () {
                selectedRowIds = [];
                var lastRow = dataView.getLength() - 1;
                var lastRowItem = dataView.getItem(lastRow);
                grid.gotoCell(lastRow, 0, true);
                selectedRowIds.push(lastRowItem.id);
            };

            grid.onSelectedRowsChanged.subscribe(function () {
                selectedRowIds = [];
                var rows = grid.getSelectedRows();
                for (var i = 0, l = rows.length; i < l; i++) {
                    var rowId = rows[i];
                    var item = dataView.getItem(rowId);
                    if (item) selectedRowIds.push(item);
                }
                //if (window.confirm("Are you sure you want to delete?")) {
                //    dataView.deleteItems(selectedRowIds);
                $scope.state.deletedrows = selectedRowIds;
                //}
            });

            dataView.deleteItems = function (selectedRowIds) {
                //alert(selectedRowIds.length);
                for (var i = 0; i < selectedRowIds.length; i++) {
                    //alert(selectedRowIds[i].id);
                    dataView.deleteItem(selectedRowIds[i].id);
                }
            };

            var redraw = function (newScopeData) {
                alert(newScopeData);
                if (typeof (newScopeData) != "undefined") {
                    dataView.beginUpdate();
                    dataView.setItems(newScopeData);
                    dataView.endUpdate();
                    grid.render();
                    //grid.focusLastRow();
                }
            };
            $scope.$watch(attrs.data, redraw, true);
        }
    };
});